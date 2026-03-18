package org.patternfly.extension.finder;

import org.jboss.elemento.ElementTextDelegate;
import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.style.Classes;
import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLHeadingElement;

import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.header;
import static org.patternfly.extension.finder.FinderClasses.column;
import static org.patternfly.extension.finder.FinderClasses.finder;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.header;
import static org.patternfly.style.Classes.title;

// TODO Refactor elements to match the empty state header, title and title text
public class FinderColumnHeader extends FinderSubComponent<HTMLElement, FinderColumnHeader> implements
        ElementTextDelegate<HTMLElement, FinderColumnHeader> {

    // ------------------------------------------------------ factory

    public static FinderColumnHeader finderColumnHeader(String text) {
        return new FinderColumnHeader(4).text(text);
    }

    public static FinderColumnHeader finderColumnHeader(int level, String text) {
        return new FinderColumnHeader(level).text(text);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "fch";
    private final HTMLContainerBuilder<HTMLHeadingElement> h;

    FinderColumnHeader(int level) {
        super(SUB_COMPONENT_NAME, header().css(component(finder, column, header)).element());
        add(h = h(level).css(component(finder, column, title, Classes.text)));
    }

    @Override
    public Element textDelegate() {
        return h.element();
    }

    // ------------------------------------------------------ add

    public FinderColumnHeader addActions(FinderColumnActions actions) {
        return add(actions);
    }

    // ------------------------------------------------------ builder

    @Override
    public FinderColumnHeader that() {
        return this;
    }
}
