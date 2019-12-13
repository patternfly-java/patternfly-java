package org.patternfly.components;

import elemental2.dom.HTMLElement;

import static org.jboss.gwt.elemento.core.Elements.i;

public class Icon extends BaseComponent<HTMLElement, Icon> {

    // ------------------------------------------------------ factory methods

    public static Icon icon(String iconClass) {
        return new Icon(iconClass);
    }

    // ------------------------------------------------------ instance

    Icon(String iconClass) {
        super(i().css(iconClass).element(), "Icon");
    }

    @Override
    public Icon that() {
        return this;
    }
}
