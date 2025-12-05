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
package org.patternfly.component.toolbar;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

import org.patternfly.component.label.Label;
import org.patternfly.component.label.LabelGroup;
import org.patternfly.filter.Filter;

import elemental2.dom.HTMLDivElement;

import static java.util.Collections.emptyList;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.setVisible;
import static org.patternfly.component.label.LabelGroup.labelGroup;
import static org.patternfly.component.toolbar.ToolbarItem.toolbarItem;

public class ToolbarFilterLabelGroup<T> extends ToolbarSubComponent<HTMLDivElement, ToolbarFilterLabelGroup<T>> {

    // ------------------------------------------------------ factory

    public static <T> ToolbarFilterLabelGroup<T> toolbarFilterLabelGroup(Filter<T> filter, String text) {
        return new ToolbarFilterLabelGroup<>(filter, text);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "tfcg";
    private final Filter<T> filter;
    private final String text;
    private final List<String> filterAttributes;
    private LabelGroup labelGroup;
    private Function<Filter<T>, List<Label>> labelsFn;

    ToolbarFilterLabelGroup(Filter<T> filter, String text) {
        super(SUB_COMPONENT_NAME, toolbarItem().element());
        this.filter = filter;
        this.text = text;
        this.filterAttributes = new ArrayList<>();
        this.labelsFn = f -> emptyList();

        setVisible(this, false);
        filter.onChange((f, origin) -> {
            boolean anyDefined = filterAttributes.stream().anyMatch(f::defined);
            setVisible(this, anyDefined);
            failSafeLabelGroup().clear();
            if (anyDefined) {
                List<Label> labels = labelsFn.apply(f);
                for (Label label : labels) {
                    failSafeLabelGroup().add(label);
                }
                if (labels.isEmpty()) {
                    filterAttributes.forEach(filter::reset);
                }
            }
        });
    }

    // ------------------------------------------------------ builder

    public ToolbarFilterLabelGroup<T> filterAttributes(String firstAttribute, String... moreAttributes) {
        filterAttributes.add(firstAttribute);
        filterAttributes.addAll(List.of(moreAttributes));
        return this;
    }

    public ToolbarFilterLabelGroup<T> filterToLabels(Function<Filter<T>, List<Label>> labelsFn) {
        this.labelsFn = labelsFn;
        return this;
    }

    @Override
    public ToolbarFilterLabelGroup<T> that() {
        return this;
    }

    // ------------------------------------------------------ internal

    private LabelGroup failSafeLabelGroup() {
        if (labelGroup == null) {
            add(labelGroup = labelGroup(text).closable((e, c) -> {
                filterAttributes.forEach(filter::reset);
                failSafeRemoveFromParent(labelGroup);
                labelGroup = null;
            }));
        }
        return labelGroup;
    }
}
