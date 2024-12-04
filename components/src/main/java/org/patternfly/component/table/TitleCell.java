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
package org.patternfly.component.table;

import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.ElementContainerDelegate;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.WithText;
import org.patternfly.component.button.Button;
import org.patternfly.core.Aria;
import org.patternfly.icon.PredefinedIcon;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLTableCellElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.icon.IconSets.fas.angleDown;
import static org.patternfly.icon.IconSets.fas.ellipsisH;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.details;
import static org.patternfly.style.Classes.expanded;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.table;
import static org.patternfly.style.Classes.text;
import static org.patternfly.style.Classes.th;
import static org.patternfly.style.Classes.titleCell;
import static org.patternfly.style.Classes.toggle;
import static org.patternfly.style.Classes.treeView;

public class TitleCell extends Cell<TitleCell> implements
        ElementContainerDelegate<HTMLTableCellElement, TitleCell>,
        ComponentIcon<HTMLTableCellElement, TitleCell>,
        WithText<HTMLTableCellElement, TitleCell> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static TitleCell titleCell() {
        return new TitleCell(Id.unique(ComponentType.Table.id, SUB_COMPONENT_NAME));
    }

    public static TitleCell titleCell(String identifier) {
        return new TitleCell(identifier);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tc";
    Tr tr;
    private final HTMLElement mainContainer;
    private final HTMLElement textContainer;
    private final HTMLElement textElement;
    private HTMLElement toggleContainer;
    private Button toggleButton;
    private HTMLElement iconContainer;
    private Element icon;
    private Element expandedIcon;

    TitleCell(String identifier) {
        super(SUB_COMPONENT_NAME, identifier, Elements.th().css(component(table, treeView, titleCell), component(table, th))
                .element());
        element().appendChild(mainContainer = div().css(component(table, treeView, Classes.main))
                .add(textContainer = span().css(component(table, treeView, text))
                        .add(textElement = span().css(component(table, text)).element())
                        .element())
                .add(span().css(component(table, treeView, details, toggle))
                        .add(button().plain()
                                .aria(Aria.label, "Show row details")
                                .aria(Aria.expanded, false)
                                .add(span().css(component(table, treeView, details, toggle, Classes.icon))
                                        .add(ellipsisH()))))
                .element());
    }

    @Override
    public Element containerDelegate() {
        return textElement;
    }

    // ------------------------------------------------------ builder

    @Override
    public TitleCell icon(Element icon) {
        this.icon = icon;
        failSafeIconContainer().appendChild(icon);
        return this;
    }

    @Override
    public TitleCell removeIcon() {
        failSafeRemoveFromParent(iconContainer);
        iconContainer = null;
        icon = null;
        expandedIcon = null;
        return this;
    }

    public TitleCell expandedIcon(PredefinedIcon icon) {
        return expandedIcon(icon.element());
    }

    public TitleCell expandedIcon(Element icon) {
        this.expandedIcon = icon;
        if (isAttached(tr)) {
            if (tr.expanded()) {
                failSafeIconContainer().replaceChildren(icon);
            }
        }
        return this;
    }

    @Override
    public TitleCell text(String text) {
        Elements.textNode(textElement, text);
        return this;
    }

    @Override
    public TitleCell that() {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String text() {
        return Elements.textNode(textElement);
    }

    // ------------------------------------------------------ internal

    void collapse() {
        if (toggleButton != null) {
            toggleButton.aria(Aria.expanded, false);
            toggleButton.classList().remove(modifier(expanded));
            if (iconContainer != null && expandedIcon != null) {
                iconContainer.replaceChildren(icon);
            }
        }
    }

    void expand() {
        if (toggleButton != null) {
            toggleButton.aria(Aria.expanded, true);
            toggleButton.classList().add(modifier(expanded));
            if (iconContainer != null && expandedIcon != null) {
                iconContainer.replaceChildren(expandedIcon);
            }
        }
    }

    void addToggle() {
        if (toggleContainer == null || !mainContainer.contains(toggleContainer)) {
            insertFirst(mainContainer, toggleContainer = span().css(component(table, toggle))
                    .add(toggleButton = button().plain()
                            .onClick((e, c) -> {
                                if (tr != null) {
                                    tr.load();
                                    tr.toggle();
                                }
                            })
                            .add(div().css(component(table, toggle, Classes.icon))
                                    .add(angleDown())))
                    .element());
        }
    }

    void removeToggle() {
        failSafeRemoveFromParent(toggleContainer);
        toggleButton = null;
        toggleContainer = null;
    }

    private HTMLElement failSafeIconContainer() {
        if (iconContainer == null) {
            insertFirst(textContainer, iconContainer = span().css(component(table, treeView, Classes.icon)).element());
        }
        return iconContainer;
    }
}
