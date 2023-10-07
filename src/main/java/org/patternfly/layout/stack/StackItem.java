package org.patternfly.layout.stack;

import org.patternfly.core.Modifiers.Fill;
import org.patternfly.layout.BaseLayout;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.item;
import static org.patternfly.layout.Classes.layout;
import static org.patternfly.layout.Classes.stack;

public class StackItem extends BaseLayout<HTMLDivElement, StackItem> implements Fill<HTMLDivElement, StackItem> {

    // ------------------------------------------------------ factory methods

    public static StackItem stackItem() {
        return new StackItem();
    }

    // ------------------------------------------------------ instance

    StackItem() {
        super(div().css(layout(stack, item)).element());
    }

    @Override
    public StackItem that() {
        return this;
    }
}
