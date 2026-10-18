package org.patternfly.component.table;

import org.jboss.elemento.ElementTextMethods;
import org.patternfly.style.Modifiers.NoPadding;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.expandable;
import static org.patternfly.style.Classes.row;
import static org.patternfly.style.Classes.table;

public class ExpandableRowContent extends TableSubComponent<HTMLElement, ExpandableRowContent> implements
        ElementTextMethods<HTMLElement, ExpandableRowContent>,
        NoPadding<HTMLElement, ExpandableRowContent> {

    // ------------------------------------------------------ factory

    public static ExpandableRowContent expandableRowContent() {
        return new ExpandableRowContent();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_ID = "tbd";
    public static final String SUB_COMPONENT_NAME = "Tbody";

    ExpandableRowContent() {
        super(SUB_COMPONENT_ID, SUB_COMPONENT_NAME, div()
                .css(component(table, expandable, row, content))
                .element());
    }

    @Override
    public ExpandableRowContent that() {
        return this;
    }
}
