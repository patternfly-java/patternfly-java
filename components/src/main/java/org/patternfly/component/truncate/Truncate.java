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
package org.patternfly.component.truncate;

import java.util.Objects;

import org.gwtproject.safehtml.shared.SafeHtml;
import org.gwtproject.safehtml.shared.SafeHtmlBuilder;
import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.WithText;
import org.patternfly.component.tooltip.Tooltip;
import org.patternfly.core.ObservableValue;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.tooltip.Tooltip.tooltip;
import static org.patternfly.component.truncate.TruncatePosition.end;
import static org.patternfly.component.truncate.TruncatePosition.middle;
import static org.patternfly.component.truncate.TruncatePosition.start;
import static org.patternfly.core.ObservableValue.ov;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.truncate;

/**
 * A truncate is a tool used to shorten numeric and non-numeric character strings, typically when the string overflows its
 * container.
 *
 * @see <a href= "https://www.patternfly.org/components/truncate">https://www.patternfly.org/components/truncate</a>
 */
public class Truncate extends BaseComponent<HTMLElement, Truncate> implements WithText<HTMLElement, Truncate> {

    // ------------------------------------------------------ factory

    public static Truncate truncate(String text) {
        return new Truncate(text, end);
    }

    public static Truncate truncate(String text, TruncatePosition position) {
        return new Truncate(text, position);
    }

    // ------------------------------------------------------ instance

    private static final int MIN_WIDTH_CHARACTERS = 12;
    private final Tooltip tooltip;
    private final ObservableValue<TruncatePosition> position;
    private String text;
    private int trailingNumChars;
    private HTMLContainerBuilder<HTMLElement> primaryTextElement;
    private HTMLContainerBuilder<HTMLElement> secondaryTextElement;

    Truncate(String text, TruncatePosition position) {
        super(ComponentType.Truncate, span().css(component(truncate)).element());
        this.text = text;
        this.trailingNumChars = 7;
        this.position = ov(position).subscribe(this::internalUpdate);
        this.tooltip = tooltip(element());

        element().appendChild(tooltip.element());
        internalUpdate(position, null);
    }

    // ------------------------------------------------------ builder

    public Truncate position(TruncatePosition position) {
        this.position.set(position);
        return this;
    }

    @Override
    public Truncate text(String text) {
        if (!Objects.equals(this.text, text)) {
            this.text = text;
            updateText(text);
        }
        return this;
    }

    public Truncate trailingNumChars(int trailingNumChars) {
        if (this.trailingNumChars != trailingNumChars && position.get() == middle) {
            this.trailingNumChars = trailingNumChars;
            updateText(text);
        }
        return this;
    }

    @Override
    public Truncate that() {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String text() {
        return text;
    }

    // ------------------------------------------------------ internal

    private void internalUpdate(TruncatePosition current, TruncatePosition previous) {
        switch (current) {
            case start:
            case end:
                reset();
                failSafePrimaryTextElement().css(component(truncate, current.suffix));
                updatePrimaryText(text);
                break;
            case middle:
                updateMiddleText(text);
                break;
        }
        tooltip.text(text);
    }

    private void updateText(String text) {
        if (text != null) {
            switch (position.get()) {
                case start:
                    updatePrimaryText(text);
                    break;
                case middle:
                    break;
                case end:
                    failSafePrimaryTextElement().textContent(text);
                    break;
            }
            tooltip.text(text);
        }
    }

    private void updatePrimaryText(String text) {
        failSafePrimaryTextElement().textContent(text);
        if (position.get() == end) {
            failSafePrimaryTextElement().textContent(text);
        } else if (position.get() == start) {
            SafeHtml safeHtml = new SafeHtmlBuilder()
                    .appendEscaped(text)
                    .appendHtmlConstant("&lrm;")
                    .toSafeHtml();
            failSafePrimaryTextElement().innerHtml(safeHtml);
        }
    }

    private void updateMiddleText(String text) {
        reset();
        int length = text.length() - trailingNumChars;
        String first = text.substring(0, length);
        String second = text.substring(length);
        if (first.length() > MIN_WIDTH_CHARACTERS) {
            failSafePrimaryTextElement().css(component(truncate, Classes.start))
                    .textContent(first);
            failSafeSecondaryTextElement().css(component(truncate, Classes.end))
                    .textContent(text.substring(text.length() - trailingNumChars));
        } else {
            element().textContent = text;
        }
    }

    private void reset() {
        failSafeRemoveFromParent(primaryTextElement);
        failSafeRemoveFromParent(secondaryTextElement);
        primaryTextElement = null;
        secondaryTextElement = null;
    }

    private HTMLContainerBuilder<HTMLElement> failSafePrimaryTextElement() {
        if (primaryTextElement == null) {
            primaryTextElement = span();
            insertFirst(element(), primaryTextElement.element());
        }
        return primaryTextElement;
    }

    private HTMLContainerBuilder<HTMLElement> failSafeSecondaryTextElement() {
        if (secondaryTextElement == null) {
            secondaryTextElement = span();
            insertAfter(secondaryTextElement.element(), primaryTextElement.element());
        }
        return secondaryTextElement;
    }
}
