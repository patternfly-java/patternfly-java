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

import org.jboss.elemento.Attachable;
import org.patternfly.component.BaseComponentFlat;
import org.patternfly.component.ComponentType;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.hr;
import static org.patternfly.component.panel.PanelBody.panelBody;
import static org.patternfly.component.panel.PanelFooter.panelFooter;
import static org.patternfly.component.panel.PanelHeader.panelHeader;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.style.Classes.*;

public class Panel extends BaseComponentFlat<HTMLDivElement, Panel> implements Attachable {
    private PanelHeader header;
    private PanelBody body;
    private PanelFooter footer;

    protected Panel() {
        super(ComponentType.Panel, div().css(component(panel)).element());
    }

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

    // ------------------------------------------------------ add

    public Panel addHeader(String header) {
        return add(panelHeader().textContent(header));
    }

    public Panel addHeader(PanelHeader header) {
        return add(header);
    }

    public Panel add(PanelHeader header) {
        if (this.header != null) {
            throw new IllegalStateException("header already added");
        }
        this.header = header;
        element().appendChild(header.element());
        element().appendChild(hr().css(divider).element());
        aria(labelledBy, header.headerId);
        return this;
    }

    public Panel addBody(String body) {
        return add(panelBody().textContent(body));
    }

    public Panel addBody(PanelBody body) {
        return add(body);
    }

    public Panel add(PanelBody body) {
        if (this.body != null) {
            throw new IllegalStateException("body already added");
        }
        this.body = body;
        element().appendChild(body.element());
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
            throw new IllegalStateException("footer already added");
        }
        this.footer = footer;
        element().appendChild(footer.element());
        return this;
    }

    @Override
    public void attach(MutationRecord mutationRecord) {

    }

    @Override
    public Panel that() {
        return this;
    }
}
