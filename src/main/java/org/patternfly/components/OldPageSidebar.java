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

import org.jboss.elemento.HtmlContent;
import org.jboss.elemento.HtmlContentBuilder;
import org.patternfly.resources.CSS;
import org.patternfly.resources.Constants;
import org.patternfly.resources.Theme;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.aside;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.collapsed;
import static org.patternfly.resources.Constants.expanded;
import static org.patternfly.resources.Constants.page;
import static org.patternfly.resources.Theme.DARK;

public class OldPageSidebar extends BaseComponent<HTMLElement, OldPageSidebar>
        implements HtmlContent<HTMLElement, OldPageSidebar> {

    private final Theme theme;
    private final HtmlContentBuilder<HTMLDivElement> body;
    private Navigation navigation;

    protected OldPageSidebar(Theme theme) {
        super(aside().css(CSS.component(page, Constants.sidebar)).element(), "PageSidebar");
        this.theme = theme;
        if (theme == DARK) {
            css(modifier("dark"));
        }
        add(body = div().css(component(page, Constants.sidebar, Constants.body)));
    }

    @Override
    public OldPageSidebar that() {
        return this;
    }

    // ------------------------------------------------------ public API

    /**
     * Adds the navigation to the sidebar's body and removes the previous one (if any). Shortcut for
     * {@code getBody().add(navigation)}.
     */
    public OldPageSidebar add(Navigation navigation) {
        failSafeRemoveFromParent(this.navigation);
        this.navigation = navigation;
        if (theme == DARK) {
            navigation.css(modifier("dark"));
        }
        body.add(navigation);
        return that();
    }

    public HtmlContentBuilder<HTMLDivElement> getBody() {
        return body;
    }

    public Navigation getNavigation() {
        return navigation;
    }

    // ------------------------------------------------------ internals

    void toggle() {
        if (element.classList.contains(modifier(collapsed))) {
            expand();
        } else if (element.classList.contains(modifier(expanded))) {
            collapse();
        }
    }

    void expand() {
        element.classList.remove(modifier(collapsed));
        element.classList.add(modifier(expanded));
    }

    void collapse() {
        element.classList.remove(modifier(expanded));
        element.classList.add(modifier(collapsed));
    }
}
