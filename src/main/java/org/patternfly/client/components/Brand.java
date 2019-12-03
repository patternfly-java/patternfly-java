package org.patternfly.client.components;

import elemental2.dom.HTMLImageElement;

import static org.jboss.gwt.elemento.core.Elements.img;
import static org.patternfly.client.resources.Constants.brand;

/**
 * PatternFly brand component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/brand">https://www.patternfly.org/v4/documentation/core/components/brand</a>
 */
public class Brand extends BaseComponent<HTMLImageElement, Brand> {

    // ------------------------------------------------------ factory methods

    public static Brand brand(String src) {
        return new Brand(src);
    }

    // ------------------------------------------------------ instance

    Brand(String src) {
        super(img(src).css(brand).element(), "Brand");
    }

    @Override
    public Brand that() {
        return this;
    }
}
