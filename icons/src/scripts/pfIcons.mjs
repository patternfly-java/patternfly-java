import customIcons from "@patternfly/react-icons/scripts/icons/customIcons.mjs";
import {pfIcons} from "@patternfly/patternfly/icons/pficons.mjs";

function addLicense(icons) {
    let result = {};
    Object.keys(icons).forEach(icon => {
        result[icon] = {...(icons[icon]), "license": 'Red Hat, Inc. MIT'};
    })
    return result;
}

export const patternfly = {
    name: "patternfly", icons: {
        ...addLicense(pfIcons),
        ...addLicense(customIcons)
    }
};
