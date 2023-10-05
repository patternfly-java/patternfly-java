package org.patternfly.components.menu;

import elemental2.dom.MouseEvent;

@FunctionalInterface
public interface MenuItemClickHandler {

    void onClick(MouseEvent event, MenuItem item);
}
