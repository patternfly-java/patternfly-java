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
package org.patternfly.component.help;

import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.ValidationStatus;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.help.HelperTextItem.helperTextItem;
import static org.patternfly.core.Aria.live;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.helperText;

/**
 * Helper text is an on-screen field guideline that helps provide context regarding field inputs.
 *
 * @see <a href= "https://www.patternfly.org/components/helper-text">https://www.patternfly.org/components/helper-text</a>
 */
public class HelperText extends BaseComponent<HTMLElement, HelperText> {

    // ------------------------------------------------------ factory

    public static HelperText helperText() {
        return new HelperText(div());
    }

    public static <E extends HTMLElement> HelperText helperText(HTMLContainerBuilder<E> builder) {
        return new HelperText(builder);
    }

    /**
     * Shortcut for a helper text with one item {@code helperText().addItem(helperTextItem(text))}
     */
    public static HelperText helperText(String text) {
        return helperText().addItem(helperTextItem(text));
    }

    /**
     * Shortcut for a helper text with one item {@code helperText().addItem(helperTextItem(text, status))}
     */
    public static HelperText helperText(String text, ValidationStatus status) {
        return helperText().addItem(helperTextItem(text, status).defaultIcon());
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(HelperText.class.getName());
    private HelperTextItem firstItem;

    <E extends HTMLElement> HelperText(HTMLContainerBuilder<E> builder) {
        super(ComponentType.HelperText, builder.css(component(helperText)).element());
    }

    // ------------------------------------------------------ add

    public HelperText addItem(HelperTextItem item) {
        return add(item);
    }

    // override to ensure internal wiring
    public HelperText add(HelperTextItem item) {
        if (firstItem == null) {
            firstItem = item;
        }
        element().appendChild(item.element());
        return this;
    }

    // ------------------------------------------------------ aria

    /**
     * Flag for indicating whether the helper text container is a live region. Use this prop when you expect or intend for any
     * helper text items within the container to be {@linkplain HelperTextItem#dynamic() dynamically} updated.
     */
    public HelperText liveRegion() {
        return aria(live, "polite");
    }

    // ------------------------------------------------------ builder

    @Override
    public HelperText that() {
        return this;
    }

    // ------------------------------------------------------ api

    public HelperTextItem firstItem() {
        if (firstItem == null) {
            logger.error("Helper text %o does not contain any items. Returning empty item instead", element());
            return helperTextItem();
        }
        return firstItem;
    }
}
