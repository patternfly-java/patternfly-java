package org.patternfly.client.resources;

/** Methods to build PatternFly CSS classes. */
public interface CSS {

    static String component(String component, String... elements) {
        StringBuilder builder = new StringBuilder();
        builder.append("pf-c-").append(component);
        if (elements != null && elements.length != 0) {
            builder.append("__");
            for (int i = 0; i < elements.length; i++) {
                builder.append(elements[i]);
                if (i < elements.length - 1) {
                    builder.append("-");
                }
            }
        }
        return builder.toString();
    }

    static String layout(String layout) {
        return "pf-l-" + layout;
    }

    static String modifier(String modifier) {
        return "pf-m-" + modifier;
    }

    static String util(String utility) {
        return "pf-u-" + utility;
    }

    /**
     * Builds a FontAwesome icons class.
     *
     * @param name the name of the FontAwesome icon <strong>w/o</strong> any prefix.
     */
    static String fas(String name) {
        return "fas fa-" + name;
    }

    enum Size {
        _4xl("4xl"),
        _3xl("3xl"),
        _2xl("2xl"),
        xl("xl"),
        lg("lg"),
        md("md"),
        sm("sm");

        private final String modifier;

        Size(String modifier) {
            this.modifier = CSS.modifier(modifier);
        }

        public String modifier() {
            return modifier;
        }
    }
}
