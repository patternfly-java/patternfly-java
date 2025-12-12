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

// ------------------------------------------------------ static helpers

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
const _buildPropsFromAttributes = (el) => {
    const props = {};
    for (const attr of el.attributes) {
        const camel = _dashToCamel(attr.name);
        // skip standard attributes not relevant to React props
        if (camel === 'class' || camel === 'style') continue;
        props[camel] = parseAttrValue(camel, attr.value);
    }
    return props;
};

const _dashToCamel = (str) => str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

// Props we currently do not support because they expect React elements
const disallowedProps = new Set([
    'containerComponent',
    'desc',
    'events',
    'groupComponent',
    'labelComponent',
    'legendComponent',
    'subTitleComponent',
    'titleComponent',
]);

// ------------------------------------------------------ instance

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

        // Common properties applicable to all React chart components that are
        //  a) either complex attributes such as a function or structured (JSON) data or
        //  b) trigger a re-render when changed.
        this._categories = undefined; // string[]
        this._data = undefined; // any | any[]
        this._height = undefined; // number
        this._labels = undefined; // (data: any) => string
        this._legendAllowWrap = undefined; // boolean
        this._legendData = undefined; // string[]
        this._legendOrientation = undefined; // string
        this._legendPosition = undefined; // string
        this._padding = undefined; // { top?: number, bottom?: number, left?: number, right?: number }
        this._subTitle = undefined; // string
        this._subTitlePosition = undefined; // string
        this._themeColor = undefined; // string
        this._title = undefined; // string
        this._width = undefined; // number
    }

    // ------------------------------------------------------ render

    createRenderRoot() {
        // Use shadow root to encapsulate but allow React to mount inside
        return super.createRenderRoot();
    }

    render() {
        return html`
            <div class="container"></div>
            <slot style="display: none;"></slot>`;
    }

    // Must be implemented by subclasses to return [ReactComponent, extraProps]
    getReactComponent() {
        throw new Error('getReactComponent() must be implemented by subclass');
    }

    // central render method for standalone and slotted elements.
    _renderReact() {
        if (!this._root) return;

        const rawProps = _buildPropsFromAttributes(this);
        const commonProps = this._commonProps();
        const [Component, extraProps = {}] = this.getReactComponent();
        const props = {...rawProps, ...commonProps, ...extraProps};
        for (const key of Object.keys(props)) {
            if (disallowedProps.has(key)) delete props[key];
        }

        const children = this._getReactChildren();
        this._root.render(React.createElement(Component, props, ...children));
    }

    _getReactChildren() {
        const slot = this.renderRoot.querySelector('slot');
        if (!slot) return [];

        const assignedElements = slot.assignedElements();
        const reactChildren = [];

        for (const el of assignedElements) {
            if (el instanceof ReactWrapperElement) {
                const childRawProps = _buildPropsFromAttributes(el);
                const childCommonProps = el._commonProps(); // Use child's common props, not parent's!
                const [ChildComponent, childExtraProps = {}] = el.getReactComponent();
                const childProps = {...childRawProps, ...childCommonProps, ...childExtraProps};
                for (const key of Object.keys(childProps)) {
                    if (disallowedProps.has(key)) delete childProps[key];
                }
                reactChildren.push(React.createElement(ChildComponent, childProps));
            }
        }
        return reactChildren;
    }

    // ------------------------------------------------------ lifecycle

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

    _isSlottedChild() {
        // Check if this element's parent is also a ReactWrapperElement
        const parent = this.parentElement;
        return parent && parent instanceof ReactWrapperElement;
    }

    _notifyChange() {
        const parent = this.parentElement;
        if (parent && parent instanceof ReactWrapperElement && parent._renderReact) {
            // If slotted, notify the parent to re-render
            parent._renderReact();
        } else if (this._renderReact) {
            // If standalone, render self
            this._renderReact();
        }
    }

    // ------------------------------------------------------ getters/setters

    get categories() {
        return this._categories;
    }

    set categories(value) {
        this._categories = value;
        this._notifyChange();
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
        this._notifyChange();
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
        this._notifyChange();
    }

    get labels() {
        return this._labels;
    }

    set labels(value) {
        this._labels = value;
        this._notifyChange();
    }

    get legendAllowWrap() {
        return this._legendAllowWrap;
    }

    set legendAllowWrap(value) {
        this._legendAllowWrap = value;
        this._notifyChange();
    }

    get legendData() {
        return this._legendData;
    }

    set legendData(value) {
        this._legendData = value;
        this._notifyChange();
    }

    get legendOrientation() {
        return this._legendOrientation;
    }

    set legendOrientation(value) {
        this._legendOrientation = value;
        this._notifyChange();
    }

    get legendPosition() {
        return this._legendPosition;
    }

    set legendPosition(value) {
        this._legendPosition = value;
        this._notifyChange();
    }

    get padding() {
        return this._padding;
    }

    set padding(value) {
        this._padding = value;
        this._notifyChange();
    }

    get subTitle() {
        return this._subTitle;
    }

    set subTitle(value) {
        this._subTitle = value;
        this._notifyChange();
    }

    get subTitlePosition() {
        return this._subTitlePosition;
    }

    set subTitlePosition(value) {
        this._subTitlePosition = value;
        this._notifyChange();
    }

    get themeColor() {
        return this._themeColor;
    }

    set themeColor(value) {
        this._themeColor = value;
        this._notifyChange();
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
        this._notifyChange();
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
        this._notifyChange();
    }

    _commonProps() {
        const commonProps = {};
        if (this._categories && typeof this._categories !== 'string') {
            commonProps.categories = this._categories;
        } else if (this.getAttribute('categories')) {
            commonProps.categories = parseAttrValue('categories', this.getAttribute('categories'));
        }
        if (this._data && typeof this._data !== 'string') {
            commonProps.data = this._data;
        } else if (this.getAttribute('data')) {
            commonProps.data = parseAttrValue('data', this.getAttribute('data'));
        }
        if (this._height !== undefined) {
            commonProps.height = Number(this._height);
        }
        if (this._labels !== undefined) {
            commonProps.labels = this._labels;
        }
        if (this._legendAllowWrap !== undefined) {
            commonProps.legendAllowWrap = this._legendAllowWrap;
        }
        if (this._legendData && typeof this._legendData !== 'string') {
            commonProps.legendData = this._legendData;
        } else if (this.getAttribute('legend-data')) {
            commonProps.legendData = parseAttrValue('legend-data', this.getAttribute('legend-data'));
        }
        if (this._legendOrientation !== undefined) {
            commonProps.legendOrientation = this._legendOrientation;
        }
        if (this._legendPosition !== undefined) {
            commonProps.legendPosition = this._legendPosition;
        }
        if (this._padding !== undefined) {
            commonProps.padding = this._padding;
        }
        if (this._subTitle !== undefined) {
            commonProps.subTitle = this._subTitle;
        }
        if (this._subTitlePosition !== undefined) {
            commonProps.subTitlePosition = this._subTitlePosition;
        }
        if (this._themeColor !== undefined) {
            commonProps.themeColor = this._themeColor;
        }
        if (this._title !== undefined) {
            commonProps.title = this._title;
        }
        if (this._width !== undefined) {
            commonProps.width = Number(this._width);
        }
        return commonProps;
    }
}
