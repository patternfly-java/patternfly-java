package org.patternfly.components;

import elemental2.dom.HTMLImageElement;

import static org.jboss.gwt.elemento.core.Elements.img;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.Constants.avatar;

/**
 * PatternFly avatar component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/react/components/avatar/">https://www.patternfly.org/v4/documentation/react/components/avatar</a>
 */
public class Avatar extends BaseComponent<HTMLImageElement, Avatar> {

    // ------------------------------------------------------ factory methods

    public static Avatar avatar(String src, String alt) {
        return new Avatar(src, alt);
    }

    // ------------------------------------------------------ instance

    Avatar(String src, String alt) {
        super(img(src).css(component(avatar)).element(), "Avatar");
        element.alt = alt;
    }

    @Override
    public Avatar that() {
        return this;
    }
}
