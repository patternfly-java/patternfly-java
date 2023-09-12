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
package org.patternfly.components.icon;

import org.jboss.elemento.By;
import org.patternfly.components.BaseComponent;
import org.patternfly.components.ComponentType;
import org.patternfly.layout.Classes;
import org.patternfly.layout.Size;
import org.patternfly.layout.Status;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.i;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.svg.SVG.circle;
import static org.jboss.elemento.svg.SVG.svg;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.icon;
import static org.patternfly.layout.Classes.inline;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.path;
import static org.patternfly.layout.Classes.progress;
import static org.patternfly.layout.Classes.spinner;
import static org.patternfly.layout.Constants.hidden;

/**
 * An icon component is a container that allows for icons of varying dimensions, as well as spinners, to seamlessly replace each
 * other without shifting surrounding content.
 * <p>
 * {@snippet class = IconDemo region = icon}
 *
 * @see <a href="https://www.patternfly.org/components/icon/html">https://www.patternfly.org/components/icon/html</a>
 */
public class Icon extends BaseComponent<HTMLElement, Icon> {

    // ------------------------------------------------------ factory methods

    /**
     * Factory method to create a new instance of this component.
     */
    public static Icon icon(String iconClass) {
        return new Icon(iconClass);
    }

    // ------------------------------------------------------ instance

    private final HTMLElement content;
    private Size size;

    Icon(String iconClass) {
        super(span().css(component(icon))
                .add(span().css(component(icon, Classes.content))
                        .add(i().css(iconClass)
                                .aria(hidden, true)))
                .element(),
                ComponentType.Icon);
        this.content = find(By.classname(component(icon, Classes.content)));
    }

    @Override
    public Icon that() {
        return this;
    }

    // ------------------------------------------------------ modifiers

    public Icon inline() {
        return css(modifier(inline));
    }

    /**
     * Modifies the size of this component.
     */
    public Icon size(Size size) {
        this.size = size;
        return css(size.modifier);
    }

    /**
     * Modifies the size of the icon.
     *
     * @see <a href=
     *      "https://www.patternfly.org/components/icon/html#sizing-content-within-the-icon-container">https://www.patternfly.org/components/icon/html#sizing-content-within-the-icon-container</a>
     */
    public Icon iconSize(Size size) {
        return css(size.modifier);
    }

    /**
     * Modifies the status of this component.
     */
    public Icon status(Status status) {
        content.classList.add(status.modifier);
        return this;
    }

    public Icon inProgress() {
        return inProgress(true);
    }

    public Icon inProgress(boolean onOff) {
        HTMLElement element = find(By.classname(component(icon, progress)));
        if (onOff) {
            if (element != null) {
                failSafeRemoveFromParent(element);
            }
            String sizeModifier = size != null ? size.modifier : Size.md.modifier;
            add(span().css(component(icon, progress))
                    .add(svg().css(component(spinner), sizeModifier)
                            .aria("label", "Loading...")
                            .attr("role", "progressbar")
                            .attr("viewBox", "0 0 100 100")
                            .add(circle().css(component(spinner, path))
                                    .attr("cx", 50)
                                    .attr("cy", 50)
                                    .attr("r", 45)
                                    .attr("fill", "none")))
                    .element());
        } else {
            failSafeRemoveFromParent(element);
        }
        return this;
    }
}
