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
import org.jboss.elemento.Id;
import org.patternfly.component.badge.Badge;
import org.patternfly.core.Callback;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.i;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.layout.Classes.button;
import static org.patternfly.layout.Classes.chip;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.labelledBy;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.plain;
import static org.patternfly.layout.PredefinedIcon.timesCircle;

/**
 * PatternFly chip component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/chip">https://www.patternfly.org/v4/documentation/core/components/chip</a>
 */
@Deprecated
public class Chip extends BaseComponent<HTMLElement, Chip> {

    // ------------------------------------------------------ factory methods

    public static Chip chip(String text) {
        return new Chip(div().element(), text, -1, false, false);
    }

    public static Chip chip(String text, int count) {
        return new Chip(div().element(), text, count, false, false);
    }

    public static Chip readOnly(String text) {
        return new Chip(div().element(), text, -1, false, true);
    }

    public static Chip readOnly(String text, int count) {
        return new Chip(div().element(), text, count, false, true);
    }

    public static Chip overflow(String text) {
        return new Chip(div().element(), text, -1, true, false);
    }

    // ------------------------------------------------------ instance

    private final int count;
    private final boolean overflow;
    private final boolean readOnly;
    private final HTMLElement text;
    private Callback callback;
    private Badge badge;

    protected Chip(HTMLElement element, String text, int count, boolean overflow, boolean readOnly) {
        super(element, "Chip");
        this.count = count;
        this.overflow = overflow;
        this.readOnly = readOnly;

        element.classList.add(component(chip));
        if (readOnly) {
            element.classList.add(modifier(Classes.readOnly));
        } else if (overflow) {
            element.classList.add(modifier(Classes.overflow));
        }

        if (overflow) {
            element.appendChild(button().css(component(button), modifier(plain)).on(click, e -> {
                if (callback != null) {
                    callback.call();
                }
            }).add(this.text = span().css(component(chip, Classes.text)).textContent(text).element()).element());

        } else {
            String textId = Id.unique(chip, Classes.text);
            String buttonId = Id.unique(chip, Classes.button);

            HTMLContainerBuilder<HTMLElement> builder = span().css(component(chip, Classes.text))
                    .id(textId)
                    .title(text);
            builder.add(text);
            if (count > 0) {
                badge = Badge.badge(count).read();
                builder.add(badge);
            }
            element.appendChild(this.text = builder.element());
            if (!readOnly) {
                element.appendChild(button().css(component(button), modifier(plain)).id(buttonId)
                        .aria(labelledBy, buttonId + " " + textId).aria("label", "Remove").on(click, e -> {
                            failSafeRemoveFromParent(element);
                            if (callback != null) {
                                callback.call();
                            }
                        }).add(i().css(timesCircle.className).aria(hidden, true)).element());
            }
        }
    }

    @Override
    public Chip that() {
        return this;
    }

    Chip cloneAsLi() {
        return new Chip(li().element(), text.textContent, count, overflow, readOnly).onClose(callback);
    }

    // ------------------------------------------------------ public API

    /** Called after the chip has been removed. */
    public Chip onClose(Callback callback) {
        this.callback = callback;
        return this;
    }

    public Chip text(String text) {
        this.text.textContent = text;
        return this;
    }

    public Badge badge() {
        return badge;
    }
}
