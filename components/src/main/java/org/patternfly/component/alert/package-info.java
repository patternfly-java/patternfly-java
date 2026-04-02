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
 * Provides the PatternFly alert component for displaying notification messages to users.
 *
 * <p>Alerts are used to communicate the status of a system, feature, or page. They can appear inline on a page or as
 * toast notifications via alert groups. PatternFly supports several alert variants including custom, info, success,
 * warning, and danger, each with an associated status icon and color.
 *
 * <h2>Usage</h2>
 *
 * <p>Basic alert variants:
 *
 * {@snippet :
 * Alert infoAlert = alert(info, "Info alert title");
 * Alert successAlert = alert(success, "Success alert title");
 * Alert warningAlert = alert(warning, "Warning alert title");
 * Alert dangerAlert = alert(danger, "Danger alert title");
 * }
 *
 * <p>Alert with description, actions, and close button:
 *
 * {@snippet :
 * Alert alert = alert(success, "Success alert title")
 *     .closable()
 *     .addDescription("This should tell the user more information about the alert.")
 *     .addActionGroup(alertActionGroup()
 *         .addAction("View details", (e, a) -> handleViewDetails())
 *         .addAction("Ignore", (e, a) -> handleIgnore()));
 * }
 *
 * <p>Inline alert group for static alerts:
 *
 * {@snippet :
 * AlertGroup group = alertGroup(staticInline)
 *     .addItem(alert(success, "Success alert").inline())
 *     .addItem(alert(info, "Info alert"));
 * }
 *
 * @see org.patternfly.component.alert.Alert
 * @see org.patternfly.component.alert.AlertGroup
 * @see org.patternfly.component.alert.AlertActionGroup
 * @see org.patternfly.component.alert.AlertDescription
 * @see org.patternfly.component.alert.AlertGroupType
 * @see <a href="https://www.patternfly.org/components/alert">PatternFly Alert</a>
 */
package org.patternfly.component.alert;