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
package org.patternfly.component.pagination;

import elemental2.dom.Event;

/**
 * Handler for pagination navigation events.
 */
@FunctionalInterface
public interface PaginationHandler {

    /**
     * Called when a pagination navigation event occurs.
     *
     * @param event      the browser event that triggered the navigation
     * @param pagination the pagination component
     * @param previous   the page info <em>before</em> the navigation has been applied
     * @param update     the page info <em>after</em> the navigation has been applied
     */
    void onNavigation(Event event, Pagination pagination, PageInfo previous, PageInfo update);
}
