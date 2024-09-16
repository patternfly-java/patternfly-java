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
package org.patternfly.filter;

/**
 * The FilterChangeHandler interface is designed to handle changes in filters. It declares a single method, onFilterChange, to
 * be implemented by any class that wishes to respond to changes in filter criteria.
 *
 * @param <T> the type of objects that the filter will be applied to
 */
@FunctionalInterface
public interface FilterChangeHandler<T> {

    /**
     * Called when there is a change in the filter criteria.
     *
     * @param filter the updated filter that is being applied
     * @param origin a string indicating the origin or source of the filter change (can be null)
     */
    void onFilterChange(Filter<T> filter, String origin);
}
