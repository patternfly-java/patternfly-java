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
 * Provides a service card component for displaying a service with an icon, title, subtitle, and description.
 *
 * <p>The service card is a PFJ-specific composition that presents a service or application entry with a visual icon,
 * title, optional subtitle, and description text. It is typically used in dashboards or catalog views to represent
 * available services.
 *
 * <h2>Usage</h2>
 *
 * {@snippet :
 * ServiceCard card = serviceCard()
 *     .icon(img("service-icon.svg"))
 *     .title("My Service")
 *     .subTitle("v2.1")
 *     .description("Manages application deployments and configurations.");
 * }
 *
 * @see org.patternfly.componentgroup.servicecard.ServiceCard
 */
package org.patternfly.componentgroup.servicecard;
