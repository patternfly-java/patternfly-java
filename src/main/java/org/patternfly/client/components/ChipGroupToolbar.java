package org.patternfly.client.components;

import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.patternfly.client.resources.Constants;

import static org.jboss.gwt.elemento.core.Elements.h;
import static org.jboss.gwt.elemento.core.Elements.li;
import static org.jboss.gwt.elemento.core.Elements.ul;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.CSS.modifier;
import static org.patternfly.client.resources.Constants.chipGroup;
import static org.patternfly.client.resources.Constants.label;
import static org.patternfly.client.resources.Constants.toolbar;

/**
 * PatternFly chip group toolbar component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/chipgroup">https://www.patternfly.org/v4/documentation/core/components/chipgroup</a>
 */
public class ChipGroupToolbar extends BaseComponent<HTMLElement, ChipGroupToolbar>
        implements HtmlContent<HTMLElement, ChipGroupToolbar> {

    // ------------------------------------------------------ factory methods

    public static ChipGroupToolbar chipGroupToolbar() {
        return new ChipGroupToolbar();
    }

    // ------------------------------------------------------ instance

    ChipGroupToolbar() {
        super(ul().css(component(chipGroup), modifier(toolbar)).element(), "ChipGroupToolbar");
    }

    @Override
    public ChipGroupToolbar that() {
        return this;
    }

    // ------------------------------------------------------ public API

    public ChipGroupToolbar add(String category, ChipGroup chipGroup) {
        add(li()
                .add(h(4, category).css(component(Constants.chipGroup, label)))
                .add(chipGroup).element());
        return this;
    }
}
