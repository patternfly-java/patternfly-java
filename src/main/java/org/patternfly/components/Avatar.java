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

import elemental2.dom.HTMLImageElement;

import static org.jboss.elemento.Elements.img;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.avatar;

/**
 * PatternFly avatar component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/react/components/avatar/">https://www.patternfly.org/v4/documentation/react/components/avatar</a>
 */
public class Avatar extends BaseComponent<HTMLImageElement, Avatar> {

    // ------------------------------------------------------ factory methods

    public static Avatar avatar(String src, String alt) {
        return new Avatar(src, alt);
    }

    // ------------------------------------------------------ instance

    Avatar(String src, String alt) {
        super(img(src).css(component(avatar)).element(), "Avatar");
        element.alt = alt;
    }

    @Override
    public Avatar that() {
        return this;
    }
}
