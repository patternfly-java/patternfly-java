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
import { LitElement, html, css } from 'lit';
import React from 'react';
import { createRoot } from 'react-dom/client';

// Utility: dash-case to camelCase
export const dashToCamel = (str) => str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

// Utility: parse attribute values to JS types
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

// Utility: build props from attributes of element
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
    :host { display: inline-block; }
    .container { width: 100%; height: 100%; }
  `;

  constructor() {
    super();
    this._root = null;
    this._container = null;
    this._observer = null;
    this._component = null;
  }

  createRenderRoot() {
    // Use shadow root to encapsulate, but allow React to mount inside
    return super.createRenderRoot();
  }

  render() {
    return html`<div class="container" part="container"></div>`;
  }

  firstUpdated() {
    this._container = this.renderRoot.querySelector('.container');
    this._root = createRoot(this._container);
    // Observe attribute changes dynamically (no need for observedAttributes)
    this._observer = new MutationObserver(() => this._renderReact());
    this._observer.observe(this, { attributes: true });
    this._renderReact();
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
    const props = { ...rawProps, ...extraProps };

    // Drop disallowed props and likely-function strings
    for (const key of Object.keys(props)) {
      if (disallowedProps.has(key)) delete props[key];
    }

    // Ensure numeric sizing, default size if none set via style
    if (props.width) props.width = Number(props.width);
    if (props.height) props.height = Number(props.height);

    // Render React component
    this._root.render(React.createElement(Component, props));
  }
}
