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

import org.patternfly.component.chip.Chip;
import org.patternfly.component.chip.ChipGroup;
import org.patternfly.filter.Filter;

import elemental2.dom.HTMLDivElement;

import static java.util.Collections.emptyList;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.setVisible;
import static org.patternfly.component.chip.ChipGroup.chipGroup;
import static org.patternfly.component.toolbar.ToolbarItem.toolbarItem;

public class ToolbarFilterChipGroup<T> extends ToolbarSubComponent<HTMLDivElement, ToolbarFilterChipGroup<T>> {

    // ------------------------------------------------------ factory

    public static <T> ToolbarFilterChipGroup<T> toolbarFilterChipGroup(Filter<T> filter, String text) {
        return new ToolbarFilterChipGroup<>(filter, text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tfcg";
    private final Filter<T> filter;
    private final String text;
    private final List<String> filterAttributes;
    private ChipGroup chipGroup;
    private Function<Filter<T>, List<Chip>> chipsFn;

    ToolbarFilterChipGroup(Filter<T> filter, String text) {
        super(SUB_COMPONENT_NAME, toolbarItem().element());
        this.filter = filter;
        this.text = text;
        this.filterAttributes = new ArrayList<>();
        this.chipsFn = f -> emptyList();

        setVisible(this, false);
        filter.onChange((f, origin) -> {
            boolean anyDefined = filterAttributes.stream().anyMatch(f::defined);
            setVisible(this, anyDefined);
            failSafeChipGroup().clear();
            if (anyDefined) {
                List<Chip> chips = chipsFn.apply(f);
                for (Chip chip : chips) {
                    failSafeChipGroup().add(chip);
                }
                if (chips.isEmpty()) {
                    filterAttributes.forEach(filter::reset);
                }
            }
        });
    }

    // ------------------------------------------------------ builder

    public ToolbarFilterChipGroup<T> filterAttributes(String firstAttribute, String... moreAttributes) {
        filterAttributes.add(firstAttribute);
        filterAttributes.addAll(List.of(moreAttributes));
        return this;
    }

    public ToolbarFilterChipGroup<T> filterToChips(Function<Filter<T>, List<Chip>> chipsFn) {
        this.chipsFn = chipsFn;
        return this;
    }

    @Override
    public ToolbarFilterChipGroup<T> that() {
        return this;
    }

    // ------------------------------------------------------ internal

    private ChipGroup failSafeChipGroup() {
        if (chipGroup == null) {
            add(chipGroup = chipGroup(text).closable((e, c) -> {
                filterAttributes.forEach(filter::reset);
                failSafeRemoveFromParent(chipGroup);
                chipGroup = null;
            }));
        }
        return chipGroup;
    }
}
