package org.patternfly.extension.finder;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.extension.finder.FinderClasses.finder;
import static org.patternfly.extension.finder.FinderClasses.preview;
import static org.patternfly.style.Classes.component;

public class FinderPreview extends FinderSubComponent<HTMLElement, FinderPreview> {

    // ------------------------------------------------------ factory

    public static FinderPreview finderPreview() {
        return new FinderPreview();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "fp";

    FinderPreview() {
        super(SUB_COMPONENT_NAME, div().css(component(finder, preview)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public FinderPreview that() {
        return this;
    }
}
