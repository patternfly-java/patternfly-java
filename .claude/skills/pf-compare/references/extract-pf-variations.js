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
// Extracts PF variations from the PatternFly component showcase page.
// Expected DOM: Each variation lives in a div with id="ws-core-c-{component}-{slug}".
// Inside each container, a heading element with id="{slug}" provides the title,
// and a child div.ws-preview-html contains the rendered HTML preview.
// The "ws-core-c-" prefix is the PatternFly workshop/showcase convention.
(componentSlug) => {
  const prefix = 'ws-core-c-' + componentSlug + '-';
  const containers = document.querySelectorAll('div[id^="' + prefix + '"]');
  const variations = [];
  for (const container of containers) {
    const id = container.id;
    const slug = id.replace(prefix, '');
    const heading = document.getElementById(slug);
    const title = heading ? heading.textContent.trim() : slug.replace(/-/g, ' ');
    const preview = container.querySelector('.ws-preview-html');
    const html = preview ? preview.innerHTML.trim() : '';
    variations.push({ slug, title, html });
  }
  return variations;
}