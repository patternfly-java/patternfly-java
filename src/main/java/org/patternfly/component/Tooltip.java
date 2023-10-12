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
package org.patternfly.component;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.layout.Classes;
import org.patternfly.layout.Position;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.blur;
import static org.jboss.elemento.EventType.mouseenter;
import static org.jboss.elemento.EventType.mouseleave;
import static org.patternfly.layout.Classes.arrow;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.focus;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.textLeftAligned;
import static org.patternfly.layout.Classes.tooltip;

/**
 * PatternFly tooltip component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/tooltip">https://www.patternfly.org/v4/documentation/core/components/tooltip</a>
 */
@Deprecated
public class Tooltip extends BaseComponent<HTMLDivElement, Tooltip> {

    // ------------------------------------------------------ factory

    public static Tooltip top(String text, HTMLElement target) {
        return new Tooltip(Position.top, target, text);
    }

    public static Tooltip right(String text, HTMLElement target) {
        return new Tooltip(Position.right, target, text);
    }

    public static Tooltip bottom(String text, HTMLElement target) {
        return new Tooltip(Position.bottom, target, text);
    }

    public static Tooltip left(String text, HTMLElement target) {
        return new Tooltip(Position.left, target, text);
    }

    public static Tooltip auto(String text, HTMLElement target) {
        return new Tooltip(Position.auto, target, text);
    }

    // ------------------------------------------------------ instance

    private final HTMLContainerBuilder<HTMLDivElement> content;

    protected Tooltip(Position position, HTMLElement target, String text) {
        super(div().css(component(tooltip), position.modifier).attr("role", "tooltip").element(), "Tooltip");

        add(div().css(component(tooltip, arrow)));
        add(content = div().css(tooltip, Classes.content).textContent(text));

        if (target != null) {
            bind(target, mouseenter, e -> show());
            bind(target, mouseleave, e -> hide());
            bind(target, focus, e -> show());
            bind(target, blur, e -> hide());
        }
    }

    @Override
    public Tooltip that() {
        return this;
    }

    // ------------------------------------------------------ api

    public void show() {

    }

    public void hide() {

    }

    // ------------------------------------------------------ builder

    public Tooltip leftAligned() {
        content.css(modifier(textLeftAligned));
        return this;
    }
}
