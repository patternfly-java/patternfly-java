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
package org.patternfly.component;

/** Defines how items can be selected in components that support selection, such as menus and navigation. */
public enum SelectionMode {

    /**
     * Not a real selection mode. A click "selects" an item.
     */
    click,

    /**
     * Only a single item can be selected at any time.
     */
    single,

    /**
     * Only a single item can be selected in a group.
     */
    group,

    /**
     * Multiple items can be selected simultaneously.
     */
    multi
}
