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

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.content;

/**
 * PatternFly content component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/content/">https://www.patternfly.org/v4/documentation/core/components/content</a>
 */
public class Content extends BaseComponent<HTMLDivElement, Content> {

    // ------------------------------------------------------ factory methods

    public static Content content() {
        return new Content();
    }

    // ------------------------------------------------------ instance

    protected Content() {
        super(div().css(component(content)).element(), "Content");
    }

    @Override
    public Content that() {
        return this;
    }
}
