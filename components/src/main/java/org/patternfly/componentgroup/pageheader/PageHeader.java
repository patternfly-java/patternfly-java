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
package org.patternfly.componentgroup.pageheader;

import org.jboss.elemento.ElementContainerDelegate;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.ComponentType;
import org.patternfly.component.content.Content;
import org.patternfly.component.divider.Divider;
import org.patternfly.component.icon.Icon;
import org.patternfly.component.label.Label;
import org.patternfly.layout.flex.FlexItem;
import org.patternfly.layout.split.Split;
import org.patternfly.layout.split.SplitItem;
import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.patternfly.component.content.Content.content;
import static org.patternfly.component.content.ContentType.h1;
import static org.patternfly.component.content.ContentType.p;
import static org.patternfly.component.divider.Divider.divider;
import static org.patternfly.component.divider.DividerType.hr;
import static org.patternfly.component.icon.IconSize._2xl;
import static org.patternfly.layout.flex.AlignSelf.center;
import static org.patternfly.layout.flex.Flex.flex;
import static org.patternfly.layout.flex.FlexItem.flexItem;
import static org.patternfly.layout.flex.FlexShorthand._1;
import static org.patternfly.layout.split.Split.split;
import static org.patternfly.layout.split.SplitItem.splitItem;
import static org.patternfly.style.Classes.util;
import static org.patternfly.style.Orientation.vertical;

/** A composite component that combines a page title, breadcrumb, and actions into a standard page header layout. */
public class PageHeader extends BaseComponent<HTMLElement, PageHeader> implements
        ComponentIcon<HTMLElement, PageHeader>,
        ElementContainerDelegate<HTMLElement, PageHeader> {

    // ------------------------------------------------------ factory

    public static PageHeader pageHeader() {
        return new PageHeader();
    }

    // ------------------------------------------------------ instance

    private final FlexItem body;
    private final Split split;
    private final Content header;
    private FlexItem iconContainer;
    private Divider divider;
    private SplitItem labelsContainer;

    PageHeader() {
        super(ComponentType.PageHeader, flex().element());
        this.body = flexItem().flex(_1)
                .add(split = split().gutter()
                        .addItem(splitItem().add(header = content(h1).css(util("mb-sm")))));
        element().appendChild(body.element());
    }

    @Override
    public Element containerDelegate() {
        return body.element();
    }

    // ------------------------------------------------------ add

    public PageHeader addHeader(String header) {
        this.header.text(header);
        return this;
    }

    public PageHeader addHeader(HTMLElement header) {
        this.header.add(header);
        return this;
    }

    public PageHeader addDescription(String description) {
        return addDescription(content(p).text(description).element());
    }

    public PageHeader addDescription(HTMLElement description) {
        return add(description);
    }

    public PageHeader addLabel(Label label) {
        return addLabel(label.element());
    }

    public PageHeader add(Label label) {
        return addLabel(label.element());
    }

    public PageHeader addLabel(HTMLElement label) {
        if (labelsContainer == null) {
            labelsContainer = splitItem();
            split.addItem(labelsContainer);
        }
        labelsContainer.add(label);
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public PageHeader icon(Element icon) {
        removeIcon();
        divider = divider(hr).orientation(vertical);
        iconContainer = flexItem().alignSelf(center)
                .add(Icon.icon(icon).size(_2xl));
        insertFirst(element(), divider);
        insertFirst(element(), iconContainer);
        return this;
    }

    @Override
    public PageHeader removeIcon() {
        failSafeRemoveFromParent(iconContainer);
        failSafeRemoveFromParent(divider);
        iconContainer = null;
        divider = null;
        return this;
    }

    @Override
    public PageHeader that() {
        return this;
    }
}
