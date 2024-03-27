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
package org.patternfly.component.inputgroup;

import java.util.ArrayList;
import java.util.List;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.style.Modifiers.Disabled;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.inputGroup;

/**
 * An input group groups multiple related controls or inputs together, so they appear as one control.
 *
 * @see <a href= "https://www.patternfly.org/components/input-group">https://www.patternfly.org/components/input-group</a>
 */
public class InputGroup extends BaseComponent<HTMLElement, InputGroup> implements Disabled<HTMLElement, InputGroup> {

    // ------------------------------------------------------ factory

    public static InputGroup inputGroup() {
        return new InputGroup();
    }

    // ------------------------------------------------------ instance

    private final List<InputGroupItem> items;
    private boolean disabled;

    InputGroup() {
        super(ComponentType.InputGroup, div().css(component(inputGroup)).element());
        this.items = new ArrayList<>();
    }

    // ------------------------------------------------------ add

    public InputGroup addItem(InputGroupItem item) {
        return add(item);
    }

    public InputGroup add(InputGroupItem item) {
        items.add(item);
        return add(item.element());
    }

    public InputGroup addText(InputGroupText text) {
        return add(text);
    }

    // ------------------------------------------------------ builder

    @Override
    public InputGroup disabled(boolean disabled) {
        this.disabled = disabled;
        for (InputGroupItem item : items) {
            item.disabled(disabled);
        }
        return this;
    }

    @Override
    public boolean isDisabled() {
        return disabled;
    }

    @Override
    public InputGroup that() {
        return this;
    }

    // ------------------------------------------------------ api

    public List<InputGroupItem> items() {
        return items;
    }

    public InputGroupItem itemWithButton() {
        for (InputGroupItem item : items) {
            if (item.button() != null) {
                return item;
            }
        }
        return null;
    }

    public InputGroupItem itemWithDropdown() {
        for (InputGroupItem item : items) {
            if (item.dropdown() != null) {
                return item;
            }
        }
        return null;
    }

    public InputGroupItem itemWithFormControl() {
        for (InputGroupItem item : items) {
            if (item.formControl() != null) {
                return item;
            }
        }
        return null;
    }
}
