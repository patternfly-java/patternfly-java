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
package org.patternfly.component.panel;

import org.patternfly.component.BaseComponentFlat;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Logger;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.divider.Divider.divider;
import static org.patternfly.component.divider.DividerType.hr;
import static org.patternfly.component.panel.PanelFooter.panelFooter;
import static org.patternfly.component.panel.PanelHeader.panelHeader;
import static org.patternfly.component.panel.PanelMain.panelMain;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.style.Classes.bordered;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.panel;
import static org.patternfly.style.Classes.raised;
import static org.patternfly.style.Classes.scrollable;

/**
 * The panel component is a container that supports flexible content layouts. It can be used to house other components
 * such as fields, forms, videos, buttons, and more. The panel should not be confused with the drawer component,
 * which allows you to surface information via a collapsable container.
 *
 * @see <a href= "https://www.patternfly.org/components/panel">https://www.patternfly.org/components/panel</a>
 */
public class Panel extends BaseComponentFlat<HTMLDivElement, Panel> {

    // ------------------------------------------------------ factory

    public static Panel panel() {
        return new Panel();
    }

    public Panel raised() {
        return css(modifier(raised));
    }

    public Panel bordered() {
        return css(modifier(bordered));
    }

    public Panel scrollable() {
        return css(modifier(scrollable));
    }

    // ------------------------------------------------------ instance

    private PanelHeader header;
    private PanelMain main;
    private PanelFooter footer;

    protected Panel() {
        super(ComponentType.Panel, div().css(component(panel)).element());
    }

    // ------------------------------------------------------ add

    public Panel addHeader(String header) {
        return add(panelHeader().textContent(header));
    }

    public Panel addHeader(PanelHeader header) {
        return add(header);
    }

    public Panel add(PanelHeader header) {
        if (this.header != null) {
            Logger.unsupported(componentType(), this.header.element(), "Header already added");
        }
        this.header = header;
        aria(labelledBy, header.headerId);
        return this;
    }

    public Panel addDivider() {
        element().appendChild(divider(hr).element());
        return this;
    }

    public Panel addMain(String main) {
        return add(panelMain().textContent(main));
    }

    public Panel addMain(PanelMain main) {
        return add(main);
    }

    public Panel add(PanelMain main) {
        if (this.main != null) {
            Logger.unsupported(componentType(), this.main.element(), "Main already added");
        }
        this.main = main;
        element().appendChild(main.element());
        return this;
    }

    public Panel addFooter(String footer) {
        return add(panelFooter().textContent(footer));
    }

    public Panel addFooter(PanelFooter footer) {
        return add(footer);
    }

    public Panel add(PanelFooter footer) {
        if (this.footer != null) {
            Logger.unsupported(componentType(), this.footer.element(), "Footer already added");
        }
        this.footer = footer;
        element().appendChild(footer.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public Panel that() {
        return this;
    }
}
