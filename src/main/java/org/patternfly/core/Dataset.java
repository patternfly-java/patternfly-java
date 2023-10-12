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
package org.patternfly.core;

public interface Dataset {

    String expandableSectionId = "expandableSectionId";
    String expandableSectionTarget = "expandableSectionTarget";
    String navigationGroup = "navigationGroup";
    String navigationItem = "navigationItem";

    // @formatter:off - Used in deprecated components
    @Deprecated String cardViewItem = "cardViewItem";
    @Deprecated String contextSelectorItem = "contextSelectorItem";
    @Deprecated String dataListItem = "dataListItem";
    @Deprecated String dataTableItem = "dataTableItem";
    @Deprecated String dataTableSort = "dataTableSort";
    @Deprecated String dropdownGroup = "dropdownGroup";
    @Deprecated String dropdownItem = "dropdownItem";
    @Deprecated String multiOptionsMenuCheck = "multiOptionsMenuCheck";
    @Deprecated String multiOptionsMenuItem = "multiOptionsMenuItem";
    @Deprecated String multiSelectItem = "multiSelectItem";
    @Deprecated String singleOptionsMenuItem = "singleOptionsMenuItem";
    @Deprecated String singleSelectItem = "singleSelectItem";
    @Deprecated String singleSelectFilter = "singleSelectFilter";
    // @formatter:on
}
