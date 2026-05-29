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
