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
package org.patternfly.component.avatar;

import java.util.EnumSet;
import java.util.stream.Stream;

import org.patternfly.component.BaseComponentFlat;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Logger;
import org.patternfly.style.Brightness;
import org.patternfly.style.Size;

import elemental2.dom.HTMLImageElement;

import static java.util.stream.Collectors.joining;
import static org.jboss.elemento.Elements.img;
import static org.patternfly.style.Brightness.dark;
import static org.patternfly.style.Brightness.light;
import static org.patternfly.style.Classes.avatar;
import static org.patternfly.style.Classes.component;

/**
 * An avatar is a visual used to represent a user. It may contain an image or a placeholder graphic.
 *
 * @see <a href= "https://www.patternfly.org/components/avatar">https://www.patternfly.org/components/avatar</a>
 */
public class Avatar extends BaseComponentFlat<HTMLImageElement, Avatar> {

    // ------------------------------------------------------ factory

    public static Avatar avatar(String src, String alt) {
        return new Avatar(src, alt);
    }

    // ------------------------------------------------------ instance

    Avatar(String src, String alt) {
        super(ComponentType.Avatar, img().css(component(avatar)).apply(i -> {
            i.src = src;
            i.alt = alt;
        }).element());
    }

    // ------------------------------------------------------ builder

    public Avatar src(String src) {
        element().src = src;
        return this;
    }

    public Avatar alt(String alt) {
        element().alt = alt;
        return this;
    }

    public Avatar size(Size size) {
        return css(size.modifier());
    }

    public Avatar border(Brightness border) {
        if (!EnumSet.of(light, dark).contains(border)) {
            Logger.unsupported(componentType(), element(),
                    "Border " + border + " not supported. Valid values: " +
                            Stream.of(light, dark).map(Brightness::name).collect(joining(" ")));
            return this;
        }
        return css(border.modifier());
    }

    @Override
    public Avatar that() {
        return this;
    }
}
