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
import camelCase from "camelcase";
import {mkdir, writeFile} from "node:fs/promises";
import {fab, far, fas} from "./faIcons.mjs";
import {patternfly} from "./pfIcons.mjs";
import {rhMicrons, rhStandard, rhUi} from "./rhIcons.mjs";

// ------------------------------------------------------ constants

const keywords = ["clone", "default", "import", "new", "package", "private"];
const root = "../main/java";
const path = "org/patternfly/icon";
const package_ = path.replaceAll('/', '.');
const DEFAULT_CHUNK_SIZE = 400;

// ------------------------------------------------------ icon spec

const iconSpecDescriptions = {
    fab: '<a href="https://fontawesome.com/search?o=r&m=free&f=brands">Fontawesome brand icons</a>',
    far: '<a href="https://fontawesome.com/search?o=r&m=free&s=regular">Fontawesome regular icons</a>',
    fas: '<a href="https://fontawesome.com/search?o=r&m=free&s=solid">Fontawesome solid icons</a>',
    patternfly: '<a href="https://www.patternfly.org/design-foundations/icons/#patternfly-icons">PatternFly icons</a>',
    rhMicrons: 'Red Hat microns icons',
    rhStandard: 'Red Hat standard icons',
    rhUi: 'Red Hat UI icons',
};

const CHUNK_SIZE = parseInt(process.argv[2]) || DEFAULT_CHUNK_SIZE;

const iconSpecClassName = (set, chunkIndex) =>
    chunkIndex !== undefined
        ? `IconSpecs${set.charAt(0).toUpperCase()}${set.slice(1)}${chunkIndex}`
        : `IconSpecs${set.charAt(0).toUpperCase()}${set.slice(1)}`;

const chunkEntries = (icons) => {
    const entries = Object.entries(icons);
    if (entries.length <= CHUNK_SIZE) return [entries];
    const chunks = [];
    for (let i = 0; i < entries.length; i += CHUNK_SIZE) {
        chunks.push(entries.slice(i, i + CHUNK_SIZE));
    }
    return chunks;
};

const generateIconSpecEnum = (className, set, entries) => `package ${package_};

import javax.annotation.processing.Generated;

/**
 * Icon specifications for ${iconSpecDescriptions[set]}.
 * <p>You probably won't need to use this class directly, but instead work with {@link IconSets.${set}}.</p>
 * @see <a href="https://www.patternfly.org/design-foundations/icons/">https://www.patternfly.org/design-foundations/icons/</a>
 * @see <a href="https://fontawesome.com/icons?d=gallery&m=free">https://fontawesome.com/icons?d=gallery&m=free</a>
 */
@Generated("generate.mjs")
@SuppressWarnings("SpellCheckingInspection")
// WARNING: This class is generated. Do not modify.
public enum ${className} {
    ${entries
        .map(([id, icon]) => {
            const constant = failSafeName(camelCase(id));
            return `${constant}(new IconSpec("${set}", "${id}", ${icon.xOffset || 0}, ${icon.yOffset || 0}, ${icon.width}, ${icon.height}, "${icon.svgPathData}", "${icon.license}")),`;
        })
        .join('\n    ')};

    final IconSpec iconSpec;

    ${className}(IconSpec iconSpec) {
        this.iconSpec = iconSpec;
    }
}
`;

const generateIconSpecFiles = (set, icons) => {
    const chunks = chunkEntries(icons);
    if (chunks.length === 1) {
        const className = iconSpecClassName(set);
        return [{className, content: generateIconSpecEnum(className, set, chunks[0])}];
    }
    return chunks.map((chunk, i) => {
        const className = iconSpecClassName(set, i);
        return {className, content: generateIconSpecEnum(className, set, chunk)};
    });
};

const iconSpecClassForConstant = (set, icons) => {
    const chunks = chunkEntries(icons);
    if (chunks.length === 1) {
        return () => iconSpecClassName(set);
    }
    const constantToChunk = new Map();
    chunks.forEach((chunk, i) => {
        for (const [id] of chunk) {
            constantToChunk.set(failSafeName(camelCase(id)), iconSpecClassName(set, i));
        }
    });
    return (constant) => constantToChunk.get(constant);
};

// ------------------------------------------------------ icon spec lookup

