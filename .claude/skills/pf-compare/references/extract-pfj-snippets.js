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
// Extracts PFJ snippets from the PatternFly Java showcase page.
// Expected DOM: h3.ws-heading > stackItem > stack (3 levels up).
// The stack's second child contains the preview div with rendered HTML.
// This traversal is fragile -- if the PFJ showcase restructures its
// snippet layout, update the parentElement chain accordingly.
() => {
  const headings = document.querySelectorAll('h3.ws-heading');
  const snippets = [];
  for (const h3 of headings) {
    const id = h3.id;
    const title = h3.textContent.trim();
    const stack = h3.parentElement?.parentElement?.parentElement;
    if (!stack) continue;
    const children = stack.children;
    if (children.length < 2) continue;
    const previewItem = children[1];
    const previewDiv = previewItem?.firstElementChild;
    const html = previewDiv ? previewDiv.innerHTML.trim() : '';
    snippets.push({ id, title, html });
  }
  return snippets;
}