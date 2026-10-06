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
package org.patternfly.component.textinputgroup;

import org.jboss.elemento.Attachable;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.component.StayOpenPredicate;
import org.patternfly.component.menu.Menu;
import org.patternfly.component.menu.NoResults;
import org.patternfly.component.menu.SearchFilter;
import org.patternfly.component.typeahead.RefreshStrategy;
import org.patternfly.component.typeahead.Typeahead;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.handler.ToggleHandler;

import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

/**
 * A filter input with typeahead/autocomplete support. Combines a {@linkplain BaseFilterInputGroup filter input} (with a label
 * group) with an attached {@link Menu} to provide autocomplete behavior driven by a {@link RefreshStrategy}.
 *
 * @see <a href="https://www.patternfly.org/components/text-input-group#with-filters">
 * https://www.patternfly.org/components/text-input-group#with-filters</a>
 */
public class FilterInputGroupTypeahead extends BaseFilterInputGroup<FilterInputGroupTypeahead> implements
        Attachable,
        Expandable<HTMLElement, FilterInputGroupTypeahead>,
        Typeahead<FilterInputGroupTypeahead> {

    // ------------------------------------------------------ factory

    public static FilterInputGroupTypeahead filterInputGroupTypeahead(String id) {
        return new FilterInputGroupTypeahead(id);
    }

    public static FilterInputGroupTypeahead filterInputTypeahead(String id, String placeholder) {
        return new FilterInputGroupTypeahead(id).placeholder(placeholder);
    }

    // ------------------------------------------------------ instance

    private final TypeaheadInputDelegate<FilterInputGroupTypeahead> delegate;

    FilterInputGroupTypeahead(String id) {
        super(ComponentType.FilterInputGroupTypeahead, id);
        this.delegate = new TypeaheadInputDelegate<>(this);
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        delegate.attach();
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        delegate.detach();
    }

    // ------------------------------------------------------ add

    public FilterInputGroupTypeahead addMenu(Menu menu) {
        return add(menu);
    }

    public FilterInputGroupTypeahead add(Menu menu) {
        HTMLElement popover = delegate.addMenu(menu);
        if (popover != null) {
            add(popover);
        }
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public FilterInputGroupTypeahead refreshOn(RefreshStrategy strategy) {
        delegate.refreshOn(strategy);
        return this;
    }

    @Override
    public FilterInputGroupTypeahead filter(SearchFilter searchFilter) {
        delegate.filter(searchFilter);
        return this;
    }

    @Override
    public FilterInputGroupTypeahead onNoResults(NoResults noResults) {
        delegate.noResults(noResults);
        return this;
    }

    public FilterInputGroupTypeahead stayOpen(StayOpenPredicate<FilterInputGroupTypeahead> stayOpen) {
        delegate.stayOpen(stayOpen);
        return this;
    }

    @Override
    public FilterInputGroupTypeahead that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public FilterInputGroupTypeahead onLoaded(ComponentHandler<FilterInputGroupTypeahead> handler) {
        delegate.onLoaded(handler);
        return this;
    }

    @Override
    public FilterInputGroupTypeahead onToggle(ToggleHandler<FilterInputGroupTypeahead> handler) {
        delegate.onToggle(handler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public void collapse(boolean fireEvent) {
        delegate.collapse(fireEvent);
    }

    @Override
    public void expand(boolean fireEvent) {
        delegate.expand(fireEvent);
    }

    public Menu menu() {
        return delegate.menu();
    }

    @Override
    public FilterInputGroupTypeahead value(String value, boolean fireEvent) {
        super.value(value, fireEvent);
        delegate.updatePreviousValue(value);
        return this;
    }
}
