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
// @ts-ignore
import {writeFile} from 'node:fs/promises';
import type {IconSpec} from './icons.js';
import * as SETS from './icons.js';

// ------------------------------------------------------ constants

const keywords: string[] = ["clone", "import", "package", "private"];
const root: string = "../main/java";
const path: string = "org/patternfly/icon";
const package_: string = path.replaceAll('/', '.');

// ------------------------------------------------------ icon spec

const iconSpecs = (entries: [string, Record<string, IconSpec>][]) => `package ${package_};

import javax.annotation.processing.Generated;

/*
* WARNING! This class is generated. Do not modify.
*/
@Generated("generate.ts")
@SuppressWarnings("SpellCheckingInspection")
public interface IconSpecs {
    ${entries.map(([set, icons]) => iconSpec(set, icons)).join('\n    ')}
}
`;

const iconSpec = (set: string, icons: Record<string, IconSpec>) =>
    `public enum ${set} {
        ${Object.entries(icons)
        .map(([id, icon]) => {
            const constant = failSafeName(camelCase(id));
            camelCase(id, {pascalCase: true});
            return `${constant}(new IconSpec("${set}", "${id}", ${icon.xOffset || 0}, ${icon.yOffset || 0}, ${icon.width}, ${icon.height}, "${icon.path}", "${icon.license}")),`;
        })
        .join('\n        ')};

        final IconSpec iconSpec;

        ${set}(IconSpec iconSpec) {
            this.iconSpec = iconSpec;
        }
    }`;

// ------------------------------------------------------ icon set

const iconSets = (entries: [string, Record<string, IconSpec>][]) => `package ${package_};

import javax.annotation.processing.Generated;

/*
* WARNING! This class is generated. Do not modify.
*/
@Generated("generate.ts")
@SuppressWarnings("SpellCheckingInspection")
public interface IconSets {
    ${entries.map(([set, icons]) => iconSet(set, icons)).join('\n    ')}
}
`;

const iconSet = (set: string, icons: Record<string, IconSpec>) =>
    `public interface ${set} {
        ${Object.entries(icons)
        .map(([id]) => {
            const constant = failSafeName(camelCase(id));
            return `static PredefinedIcon ${constant}() { return new PredefinedIcon(IconSpecs.${set}.${constant}.iconSpec); }`;
        })
        .join('\n        ')}
    }`;

const failSafeName = (value: string) => keywords.includes(value) ? value + "_" : value

// ------------------------------------------------------ main

let iconsCount = 0;
const setEntries: [string, Record<string, IconSpec>][] = Object.entries(SETS);
for (const [_, icons] of setEntries) {
    iconsCount += Object.entries(icons).length;
}

const dir = new URL(`${root}/${path}/`, import.meta.url);
const iconSpecsCode = iconSpecs(setEntries);
await writeFile(new URL(`./IconSpecs.java`, dir), iconSpecsCode, 'utf8');
const iconSetsCode = iconSets(setEntries);
await writeFile(new URL(`./IconSets.java`, dir), iconSetsCode, 'utf8');
console.info(`Generated code for ${iconsCount} icons`);
