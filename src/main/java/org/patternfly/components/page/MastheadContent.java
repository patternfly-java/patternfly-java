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
package org.patternfly.components.page;

import org.patternfly.components.SubComponent;
import org.patternfly.components.toolbar.Toolbar;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.content;
import static org.patternfly.layout.Classes.masthead;

/**
 * Container for the content of a {@link Masthead} component. This container represents the main portion of the masthead area
 * and will typically contain a {@link Toolbar} or other menu-like content such as a {@link org.patternfly.components.Dropdown}.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/masthead/html#usage">https://www.patternfly.org/components/masthead/html#usage</a>
 */
public class MastheadContent extends SubComponent<HTMLDivElement, MastheadContent> {

    // ------------------------------------------------------ factory methods

    /**
     * Factory method to create a new instance of this component.
     */
    public static MastheadContent mastheadContent() {
        return new MastheadContent();
    }

    // ------------------------------------------------------ instance

    MastheadContent() {
        super(div().css(component(masthead, content)).element());
    }

    @Override
    public MastheadContent that() {
        return this;
    }
}
