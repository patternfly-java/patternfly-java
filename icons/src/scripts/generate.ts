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

import camelCase from 'camelcase';
import {mkdir, writeFile} from 'node:fs/promises';
import type {IconSpec} from './icons.js';
import * as SETS from './icons.js';

const keywords = ["import", "package", "private"];
const root = "../../target/generated-sources/js";
const package_ = "org/patternfly/icon";

const iconSpec = (set: string, id: string, name: string, {
    license,
    height,
    width,
    path,
    xOffset = 0,
    yOffset = 0
}: IconSpec) => `package org.patternfly.icon.${set};

import org.patternfly.icon.IconSpec;

public class ${name} extends IconSpec {

    public ${name}() {
        super("${set}", "${id}", ${xOffset}, ${yOffset}, ${width}, ${height}, "${path}", "${license}");
    }
}
`;

const iconSets = (entries: [string, Record<string, IconSpec>][]) => `package org.patternfly.icon;

@SuppressWarnings("SpellCheckingInspection")
public final class IconSets {

    ${entries.map(([set, icons]) => iconSet(set, icons)).join('\n    ')}
}
`;

const iconSet = (set: string, icons: Record<string, IconSpec>) =>
    `public enum ${set} implements IconSet, PredefinedIcon {

        ${Object.entries(icons)
        .map(([id, icon]) => {
            const enumConstant = failSafeName(camelCase(id));
            const className = camelCase(id, {pascalCase: true});
            return `${enumConstant}(new org.patternfly.icon.${set}.${className}()),`;
        })
        .join('\n        ')};

        private final IconSpec spec;

        ${set}(IconSpec spec) {
            this.spec = spec;
        }

        @Override
        public IconSpec spec() {
            return spec;
        }

        @Override
        public ${set} that() {
            return this;
        }
    }
`;

const failSafeName = (value: string) => keywords.includes(value) ? value + "_" : value

const entries: [string, Record<string, IconSpec>][] = Object.entries(SETS);
for (const [set, icons] of entries) {
    const setDir = new URL(`${root}/${package_}/${set}/`, import.meta.url);
    await mkdir(setDir, {recursive: true});
    for (const [id, icon] of Object.entries(icons)) {
        const name = camelCase(id, {pascalCase: true});
        const iconSpecCode = iconSpec(set, id, name, icon);
        await writeFile(new URL(`./${name}.java`, setDir), iconSpecCode, 'utf8');
    }
}

const dir = new URL(`${root}/${package_}/`, import.meta.url);
const predefinedIconCode = iconSets(entries);
await writeFile(new URL(`./IconSets.java`, dir), predefinedIconCode, 'utf8');
