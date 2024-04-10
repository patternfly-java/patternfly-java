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

/**
 * This interface contains the specifications for all icons in PatternFly Java. The icons are grouped in four enums:
 * <dl>
 *     <dt>{@link fab}</dt>
 *     <dd><a href="https://fontawesome.com/search?o=r&m=free&f=brands">Fontawesome brand icons</a></dd>
 *     <dt>{@link far}</dt>
 *     <dd><a href="https://fontawesome.com/search?o=r&m=free&s=regular">Fontawesome regular icons</a></dd>
 *     <dt>{@link fas}</dt>
 *     <dd><a href="https://fontawesome.com/search?o=r&m=free&s=solid">Fontawesome solid icons</a></dd>
 *     <dt>{@link patternfly}</dt>
 *     <dd><a href="https://www.patternfly.org/design-foundations/icons/#patternfly-icons">PatternFly icons</a></dd>
 * </dl>
 * <p>You probably won't need to use these classes directly, but instead work with {@link IconSets}.</p>
 * @see <a href="https://www.patternfly.org/design-foundations/icons/">https://www.patternfly.org/design-foundations/icons/</a>
 * @see <a href="https://fontawesome.com/icons?d=gallery&m=free">https://fontawesome.com/icons?d=gallery&m=free</a>
 */
@Generated("generate.ts")
@SuppressWarnings("SpellCheckingInspection")
// WARNING: This class is generated. Do not modify.
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

/**
 * This interface provides methods for accessing all icons in PatternFly Java. The icons are grouped in four interfaces:
 * <dl>
 *     <dt>{@link fab}</dt>
 *     <dd><a href="https://fontawesome.com/search?o=r&m=free&f=brands">Fontawesome brand icons</a></dd>
 *     <dt>{@link far}</dt>
 *     <dd><a href="https://fontawesome.com/search?o=r&m=free&s=regular">Fontawesome regular icons</a></dd>
 *     <dt>{@link fas}</dt>
 *     <dd><a href="https://fontawesome.com/search?o=r&m=free&s=solid">Fontawesome solid icons</a></dd>
 *     <dt>{@link patternfly}</dt>
 *     <dd><a href="https://www.patternfly.org/design-foundations/icons/#patternfly-icons">PatternFly icons</a></dd>
 * </dl>
 * <p>The icons are retunred as {@link PredefinedIcon}s and can be adjusted if necessary.</p>
 * @see <a href="https://www.patternfly.org/design-foundations/icons/">https://www.patternfly.org/design-foundations/icons/</a>
 * @see <a href="https://fontawesome.com/icons?d=gallery&m=free">https://fontawesome.com/icons?d=gallery&m=free</a>
 */
@Generated("generate.ts")
@SuppressWarnings("SpellCheckingInspection")
// WARNING: This class is generated. Do not modify.
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
