package org.patternfly.components;

import elemental2.dom.HTMLImageElement;

import static org.elemento.Elements.img;
import static org.patternfly.resources.Constants.brand;

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
