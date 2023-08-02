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

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.Constants.tooltip;

/**
 * PatternFly popover component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/popover">https://www.patternfly.org/v4/documentation/core/components/popover</a>
 */
public class Popover extends BaseComponent<HTMLDivElement, Popover> implements HtmlContent<HTMLDivElement, Popover> {

    // ------------------------------------------------------ factory methods

    public static Popover top(HTMLElement target) {
        return new Popover(Position.TOP, target);
    }

    public static Popover right(HTMLElement target) {
        return new Popover(Position.RIGHT, target);
    }

    public static Popover bottom(HTMLElement target) {
        return new Popover(Position.BOTTOM, target);
    }

    public static Popover left(HTMLElement target) {
        return new Popover(Position.LEFT, target);
    }

    public static Popover auto(HTMLElement target) {
        return new Popover(Position.AUTO, target);
    }

    // ------------------------------------------------------ instance

    protected Popover(Position position, HTMLElement target) {
        super(div().css(component(tooltip), position.modifier).element(), "Tooltip");
    }

    @Override
    public Popover that() {
        return this;
    }

    // ------------------------------------------------------ public API

    public void show() {

    }

    public void hide() {

    }
}
