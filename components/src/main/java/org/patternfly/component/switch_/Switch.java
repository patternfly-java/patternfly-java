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
package org.patternfly.component.switch_;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLInputElementBuilder;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasValue;
import org.patternfly.core.Aria;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Modifiers.Readonly;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.wrapInputElement;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.InputType.checkbox;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.icon.IconSets.fas.check;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.off;
import static org.patternfly.style.Classes.on;
import static org.patternfly.style.Classes.switch_;
import static org.patternfly.style.Classes.toggle;
import static org.patternfly.style.Modifiers.toggleModifier;

/**
 * A switch toggles the state of a setting (between on and off). Switches and checkboxes can often be used interchangeably, but
 * the switch provides a more explicit, visible representation of a setting.
 *
 * @see <a href= "https://www.patternfly.org/components/switch">https://www.patternfly.org/components/switch</a>
 */
public class Switch extends BaseComponent<HTMLLabelElement, Switch> implements
        HasValue<Boolean>,
        Disabled<HTMLLabelElement, Switch>,
        Readonly<HTMLLabelElement, Switch>,
        Attachable {

    // ------------------------------------------------------ factory

    public static Switch switch_(String id, String name) {
        return new Switch(id, name, false);
    }

    public static Switch switch_(String id, String name, boolean checked) {
        return new Switch(id, name, checked);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Switch.class.getName());
    private final HTMLInputElement inputElement;
    private final HTMLElement toggleElement;
    private final List<ChangeHandler<Switch, Boolean>> changeHandlers;
    private HTMLElement iconElement;
    private HTMLElement labelOnElement;
    private HTMLElement labelOffElement;

    Switch(String id, String name, boolean checked) {
        super(ComponentType.Switch, Elements.label().css(component(switch_)).element());
        this.changeHandlers = new ArrayList<>();

        element().appendChild(inputElement = input(checkbox).css(component(switch_, Classes.input))
                .id(id)
                .name(name)
                .checked(checked)
                .element());
        element().appendChild(toggleElement = span().css(component(switch_, toggle))
                .element());
        inputElement.addEventListener(change.name,
                e -> changeHandlers.forEach(ch -> ch.onChange(e, this, inputElement.checked)));

        element().htmlFor = id;
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (labelOnElement == null) {
            String ariaLabel = inputElement.getAttribute(Aria.label);
            if (ariaLabel == null || ariaLabel.isEmpty()) {
                logger.error("Switch %o requires either a label or an aria-label to be specified.", element());
            }
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public Switch disabled(boolean disabled) {
        inputElement.disabled = disabled;
        return this;
    }

    /** Same as {@linkplain #checkIcon(boolean) checkIcon(true)} */
    public Switch checkIcon() {
        return checkIcon(true);
    }

    public Switch checkIcon(boolean checkIcon) {
        if (checkIcon && iconElement == null) {
            toggleElement.appendChild(span().css(component(switch_, toggle, icon))
                    .add(check())
                    .element());
        } else {
            failSafeRemoveFromParent(iconElement);
        }
        return this;
    }

    public Switch label(String label) {
        return label(label, label);
    }

    public Switch label(String labelOn, String labelOff) {
        if (labelOnElement == null && labelOffElement == null) {
            String onId = Id.build(inputElement.id, "on");
            String offId = Id.build(inputElement.id, "on");
            element().appendChild(labelOnElement = span().css(component(switch_, Classes.label), modifier(on))
                    .id(onId)
                    .aria(hidden, true)
                    .element());
            element().appendChild(labelOffElement = span().css(component(switch_, Classes.label), modifier(off))
                    .id(offId)
                    .aria(hidden, true)
                    .element());
            onChange((e, s, value) -> inputElement().aria(labelledBy, value ? onId : offId));
        }
        //noinspection DataFlowIssue
        labelOnElement.textContent = labelOn;
        labelOffElement.textContent = labelOff;
        return this;
    }

    @Override
    public Switch readonly(boolean readonly) {
        if (readonly) {
            style("pointer-events", "none");
        } else {
            style("pointer-events", "unset");
        }
        inputElement.readOnly = readonly;
        return this;
    }

    /** Same as {@linkplain #reversed(boolean) reversed(true)} */
    public Switch reversed() {
        return reversed(true);
    }

    public Switch reversed(boolean reversed) {
        toggleModifier(this, element(), Classes.reverse, reversed);
        return this;
    }

    /** Same as {@linkplain #value(boolean, boolean) value(checked, false)} */
    public Switch value(boolean checked) {
        return value(checked, false);
    }

    /** Sets the {@code checked} attribute of the input element. */
    public Switch value(boolean checked, boolean fireEvent) {
        boolean changed = inputElement.checked != checked;
        inputElement.checked = checked;
        if (fireEvent && changed && !changeHandlers.isEmpty()) {
            changeHandlers.forEach(ch -> ch.onChange(new Event(""), this, inputElement.checked));
        }
        return this;
    }

    /** Provides access to the underlying checkbox element using a fluent API style */
    public Switch applyTo(Consumer<HTMLInputElementBuilder<HTMLInputElement>> consumer) {
        consumer.accept(inputElement());
        return this;
    }

    @Override
    public Switch that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Switch ariaLabel(String label) {
        inputElement().aria(Aria.label, label);
        return this;
    }

    // ------------------------------------------------------ events

    public Switch onChange(ChangeHandler<Switch, Boolean> changeHandler) {
        changeHandlers.add(changeHandler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Boolean value() {
        return inputElement.checked;
    }

    public HTMLInputElementBuilder<HTMLInputElement> inputElement() {
        return wrapInputElement(inputElement);
    }
}
