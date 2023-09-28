package org.patternfly.components.menu;

import org.patternfly.components.SubComponent;
import org.patternfly.components.divider.DividerType;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.components.divider.Divider.divider;
import static org.patternfly.components.divider.DividerType.hr;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.content;
import static org.patternfly.layout.Classes.menu;

public class MenuContent extends SubComponent<HTMLDivElement, MenuContent> {

    // ------------------------------------------------------ factory methods

    public static MenuContent menuContent() {
        return new MenuContent();
    }

    // ------------------------------------------------------ instance

    MenuContent() {
        super(div().css(component(menu, content)).element());
    }

    @Override
    public MenuContent that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    public MenuContent addGroup(MenuGroup group) {
        return add(group);
    }

    public MenuContent addList(MenuList list) {
        return add(list);
    }

    public MenuContent addDivider() {
        return add(divider(hr));
    }
}
