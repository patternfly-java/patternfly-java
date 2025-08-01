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
package org.patternfly.component.title;

import org.jboss.elemento.ElementTextMethods;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.style.Size;

import elemental2.dom.HTMLHeadingElement;

import static org.jboss.elemento.Elements.h;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.title;

/**
 * A title component applies top and bottom margins, font-weight, font-size, and line-height to titles. The most common usage
 * for a title is to define headings within a page.
 *
 * @see <a href= "https://www.patternfly.org/components/title">https://www.patternfly.org/components/title</a>
 */
public class Title extends BaseComponent<HTMLHeadingElement, Title> implements
        ElementTextMethods<HTMLHeadingElement, Title> {

    // ------------------------------------------------------ factory

    public static Title title(int level) {
        return new Title(level, null);
    }

    public static Title title(int level, Size size) {
        return new Title(level, size);
    }

    public static Title title(int level, String text) {
        return new Title(level, null).text(text);
    }

    public static Title title(int level, Size size, String text) {
        return new Title(level, size).text(text);
    }

    // ------------------------------------------------------ instance

    Title(int level, Size size) {
        super(ComponentType.Title, h(level).css(component(title)).element());
        if (size != null) {
            css(size.modifier());
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public Title that() {
        return this;
    }
}
