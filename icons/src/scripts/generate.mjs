import camelCase from "camelcase";
import {writeFile} from "node:fs/promises";
import {fab, far, fas} from "./faIcons.mjs";
import {patternfly} from "./pfIcons.mjs";

// ------------------------------------------------------ constants

const keywords = ["clone", "import", "package", "private"];
const root = "../main/java";
const path = "org/patternfly/icon";
const package_ = path.replaceAll('/', '.');

// ------------------------------------------------------ icon spec

const generateIconSpecs = (iconSets) => `package ${package_};

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
    ${iconSets.map(({name, icons}) => generateIconSpec(name, icons)).join("\n    ")}
}
`;

const generateIconSpec = (set, icons) =>
    `public enum ${set} {
        ${Object.entries(icons)
        .map(([id, icon]) => {
            const constant = failSafeName(camelCase(id));
            camelCase(id, {pascalCase: true});
            return `${constant}(new IconSpec("${set}", "${id}", ${icon.xOffset || 0}, ${icon.yOffset || 0}, ${icon.width}, ${icon.height}, "${icon.svgPathData}", "${icon.license}")),`;
        })
        .join('\n        ')};

        final IconSpec iconSpec;

        ${set}(IconSpec iconSpec) {
            this.iconSpec = iconSpec;
        }
    }`;

// ------------------------------------------------------ icon set

const generateIconSets = (iconSets) => `package ${package_};

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
 * <p>The icons are returned as {@link PredefinedIcon}s and can be adjusted if necessary.</p>
 * @see <a href="https://www.patternfly.org/design-foundations/icons/">https://www.patternfly.org/design-foundations/icons/</a>
 * @see <a href="https://fontawesome.com/icons?d=gallery&m=free">https://fontawesome.com/icons?d=gallery&m=free</a>
 */
@Generated("generate.ts")
@SuppressWarnings("SpellCheckingInspection")
// WARNING: This class is generated. Do not modify.
public interface IconSets {
    ${iconSets.map(({name, icons}) => generateIconSet(name, icons)).join("\n    ")}
}
`;

const generateIconSet = (set, icons) =>
    `public interface ${set} {
        ${Object.entries(icons)
        .map(([id]) => {
            const constant = failSafeName(camelCase(id));
            return `static PredefinedIcon ${constant}() { return new PredefinedIcon(IconSpecs.${set}.${constant}.iconSpec); }`;
        })
        .join('\n        ')}
    }`;

// ------------------------------------------------------ helpers

const failSafeName = (name) => keywords.includes(name) ? name + "_" : name

// ------------------------------------------------------ main

const iconSets = [fab, far, fas, patternfly];
const iconCount = iconSets
    .map(iconSet => Object.keys(iconSet.icons).length)
    .reduce((acc, cur) => acc + cur, 0);
const dir = new URL(`${root}/${path}/`, import.meta.url);
await writeFile(new URL("./IconSpecs.java", dir), generateIconSpecs(iconSets), "utf8");
await writeFile(new URL("./IconSets.java", dir), generateIconSets(iconSets), "utf8");
console.info(`Generated code for ${iconCount} icons`);
