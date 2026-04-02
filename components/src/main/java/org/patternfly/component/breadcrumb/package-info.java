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
 * Provides the PatternFly breadcrumb component for hierarchical navigation.
 *
 * <p>A breadcrumb provides users with a way to navigate back through a hierarchy of pages. Each breadcrumb item
 * represents a level in the navigation hierarchy, with the last item typically representing the current page.
 *
 * <h2>Usage</h2>
 *
 * <p>Basic breadcrumb with linked items:
 *
 * {@snippet :
 * Breadcrumb breadcrumb = breadcrumb()
 *     .addItem(breadcrumbItem("home", "Section home", "#home"))
 *     .addItem(breadcrumbItem("title", "Section title", "#title"))
 *     .addItem(breadcrumbItem("landing", "Section landing", "#landing")
 *         .active());
 * }
 *
 * <p>Breadcrumb without a home link:
 *
 * {@snippet :
 * Breadcrumb breadcrumb = breadcrumb()
 *     .addItem(breadcrumbItem("home", "Section home"))
 *     .addItem(breadcrumbItem("title-1", "Section title", "#title-1"))
 *     .addItem(breadcrumbItem("title-2", "Section title", "#title-2"))
 *     .addItem(breadcrumbItem("landing", "Section landing", "#landing")
 *         .active());
 * }
 *
 * @see org.patternfly.component.breadcrumb.Breadcrumb
 * @see org.patternfly.component.breadcrumb.BreadcrumbItem
 * @see <a href="https://www.patternfly.org/components/breadcrumb">PatternFly Breadcrumb</a>
 */
package org.patternfly.component.breadcrumb;