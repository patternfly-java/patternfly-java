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
package org.patternfly.component.text;

import org.jboss.elemento.ElementHTMLMethods;
import org.jboss.elemento.ElementTextMethods;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;

/**
 * Text and TextList components are always wrapped in TextContent and provide correct formatting to a number of standard HTML
 * tags.
 *
 * @see <a href= "https://www.patternfly.org/components/text">https://www.patternfly.org/components/text</a>
 */
public class TextContent extends BaseComponent<HTMLDivElement, TextContent> implements
        ElementHTMLMethods<HTMLDivElement, TextContent>,
        ElementTextMethods<HTMLDivElement, TextContent> {

    // ------------------------------------------------------ factory

    public static TextContent textContent() {
        return new TextContent();
    }

    // ------------------------------------------------------ instance

    TextContent() {
        super(ComponentType.TextContent, div().css(component(content)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public TextContent that() {
        return this;
    }
}
