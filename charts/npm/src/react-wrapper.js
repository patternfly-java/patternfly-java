/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import {css, html, LitElement} from 'lit';
import React from 'react';
import {createRoot} from 'react-dom/client';

export const dashToCamel = (str) => str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

// Parse attribute values to JS types
export const parseAttrValue = (name, value) => {
    if (value === '' || value === undefined || value === null) {
        // boolean attribute presence => true
        return true;
    }
    const trimmed = String(value).trim();
    if (trimmed === 'true') return true;
    if (trimmed === 'false') return false;
    if (/^\d+(?:\.\d+)?$/.test(trimmed)) return Number(trimmed);
    // JSON arrays or objects
    if ((trimmed.startsWith('{') && trimmed.endsWith('}')) || (trimmed.startsWith('[') && trimmed.endsWith(']'))) {
        try {
            return JSON.parse(trimmed);
        } catch (_) {
            // fallthrough
        }
    }
    return value;
};

// Build props from attributes of an element
export const buildPropsFromAttributes = (el) => {
    const props = {};
    for (const attr of el.attributes) {
        const camel = dashToCamel(attr.name);
        // skip standard attributes not relevant to React props
        if (camel === 'class' || camel === 'style') continue;
        props[camel] = parseAttrValue(camel, attr.value);
    }
    return props;
};

// Props we currently do not support because they expect functions or React elements
const disallowedProps = new Set([
    'events',
    'containerComponent',
    'legendComponent',
    'labelComponent',
    'titleComponent',
    'subTitleComponent',
    'groupComponent',
    'desc' // container-composed
]);

export class ReactWrapperElement extends LitElement {
    static styles = css`
        :host {
            display: inline-block;
        }

        .container {
            width: 100%;
            height: 100%;
        }
    `;

    constructor() {
        super();
        this._root = null;
        this._container = null;
        this._observer = null;
        this._component = null;
    }

    createRenderRoot() {
        // Use shadow root to encapsulate but allow React to mount inside
        return super.createRenderRoot();
    }

    render() {
        return html`
            <div class="container"></div>
            <slot style="display: none;"></slot>`;
    }

    firstUpdated(_changedProperties) {
        this._container = this.renderRoot.querySelector('.container');

        // Check if this element is slotted into a parent that will handle rendering
        const isSlotted = this._isSlottedChild();

        if (isSlotted) {
            // If slotted, DON'T create a React root - parent will handle rendering
            this._observer = new MutationObserver(() => {
                const parent = this.parentElement;
                if (parent && parent instanceof ReactWrapperElement && parent._renderReact) {
                    parent._renderReact();
                }
            });
            this._observer.observe(this, {attributes: true});
        } else {
            // If standalone, create React root and render normally
            this._root = createRoot(this._container);
            this._observer = new MutationObserver(() => this._renderReact());
            this._observer.observe(this, {attributes: true, childList: true, subtree: true});

            // Listen to slot changes to re-render when children change
            const slot = this.renderRoot.querySelector('slot');
            if (slot) {
                slot.addEventListener('slotchange', () => this._renderReact());
            }
            this._renderReact();
        }
    }

    _isSlottedChild() {
        // Check if this element's parent is also a ReactWrapperElement
        const parent = this.parentElement;
        return parent && parent instanceof ReactWrapperElement;
    }

    // Helper method for property setters to trigger re-render
    _notifyChange() {
        const parent = this.parentElement;
        if (parent && parent instanceof ReactWrapperElement && parent._renderReact) {
            // If slotted, notify parent to re-render
            parent._renderReact();
        } else if (this._renderReact) {
            // If standalone, render self
            this._renderReact();
        }
    }

    disconnectedCallback() {
        if (this._observer) {
            this._observer.disconnect();
            this._observer = null;
        }
        if (this._root) {
            this._root.unmount();
            this._root = null;
        }
        super.disconnectedCallback();
    }

    // Implemented by subclasses to return [ReactComponent, extraProps]
    getReactComponent() {
        throw new Error('getReactComponent() must be implemented by subclass');
    }

    _renderReact() {
        if (!this._root) return;

        const [Component, extraProps = {}] = this.getReactComponent();
        const rawProps = buildPropsFromAttributes(this);
        const props = {...rawProps, ...extraProps};

        for (const key of Object.keys(props)) {
            if (disallowedProps.has(key)) delete props[key];
        }
        if (props.width) props.width = Number(props.width);
        if (props.height) props.height = Number(props.height);

        // Check if there are slotted children that are React wrapper components
        const children = this._getReactChildren();

        this._root.render(React.createElement(Component, props, ...children));
    }

    _getReactChildren() {
        const slot = this.renderRoot.querySelector('slot');
        if (!slot) return [];

        const assignedElements = slot.assignedElements();
        const reactChildren = [];

        for (const el of assignedElements) {
            // Check if the element is a ReactWrapperElement
            if (el instanceof ReactWrapperElement) {
                const [ChildComponent, childExtraProps = {}] = el.getReactComponent();
                const childRawProps = buildPropsFromAttributes(el);

                // Allow parent to transform child props if needed
                const childProps = {...childRawProps, ...childExtraProps};

                // Clean up disallowed props
                for (const key of Object.keys(childProps)) {
                    if (disallowedProps.has(key)) delete childProps[key];
                }
                if (childProps.width) childProps.width = Number(childProps.width);
                if (childProps.height) childProps.height = Number(childProps.height);

                reactChildren.push(React.createElement(ChildComponent, childProps));
            }
        }
        return reactChildren;
    }
}
