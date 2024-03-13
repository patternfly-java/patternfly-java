///
///  Copyright 2023 Red Hat
///
///  Licensed under the Apache License, Version 2.0 (the "License");
///  you may not use this file except in compliance with the License.
///  You may obtain a copy of the License at
///
///      https://www.apache.org/licenses/LICENSE-2.0
///
///  Unless required by applicable law or agreed to in writing, software
///  distributed under the License is distributed on an "AS IS" BASIS,
///  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
///  See the License for the specific language governing permissions and
///  limitations under the License.
///

import type { IconPack } from '@fortawesome/free-regular-svg-icons';

import { fas as FAS } from '@fortawesome/free-solid-svg-icons';
import { far as FAR } from '@fortawesome/free-regular-svg-icons';
import { fab as FAB } from '@fortawesome/free-brands-svg-icons';

import pfIcons from '@patternfly/patternfly/icons/pf-icons.json' assert { type: 'json' };
// @ts-ignore
import customIcons from './custom.json' assert { type: 'json' };

export interface IconSpec {
  /** SVG view box x offset */
  xOffset?: number;
  /** SVG view box y offset */
  yOffset?: number;
  /** Icon width in pixels */
  width: number;
  /** Icon height in pixels */
  height: number;
  /** SVG path attribute value */
  path: string | string[ ];
  /** copyright holder and SPDX short license identifier */
  license: string
}

type JsonIconPack = Record<string, Omit<IconSpec, 'path'|'license'> & { svgPathData: string }>;

const NAMES: Record<string, string> = {
  'save': 'save-alt',
  'folder-open': 'folder-open-alt',
  'edit': 'edit-alt',
  'print': 'print-alt',
  'spinner': 'spinner-alt',
  'home': 'home-alt',
  'memory': 'memory-alt',
  'server': 'server-alt',
  'user': 'user-sec',
  'users': 'users-alt',
  'info': 'info-alt',
  'filter': 'filter-alt'
};

function convertFontAwesomePack(icons: IconPack): Record<string, IconSpec> {
  delete icons.faFontAwesomeLogoFull;
  return Object.fromEntries(
    Object.values(icons)
      .map(({ iconName, icon: [width, height, , , path] }) => [
        (iconName === '500px' ? 'five-hundred-px' : iconName),
        {
          xOffset: 0,
          yOffset: 0,
          width,
          height,
          path,
          license: 'fontawesome. CC-BY-4.0',
        }
      ])
  );
}

function convertJsonIconPack(icons: JsonIconPack): Record<string, IconSpec> {
  delete icons.history;
  const license = 'Red Hat, Inc. MIT';
  return Object.fromEntries(Object.entries(icons)
    .map(([name, { width, height, svgPathData: path }]) =>
      [(NAMES[name] as string ?? name), { width, height, path, license }]));
}

export const fab = convertFontAwesomePack(FAB);
export const far = convertFontAwesomePack(FAR);
export const fas = convertFontAwesomePack(FAS);

export const patternfly = convertJsonIconPack({
  ...pfIcons,
  ...customIcons,
});
