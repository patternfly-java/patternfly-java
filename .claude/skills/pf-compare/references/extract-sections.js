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
// Extracts example sections from the jump links navigation on both
// PF React and PFJ showcase pages. Jump links follow a nested structure:
// top-level groups (H2 headings like "Examples", "Props") contain
// nested section items (H3 headings like "Variant examples", "Disabled buttons").
//
// Usage: pass "pf" or "pfj" as the first argument to control which
// top-level groups are excluded. For "pf", pass the component slug
// as the second argument to validate that each section has a
// corresponding preview container (ws-react-c-{component}-{id}).
//
// Returns: [{ id, title, group }]
(pageType, componentSlug) => {
  const PF_EXCLUDE = ['props', 'css variables'];
  const PFJ_EXCLUDE = ['api documentation'];
  const excludeGroups = pageType === 'pf' ? PF_EXCLUDE : PFJ_EXCLUDE;

  const jumpLinksList = document.querySelector('.pf-v6-c-jump-links__list');
  if (!jumpLinksList) return [];

  const sections = [];
  const topItems = jumpLinksList.querySelectorAll(':scope > .pf-v6-c-jump-links__item');

  for (const topItem of topItems) {
    const topLink = topItem.querySelector(':scope > .pf-v6-c-jump-links__link');
    if (!topLink) continue;

    const groupTitle = topLink.textContent.trim();
    const groupHref = topLink.querySelector('a')?.getAttribute('href') || '';
    const groupId = groupHref.replace(/^#/, '');

    if (excludeGroups.some(ex => groupTitle.toLowerCase() === ex)) continue;

    const nestedList = topItem.querySelector(':scope > .pf-v6-c-jump-links__list');
    if (nestedList) {
      const nestedItems = nestedList.querySelectorAll(':scope > .pf-v6-c-jump-links__item');
      for (const nested of nestedItems) {
        const link = nested.querySelector('a');
        if (!link) continue;
        const title = link.textContent.trim();
        const href = link.getAttribute('href') || '';
        const id = href.replace(/^#/, '');
        sections.push({ id, title, group: groupTitle });
      }
    } else {
      sections.push({ id: groupId, title: groupTitle, group: null });
    }
  }

  // For PF pages, filter to sections that have a preview container
  if (pageType === 'pf' && componentSlug) {
    const prefix = 'ws-react-c-' + componentSlug + '-';
    return sections.filter(s => document.getElementById(prefix + s.id));
  }

  // For PFJ pages, filter to sections that have a data-pfj-demo element
  if (pageType === 'pfj') {
    return sections.filter(s => {
      const heading = document.getElementById(s.id);
      if (!heading) return false;
      const stack = heading.parentElement?.parentElement?.parentElement;
      return stack && stack.querySelector('[data-pfj-demo]');
    });
  }

  return sections;
}
