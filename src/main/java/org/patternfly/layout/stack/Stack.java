package org.patternfly.layout.stack;

import org.patternfly.layout.BaseLayout;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.gutter;
import static org.patternfly.layout.Classes.layout;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.stack;

public class Stack extends BaseLayout<HTMLDivElement, Stack> {

    // ------------------------------------------------------ factory methods

    public static Stack stack() {
        return new Stack();
    }

    // ------------------------------------------------------ instance

    Stack() {
        super(div().css(layout(stack)).element());
    }

    @Override
    public Stack that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    public Stack addItem(StackItem item) {
        return add(item);
    }

    // ------------------------------------------------------ modifiers

    /** Adds {@linkplain Classes#modifier(String) modifier(gutter)} */
    public Stack gutter() {
        return css(modifier(gutter));
    }
}
