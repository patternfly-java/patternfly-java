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
import {fas as FAS} from "@fortawesome/free-solid-svg-icons";
import {far as FAR} from "@fortawesome/free-regular-svg-icons";
import {fab as FAB} from "@fortawesome/free-brands-svg-icons";

// Based on https://github.com/patternfly/patternfly-react/packages/react-icons/scripts/icons/faIcons.mjs

/**
 * @param {object} icon FontAwesome icon to convert
 */
function convertIcon(icon) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [width, height, ligatures, unicode, svgPathData] = icon.icon;

    return {
        xOffset: 0,
        yOffset: 0,
        width,
        height,
        svgPathData,
        license: "FontAwesome. CC-BY-4.0"
    };
}

/**
 * @param {object} icon FontAwesome icon to name
 * @returns {string} PatternFly name of the icon
 */
function getIconName(icon) {
    if (icon.iconName === "500px") {
        return "five-hundred-px";
    }
    return icon.iconName;
}

/**
 * @param {object} icons Icons like { faIconName: { faIconDef } }
 */
function convertIcons(icons) {
    delete icons.faFontAwesomeLogoFull;

    return Object.values(icons)
        .map((icon) => ({
            name: getIconName(icon),
            data: convertIcon(icon)
        }))
        .reduce((acc, cur) => {
            acc[cur.name] = cur.data;
            return acc;
        }, {});
}

export const fab = {name: "fab", icons: convertIcons(FAB)};
export const far = {name: "far", icons: convertIcons(FAR)};
export const fas = {name: "fas", icons: convertIcons(FAS)};