const generateIconSpecLookup = (iconSets) => {
    const cases = iconSets.map(({name, icons}) => {
        const chunks = chunkEntries(icons);
        if (chunks.length === 1) {
            return `            case "${name}":
                return ${iconSpecClassName(name)}.valueOf(iconName).iconSpec;`;
        }
        const tryBlocks = chunks.map((_, i) => {
            const cn = iconSpecClassName(name, i);
            return `                try { return ${cn}.valueOf(iconName).iconSpec; } catch (IllegalArgumentException ignored) {}`;
        }).join('\n');
        return `            case "${name}":\n${tryBlocks}\n                throw new IllegalArgumentException("Unknown icon: '" + name + "'");`;
    }).join('\n');

    return `package ${package_};

import javax.annotation.processing.Generated;

/**
 * Utility class to look up {@link IconSpec} instances by icon set name and icon name.
 */
@Generated("generate.mjs")
@SuppressWarnings("SpellCheckingInspection")
// WARNING: This class is generated. Do not modify.
final class IconSpecLookup {

    static IconSpec find(String name) {
        String group = "fas";
        String iconName = name;
        if (name.contains(".")) {
            group = name.substring(0, name.indexOf('.'));
            iconName = name.substring(name.indexOf('.') + 1);
        }
        switch (group) {
${cases}
            default:
                throw new IllegalArgumentException("Unknown icon: '" + name + "'");
        }
    }

    private IconSpecLookup() {}
}
`;
};

// ------------------------------------------------------ icon set

const generateIconSets = (iconSets) => `package ${package_};

import javax.annotation.processing.Generated;

/**
 * This interface provides methods for accessing all icons in PatternFly Java. The icons are grouped in interfaces:
 * <dl>
 *     <dt>{@link fab}</dt>
 *     <dd><a href="https://fontawesome.com/search?o=r&m=free&f=brands">Fontawesome brand icons</a></dd>
 *     <dt>{@link far}</dt>
 *     <dd><a href="https://fontawesome.com/search?o=r&m=free&s=regular">Fontawesome regular icons</a></dd>
 *     <dt>{@link fas}</dt>
 *     <dd><a href="https://fontawesome.com/search?o=r&m=free&s=solid">Fontawesome solid icons</a></dd>
 *     <dt>{@link patternfly}</dt>
 *     <dd><a href="https://www.patternfly.org/design-foundations/icons/#patternfly-icons">PatternFly icons</a></dd>
 *     <dt>{@link rhMicrons}</dt>
 *     <dd>Red Hat microns icons</dd>
 *     <dt>{@link rhStandard}</dt>
 *     <dd>Red Hat standard icons</dd>
 *     <dt>{@link rhUi}</dt>
 *     <dd>Red Hat UI icons</dd>
 * </dl>
 * <p>The icons are returned as {@link PredefinedIcon}s and can be adjusted if necessary.</p>
 * @see <a href="https://www.patternfly.org/design-foundations/icons/">https://www.patternfly.org/design-foundations/icons/</a>
 * @see <a href="https://fontawesome.com/icons?d=gallery&m=free">https://fontawesome.com/icons?d=gallery&m=free</a>
 */
@Generated("generate.mjs")
@SuppressWarnings("SpellCheckingInspection")
// WARNING: This class is generated. Do not modify.
public interface IconSets {
    ${iconSets.map(({name, icons}) => generateIconSet(name, icons)).join("\n    ")}
}
`;

const generateIconSet = (set, icons) => {
    const classForConstant = iconSpecClassForConstant(set, icons);
    return `public interface ${set} {
        ${Object.entries(icons)
        .map(([id]) => {
            const constant = failSafeName(camelCase(id));
            return `static PredefinedIcon ${constant}() { return new PredefinedIcon(${classForConstant(constant)}.${constant}.iconSpec); }`;
        })
        .join('\n        ')}
    }`;
};

// ------------------------------------------------------ helpers

const failSafeName = (name) => {
    if (keywords.includes(name)) return name + "_";
    if (/^\d/.test(name)) return "_" + name;
    return name;
}

// ------------------------------------------------------ main

const iconSets = [fab, far, fas, patternfly, rhMicrons, rhStandard, rhUi];
const iconCount = iconSets
    .map(iconSet => Object.keys(iconSet.icons).length)
    .reduce((acc, cur) => acc + cur, 0);
const dir = new URL(`${root}/${path}/`, import.meta.url);
await mkdir(dir, { recursive: true });
for (const {name, icons} of iconSets) {
    for (const {className, content} of generateIconSpecFiles(name, icons)) {
        await writeFile(new URL(`./${className}.java`, dir), content, "utf8");
    }
}
await writeFile(new URL("./IconSets.java", dir), generateIconSets(iconSets), "utf8");
await writeFile(new URL("./IconSpecLookup.java", dir), generateIconSpecLookup(iconSets), "utf8");
console.info(`Generated code for ${iconCount} icons`);
