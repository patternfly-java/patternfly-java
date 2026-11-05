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
/**
 * A pagination component that allows users to navigate through large content views split across multiple pages.
 *
 * <p>This package provides the {@link org.patternfly.component.pagination.Pagination} component along with its
 * supporting classes for managing pagination state, page sizes, display variants, and navigation events.
 *
 * <h2>Key classes</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.pagination.Pagination} — The main pagination component with page navigation
 *     controls, page size selection, and range display.</li>
 *     <li>{@link org.patternfly.component.pagination.PageInfo} — Immutable record holding pagination state: current page
 *     (1-based), page size, and total item count. Supports indeterminate totals.</li>
 *     <li>{@link org.patternfly.component.pagination.Display} — Modifier enum for display variants (summary vs full).</li>
 *     <li>{@link org.patternfly.component.pagination.PaginationHandler} — Functional interface for pagination
 *     navigation events.</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>Creating a pagination component with a known total:
 * <p>
 * {@snippet :
 * import static org.patternfly.component.pagination.Pagination.pagination;
 *
 * pagination(PageInfo.of(20, 536))
 *         .onNext((event, pagination, pageInfo) -> updateContent(pageInfo))
 *         .onPrevious((event, pagination, pageInfo) -> updateContent(pageInfo));
 *}
 *
 * <p>Creating an indeterminate pagination (total unknown):
 * <p>
 * {@snippet :
 * pagination(PageInfo.indeterminate());
 *}
 *
 * @see org.patternfly.component.pagination.Pagination
 * @see org.patternfly.component.pagination.PageInfo
 * @see <a href="https://www.patternfly.org/components/pagination">https://www.patternfly.org/components/pagination</a>
 */
package org.patternfly.component.pagination;
