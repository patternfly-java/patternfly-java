package org.patternfly.components.menu;

import elemental2.dom.MouseEvent;

@FunctionalInterface
public interface MenuItemActionClickHandler {

    void onClick(MouseEvent event, MenuItemAction itemAction);
}
