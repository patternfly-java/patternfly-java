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
import rhIconsMicrons from "@patternfly/react-icons/scripts/icons/rhIconsMicrons.mjs";
import rhIconsStandard from "@patternfly/react-icons/scripts/icons/rhIconsStandard.mjs";
import rhIconsUI from "@patternfly/react-icons/scripts/icons/rhIconsUI.mjs";

function flattenPath(svgPathData) {
    if (typeof svgPathData === "string") {
        return svgPathData;
    }
    if (Array.isArray(svgPathData)) {
        return svgPathData.map(item => typeof item === "string" ? item : item.path).join(" ");
    }
    return String(svgPathData);
}

function convertIcons(icons, prefix) {
    let result = {};
    Object.keys(icons).forEach(key => {
        const stripped = key.startsWith(prefix) ? key.slice(prefix.length) : key;
        const icon = icons[key];
        result[stripped] = {
            xOffset: icon.xOffset || 0,
            yOffset: icon.yOffset || 0,
            width: icon.width,
            height: icon.height,
            svgPathData: flattenPath(icon.svgPathData),
            license: "Red Hat, Inc. MIT"
        };
    });
    return result;
}

export const rhMicrons = {name: "rhMicrons", icons: convertIcons(rhIconsMicrons, "rh-microns-")};
export const rhStandard = {name: "rhStandard", icons: convertIcons(rhIconsStandard, "rh-standard-")};
export const rhUi = {name: "rhUi", icons: convertIcons(rhIconsUI, "rh-ui-")};
