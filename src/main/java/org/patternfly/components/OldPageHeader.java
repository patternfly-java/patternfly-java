/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.components;

import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.patternfly.components.navigation.Navigation;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.setVisible;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.layout.Classes.banner;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.controls;
import static org.patternfly.layout.Classes.header;
import static org.patternfly.layout.Classes.link;
import static org.patternfly.layout.Classes.toggle;
import static org.patternfly.layout.Icons.bars;
import static org.patternfly.layout.Icons.fas;

public class OldPageHeader extends BaseComponent<HTMLElement, OldPageHeader> {

    private final HTMLDivElement toggleContainer;
    private final Button toggleButton;
    private Navigation navigation;
    private OldPageTools tools;
    private OldPageSidebar sidebar;

    protected OldPageHeader(HTMLElement brand, String homeLink) {
        super(Elements.header().css(component("page", header)).attr("role", banner).element(), "PageHeader");
        add(div().css(component("page", header, Classes.brand))
                .add(toggleContainer = div().css(component("page", header, Classes.brand, toggle))
                        .add(toggleButton = Button.icon(icon(fas(bars)), "Global Navigation").aria("expanded", false)
                                .onClick(() -> {
                                    if (sidebar != null) {
                                        sidebar.toggle();
                                    }
                                }))
                        .element())
                .add(a(homeLink).css(component("page", header, Classes.brand, link)).add(brand)));
        hideSidebarToggle();
    }

    @Override
    public OldPageHeader that() {
        return this;
    }

    // ------------------------------------------------------ public API

    /** Adds the given navigation and removes the previous one (if any). */
    public OldPageHeader add(Navigation navigation) {
        failSafeRemoveFromParent(this.navigation);
        this.navigation = navigation;
        return add(div().css(component("page", header, "nav")).add(navigation));
    }

    /** Adds the given tools and removes the previous one (if any). */
    public OldPageHeader add(OldPageTools tools) {
        failSafeRemoveFromParent(this.tools);
        this.tools = tools;
        return add(tools.element());
    }

    public Navigation getNavigation() {
        return navigation;
    }

    public OldPageTools getTools() {
        return tools;
    }

    // ------------------------------------------------------ internals

    void registerSidebar(OldPageSidebar sidebar) {
        if (sidebar != null) {
            this.sidebar = sidebar;
            String sidebarId = sidebar.element().id;
            if (sidebarId == null || sidebarId.length() == 0) {
                sidebarId = Id.unique("sidebar");
                sidebar.id(sidebarId);
            }
            toggleButton.aria("expanded", false);
            toggleButton.aria(controls, sidebarId);
        }
    }

    void unregisterSidebar() {
        this.sidebar = null;
        toggleButton.aria("expanded", false);
        toggleButton.element().removeAttribute("aria-controls");
        hideSidebarToggle();
    }

    void showSidebarToggle() {
        setVisible(toggleContainer, true);
    }

    void hideSidebarToggle() {
        setVisible(toggleContainer, false);
    }
}
