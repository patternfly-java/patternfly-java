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
// Generic DOM normalizer for comparing PatternFly component HTML.
// Takes a raw HTML string (innerHTML of a preview container) and
// returns a flat list of element signatures containing only
// PF-relevant classes, modifiers, and attributes.
//
// This script is component-agnostic — it works for any PF component.
//
// Usage: pass the raw innerHTML string as the sole argument.
// Returns: [{ depth, tag, classes, modifiers, attributes, text, isSvg, svgViewBox }]
(html) => {
  const container = document.createElement('div');
  container.innerHTML = html;

  const STRIP_ATTRS = new Set([
    'class', 'style', 'data-pfcsce', 'on-detach-uid'
  ]);
  const KEEP_ATTRS = new Set([
    'role', 'type', 'tabindex', 'disabled', 'hidden',
    'href', 'target'
  ]);

  function shouldKeepAttr(name) {
    if (STRIP_ATTRS.has(name)) return false;
    if (KEEP_ATTRS.has(name)) return true;
    if (name.startsWith('aria-')) return true;
    if (name.startsWith('data-ouia-')) return false;
    if (name === 'id') return false;
    return false;
  }

  const elements = [];

  function walk(node, depth) {
    if (node.nodeType !== Node.ELEMENT_NODE) return;

    const tag = node.tagName.toLowerCase();

    // SVG: capture viewBox only, do not recurse into children
    if (tag === 'svg') {
      elements.push({
        depth,
        tag: 'svg',
        classes: [],
        modifiers: [],
        attributes: {},
        text: '',
        isSvg: true,
        svgViewBox: node.getAttribute('viewBox') || null
      });
      return;
    }

    // Extract PF component/layout classes and modifier classes
    const classes = [];
    const modifiers = [];
    for (const cls of node.classList) {
      if (cls.startsWith('pf-v6-c-') || cls.startsWith('pf-v6-l-')) {
        classes.push(cls);
      } else if (cls.startsWith('pf-m-')) {
        modifiers.push(cls);
      }
    }
    classes.sort();
    modifiers.sort();

    // Extract filtered attributes
    const attributes = {};
    for (const attr of node.attributes) {
      if (shouldKeepAttr(attr.name)) {
        attributes[attr.name] = attr.value;
      }
    }

    // Direct text content (not descendant text)
    let text = '';
    for (const child of node.childNodes) {
      if (child.nodeType === Node.TEXT_NODE) {
        const t = child.textContent.trim();
        if (t) text += (text ? ' ' : '') + t;
      }
    }
    if (text.length > 50) text = text.substring(0, 50) + '...';

    // Only include elements that have PF classes, modifiers, or relevant attributes
    const hasPfContent = classes.length > 0 || modifiers.length > 0;
    const hasRelevantAttrs = Object.keys(attributes).length > 0;
    if (hasPfContent || hasRelevantAttrs || tag === 'input' || tag === 'select' || tag === 'textarea') {
      elements.push({
        depth,
        tag,
        classes,
        modifiers,
        attributes,
        text,
        isSvg: false,
        svgViewBox: null
      });
    }

    // Recurse into children
    for (const child of node.children) {
      walk(child, depth + 1);
    }
  }

  // Walk top-level children of the container
  for (const child of container.children) {
    walk(child, 0);
  }

  return elements;
}
