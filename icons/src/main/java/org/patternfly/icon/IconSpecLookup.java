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
package org.patternfly.icon;

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
            case "fab":
                try { return IconSpecsFab0.valueOf(iconName).iconSpec; } catch (IllegalArgumentException ignored) {}
                try { return IconSpecsFab1.valueOf(iconName).iconSpec; } catch (IllegalArgumentException ignored) {}
                throw new IllegalArgumentException("Unknown icon: '" + name + "'");
            case "far":
                return IconSpecsFar.valueOf(iconName).iconSpec;
            case "fas":
                try { return IconSpecsFas0.valueOf(iconName).iconSpec; } catch (IllegalArgumentException ignored) {}
                try { return IconSpecsFas1.valueOf(iconName).iconSpec; } catch (IllegalArgumentException ignored) {}
                try { return IconSpecsFas2.valueOf(iconName).iconSpec; } catch (IllegalArgumentException ignored) {}
                try { return IconSpecsFas3.valueOf(iconName).iconSpec; } catch (IllegalArgumentException ignored) {}
                throw new IllegalArgumentException("Unknown icon: '" + name + "'");
            case "patternfly":
                return IconSpecsPatternfly.valueOf(iconName).iconSpec;
            case "rhMicrons":
                return IconSpecsRhMicrons.valueOf(iconName).iconSpec;
            case "rhStandard":
                try { return IconSpecsRhStandard0.valueOf(iconName).iconSpec; } catch (IllegalArgumentException ignored) {}
                try { return IconSpecsRhStandard1.valueOf(iconName).iconSpec; } catch (IllegalArgumentException ignored) {}
                throw new IllegalArgumentException("Unknown icon: '" + name + "'");
            case "rhUi":
                try { return IconSpecsRhUi0.valueOf(iconName).iconSpec; } catch (IllegalArgumentException ignored) {}
                try { return IconSpecsRhUi1.valueOf(iconName).iconSpec; } catch (IllegalArgumentException ignored) {}
                throw new IllegalArgumentException("Unknown icon: '" + name + "'");
            default:
                throw new IllegalArgumentException("Unknown icon: '" + name + "'");
        }
    }

    private IconSpecLookup() {}
}
