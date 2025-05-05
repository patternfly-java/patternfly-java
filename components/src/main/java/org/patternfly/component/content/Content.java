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
package org.patternfly.component.content;

import org.jboss.elemento.ElementHTMLMethods;
import org.jboss.elemento.ElementTextMethods;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;

import static org.patternfly.component.content.ContentType._default;
import static org.patternfly.style.Classes.modifier;

/**
 * A content component contains a block of styled HTML content.
 *
 * @see <a href= "https://www.patternfly.org/components/content">https://www.patternfly.org/components/content</a>
 */
public class Content extends BaseComponent<HTMLElement, Content> implements
        ElementHTMLMethods<HTMLElement, Content>,
        ElementTextMethods<HTMLElement, Content> {

    // ------------------------------------------------------ factory

    public static Content content() {
        return new Content(_default);
    }

    public static Content content(ContentType type) {
        return new Content(type);
    }

    // ------------------------------------------------------ instance

    Content(ContentType type) {
        super(ComponentType.Content, type.element());
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #editorial(boolean) editorial(true)} */
    public Content editorial() {
        return editorial(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(editorial)} */
    public Content editorial(boolean editorial) {
        return toggle(modifier(Classes.editorial), editorial);
    }

    /** Same as {@linkplain #plainList(boolean) plainList(true)} */
    public Content plainList() {
        return plainList(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(plainList)} */
    public Content plainList(boolean plainList) {
        return toggle(modifier(Classes.plainList), plainList);
    }

    /** Same as {@linkplain #visitedLink(boolean) visitedLink(true)} */
    public Content visitedLink() {
        return visitedLink(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(visitedLink)} */
    public Content visitedLink(boolean visitedLink) {
        return toggle(modifier(Classes.visitedLink), visitedLink);
    }

    @Override
    public Content that() {
        return this;
    }
}
