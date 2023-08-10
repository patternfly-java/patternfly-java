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
import org.jboss.elemento.HtmlContentBuilder;
import org.jboss.elemento.Id;
import org.patternfly.core.Callback;
import org.patternfly.resources.Constants;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.*;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.*;
import static org.patternfly.resources.Constants.button;
import static org.patternfly.resources.Constants.label;

/**
 * PatternFly chip component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/chip">https://www.patternfly.org/v4/documentation/core/components/chip</a>
 */
public class Chip extends BaseComponent<HTMLElement, Chip> implements HtmlContent<HTMLElement, Chip> {

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
            element.classList.add(modifier(Constants.readOnly));
        } else if (overflow) {
            element.classList.add(modifier(Constants.overflow));
        }

        if (overflow) {
            element.appendChild(button().css(component(button), modifier(plain)).on(click, e -> {
                if (callback != null) {
                    callback.call();
                }
            }).add(this.text = span().css(component(chip, Constants.text)).textContent(text).element()).element());

        } else {
            String textId = Id.unique(chip, Constants.text);
            String buttonId = Id.unique(chip, Constants.button);

            HtmlContentBuilder<HTMLElement> builder = span().css(component(chip, Constants.text)).id(textId).title(text);
            builder.add(text);
            if (count > 0) {
                badge = Badge.read(count);
                builder.add(badge);
            }
            element.appendChild(this.text = builder.element());
            if (!readOnly) {
                element.appendChild(button().css(component(button), modifier(plain)).id(buttonId)
                        .aria(labelledBy, buttonId + " " + textId).aria(label, "Remove").on(click, e -> {
                            failSafeRemoveFromParent(element);
                            if (callback != null) {
                                callback.call();
                            }
                        }).add(i().css(fas("times-circle")).aria(hidden, true)).element());
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
