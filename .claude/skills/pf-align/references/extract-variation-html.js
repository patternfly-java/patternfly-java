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
// Extracts the rendered HTML preview for a specific variation from
// the PatternFly component showcase page.
// Expected DOM: div#ws-core-c-{component}-{variation} > div.ws-preview-html
// The "ws-core-c-" prefix is the PatternFly workshop/showcase convention.
(componentSlug, variationSlug) => {
  const prefix = 'ws-core-c-' + componentSlug + '-';
  const container = document.getElementById(prefix + variationSlug);
  if (!container) return null;
  const preview = container.querySelector('.ws-preview-html');
  return preview ? preview.innerHTML.trim() : null;
}