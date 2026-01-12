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
package org.patternfly.component.navigation;

public interface NavigationType {

    /**
     * Different variations of {@link NavigationGroup}s and {@link NavigationItem}s possible.
     */
    enum Vertical implements NavigationType {
        /**
         * No groups, only one level of {@link NavigationItem}s allowed.
         * <p>
         * {@snippet class=NavigationDemo region=flat}
         */
        flat,

        /**
         * Only {@link NavigationGroup}s with one level of {@link NavigationItem}s allowed. No mixed content.
         * <p>
         * {@snippet class=NavigationDemo region=grouped}
         */
        grouped,

        /**
         * Mixed content of {@link NavigationGroup}s and {@link NavigationItem}s allowed. More than one level of nesting
         * possible.
         * <p>
         * {@snippet class=NavigationDemo region=expandable}
         */
        expandable,

        // TODO Implement flyout navigation
        flyout,

        // TODO Implement drill-down navigation
        drillDown
    }

    /**
     * No groups, only one level of {@link NavigationItem}s allowed.
     * <p>
     * {@snippet class=NavigationDemo region=horizontal}
     */
    enum Horizontal implements NavigationType {
        primary,

        secondary
    }
}
