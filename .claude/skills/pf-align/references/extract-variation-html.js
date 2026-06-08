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
// Extracts the rendered HTML preview for a specific section from
// the PatternFly React component showcase page.
// Expected DOM: div#ws-react-c-{component}-{section-slug}
// The "ws-react-c-" prefix is the PatternFly React showcase convention.
(componentSlug, sectionSlug) => {
  const id = 'ws-react-c-' + componentSlug + '-' + sectionSlug;
  const container = document.getElementById(id);
  return container ? container.innerHTML.trim() : null;
}
