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
package org.patternfly.component.icon;

import java.util.function.Consumer;

import org.jboss.elemento.By;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.spinner.Spinner;
import org.patternfly.core.Modifiers.Inline;
import org.patternfly.core.WithProgress;
import org.patternfly.layout.Classes;
import org.patternfly.layout.PredefinedIcon;
import org.patternfly.layout.Size;
import org.patternfly.core.Status;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.component.spinner.Spinner.spinner;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.icon;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.progress;
import static org.patternfly.layout.Size.md;

/**
 * An icon component is a container that allows for icons of varying dimensions, as well as spinners, to seamlessly replace each
 * other without shifting surrounding content.
 * <p>
 * {@snippet class = IconDemo region = icon}
 *
 * @see <a href="https://www.patternfly.org/components/icon/html">https://www.patternfly.org/components/icon/html</a>
 */
public class Icon extends BaseComponent<HTMLElement, Icon>
        implements Inline<HTMLElement, Icon>, WithProgress<HTMLElement, Icon> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static Icon icon(PredefinedIcon predefinedIcon) {
        return new Icon(predefinedIcon.className);
    }

    /**
     * Factory method to create a new instance of this component.
     */
    public static Icon icon(String iconClass) {
        return new Icon(iconClass);
    }

    // ------------------------------------------------------ instance

    private final HTMLElement content;
    private Size size;
    private Size iconSize;
    private Spinner spinner;

    Icon(String iconClass) {
        super(span().css(component(icon))
                .add(span().css(component(icon, Classes.content))
                        .add(inlineIcon(iconClass)))
                .element(),
                ComponentType.Icon);
        this.content = find(By.classname(component(icon, Classes.content)));
    }

    // ------------------------------------------------------ builder

    /**
     * Modifies the size of this component.
     */
    public Icon size(Size size) {
        this.size = size;
        return css(size.modifier);
    }

    public Icon iconSize(Size size) {
        iconSize = size;
        content.classList.add(iconSize.modifier);
        return this;
    }

    public Icon status(Status status) {
        content.classList.add(status.modifier);
        return this;
    }

    public Icon progress(boolean inProgress, String label, Consumer<Spinner> spinnerConsumer) {
        HTMLElement element = find(By.classname(component(icon, progress)));
        failSafeRemoveFromParent(element);
        if (inProgress) {
            element().classList.add(modifier(Classes.inProgress));
            if (spinner == null) {
                spinner = spinner(label);
                if (size != null) {
                    spinner.size(size);
                } else if (iconSize != null) {
                    spinner.size(iconSize);
                } else {
                    spinner.size(md);
                }
            }
            if (spinnerConsumer != null) {
                spinnerConsumer.accept(spinner);
            }
            add(span().css(component(icon, progress))
                    .add(spinner));
        } else {
            element().classList.remove(modifier(Classes.inProgress));
        }
        return this;
    }

    @Override
    public Icon that() {
        return this;
    }
}
