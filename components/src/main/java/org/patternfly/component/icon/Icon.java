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
import org.patternfly.component.WithProgress;
import org.patternfly.component.spinner.Spinner;
import org.patternfly.icon.PredefinedIcon;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Inline;
import org.patternfly.style.Size;
import org.patternfly.style.Status;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.spinner.Spinner.spinner;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.progress;
import static org.patternfly.style.Size.md;
import static org.patternfly.style.TypedModifier.swap;

/**
 * An icon component is a container that allows for icons of varying dimensions, as well as spinners, to seamlessly replace each
 * other without shifting surrounding content.
 * <p>
 * {@snippet class = IconDemo region = icon}
 *
 * @see <a href="https://www.patternfly.org/components/icon">https://www.patternfly.org/components/icon</a>
 */
public class Icon extends BaseComponent<HTMLElement, Icon> implements
        Inline<HTMLElement, Icon>,
        WithProgress<HTMLElement, Icon> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static Icon icon(PredefinedIcon icon) {
        return new Icon(icon.element());
    }

    /**
     * Factory method to create a new instance of this component.
     */
    public static Icon icon(Element icon) {
        return new Icon(icon);
    }

    // ------------------------------------------------------ instance

    private final HTMLElement content;
    private Size size;
    private Size iconSize;
    private Spinner spinner;

    Icon(Element icon) {
        super(ComponentType.Icon, span().css(component(Classes.icon))
                .add(span().css(component(Classes.icon, Classes.content))
                        .add(icon))
                .element());
        this.content = find(By.classname(component(Classes.icon, Classes.content)));
    }

    // ------------------------------------------------------ builder

    /**
     * Modifies the size of this component.
     */
    public Icon size(Size size) {
        return swap(this, element(), size, this.size, () -> this.size = size);
    }

    public Icon iconSize(Size iconSize) {
        return swap(this, content, iconSize, this.iconSize, () -> this.iconSize = iconSize);
    }

    public Icon status(Status status) {
        return swap(this, content, status, Status.values());
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
