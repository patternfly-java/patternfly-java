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
// Detects the PatternFly version from the PF showcase site navigation.
// Looks for a button element whose text contains "Release" (e.g., "Release 6.1").
// Falls back to "unknown" if not found -- this can happen if PF changes
// their nav layout or removes the release button.
() => {
  const allButtons = document.querySelectorAll('button');
  const releaseBtn = Array.from(allButtons).find(b => b.textContent.includes('Release'));
  if (releaseBtn) return releaseBtn.textContent.trim();
  const versionMeta = document.querySelector('meta[name="version"]');
  if (versionMeta) return versionMeta.getAttribute('content');
  const footerVersion = document.querySelector('footer')?.textContent?.match(/v?\d+\.\d+/);
  if (footerVersion) return footerVersion[0];
  return 'unknown';
}