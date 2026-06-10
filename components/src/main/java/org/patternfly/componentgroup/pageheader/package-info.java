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
 * Provides a composite page header component for displaying a title, subtitle, icon, breadcrumb, and label.
 *
 * <p>The page header is a PFJ-specific composition that combines multiple PatternFly components into a standard
 * page-level header section. It supports an optional icon, title, subtitle, breadcrumb navigation, and label badge.
 *
 * <h2>Usage</h2>
 *
 * {@snippet :
 * PageHeader header = pageHeader()
 *     .icon(img("icon.svg"))
 *     .title("My Page")
 *     .subTitle("A brief description")
 *     .addBreadcrumb(breadcrumb()
 *         .addItem(breadcrumbItem("Home", "#"))
 *         .addItem(breadcrumbItem("Current")))
 *     .addLabel(label("Administrator"));
 * }
 *
 * @see org.patternfly.componentgroup.pageheader.PageHeader
 */
package org.patternfly.componentgroup.pageheader;
