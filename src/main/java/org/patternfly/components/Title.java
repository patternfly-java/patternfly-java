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
import org.patternfly.resources.CSS.Size;

import elemental2.dom.HTMLHeadingElement;

import static org.jboss.elemento.Elements.h;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.Constants.title;

/**
 * PatternFly title component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/title">https://www.patternfly.org/v4/documentation/core/components/title</a>
 */
public class Title extends BaseComponent<HTMLHeadingElement, Title> implements HtmlContent<HTMLHeadingElement, Title> {

    // ------------------------------------------------------ factory methods

    public static Title title(int level, String text) {
        return new Title(level, text, null);
    }

    public static Title title(int level, String text, Size size) {
        return new Title(level, text, size);
    }

    // ------------------------------------------------------ instance

    protected Title(int level, String text, Size size) {
        super(h(level, text).css(component(title)).element(), "Title");
        if (size != null) {
            css(size.modifier());
        }
    }

    @Override
    public Title that() {
        return this;
    }
}
