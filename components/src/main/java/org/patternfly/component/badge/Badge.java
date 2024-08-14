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
package org.patternfly.component.badge;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.function.Function;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasValue;
import org.patternfly.component.WithObservableValue;
import org.patternfly.core.ObservableValue;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.style.Classes;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.span;
import static org.patternfly.style.Classes.badge;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.read;
import static org.patternfly.style.Classes.unread;

/**
 * A badge is used to annotate other information like a label or an object name.
 *
 * @see <a href= "https://www.patternfly.org/components/badge">https://www.patternfly.org/components/badge</a>
 */
public class Badge extends BaseComponent<HTMLElement, Badge>
        implements HasValue<Integer>, WithObservableValue<HTMLElement, Badge, Integer> {

    // ------------------------------------------------------ factory

    public static Badge badge(int count) {
        return new Badge(count);
    }

    public static Badge badge(int count, int limit) {
        return new Badge(count, limit);
    }

    // ------------------------------------------------------ instance

    private final HTMLElement valueElement;
    private final List<ChangeHandler<Badge, Integer>> changeHandler;
    private int value;
    private int limit;
    private HTMLElement screenReader;
    private Function<Integer, String> display;
    private Function<Integer, String> maxDisplay;
    private ObservableValue<Integer> ov;

    Badge(int count) {
        this(count, Integer.MAX_VALUE);
    }

    Badge(int count, int limit) {
        super(ComponentType.Badge, span().css(component(badge)).element());
        this.valueElement = add(span()).element();
        this.limit = limit;
        this.changeHandler = new ArrayList<>();
        count(count);
    }

    // ------------------------------------------------------ builder

    /** Marks the badge as read. */
    public Badge read() {
        element().classList.remove(modifier(unread));
        element().classList.add(modifier(read));
        return this;
    }

    /** Marks the badge as unread. */
    public Badge unread() {
        element().classList.remove(modifier(read));
        element().classList.add(modifier(unread));
        return this;
    }

    /** Same as {@linkplain #count(int, boolean) count(count, false)} */
    public Badge count(int count) {
        return count(count, false);
    }

    /** Sets the count of this badge. */
    public Badge count(int count, boolean fireEvent) {
        boolean changed = value != count;
        value = count;
        updateValue(this.value);
        if (fireEvent && changed) {
            changeHandler.forEach(handler -> handler.onChange(new Event(""), this, value));
        }
        return this;
    }

    /**
     * Use a function to render the text for the value of {@link #count()}. If not set {@code String.valueOf(count)} is used
     * implicitly.
     */
    public Badge display(Function<Integer, String> display) {
        this.display = display;
        updateValue(ov != null ? ov.get() : this.value);
        return this;
    }

    /**
     * Use a function to render the text if {@link #count()} &gt; {@link #limit(int)}. If not set {@code count + "+"} is used
     * implicitly.
     */
    public Badge maxDisplay(Function<Integer, String> maxDisplay) {
        this.maxDisplay = maxDisplay;
        updateValue(ov != null ? ov.get() : this.value);
        return this;
    }

    /** Sets the limit of this badge */
    public Badge limit(int limit) {
        this.limit = limit;
        updateValue(ov != null ? ov.get() : this.value);
        return this;
    }

    public Badge screenReader(String text) {
        if (screenReader == null) {
            add(screenReader = span().css(Classes.screenReader).element());
        }
        screenReader.textContent = text;
        return this;
    }

    /**
     * Binds an observable value to this component. If you're using an observable value, you must not use {@link #count(int)} or
     * {@link #count(int, boolean)} to set the value. Use {@link ObservableValue#set(Object)} instead.
     */
    @Override
    public Badge bind(ObservableValue<Integer> ov) {
        this.ov = ov;
        this.ov.subscribe((current, previous) -> {
            updateValue(current);
            if (!Objects.equals(current, previous)) {
                changeHandler.forEach(handler -> handler.onChange(new Event(""), this, current));
            }
        });
        updateValue(ov.get());
        return this;
    }

    @Override
    public Badge that() {
        return this;
    }

    // ------------------------------------------------------ events

    /**
     * Defines a change handler that is called when the {@link #value()} of this badge changes.
     */
    public Badge onChange(ChangeHandler<Badge, Integer> changeHandler) {
        this.changeHandler.add(changeHandler);
        return this;
    }

    // ------------------------------------------------------ api

    public int count() {
        return ov != null ? ov.get() : this.value;
    }

    @Override
    public Integer value() {
        return ov != null ? ov.get() : this.value;
    }

    // ------------------------------------------------------ internal

    private void updateValue(int value) {
        if (value > limit) {
            if (maxDisplay != null) {
                valueElement.textContent = maxDisplay.apply(value);
            } else {
                valueElement.textContent = limit + "+";
            }
        } else {
            if (display != null) {
                valueElement.textContent = display.apply(value);
            } else {
                valueElement.textContent = String.valueOf(value);
            }
        }
    }
}
