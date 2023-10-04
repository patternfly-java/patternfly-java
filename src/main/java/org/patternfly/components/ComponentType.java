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
package org.patternfly.components;

public enum ComponentType {

    Accordion("ac", null),

    ActionList("al", null),

    Alert("at", "PF5/Alert"),

    AlertGroup("ag", null),

    Avatar("av", null),

    Badge("bdg", "PF5/Badge"),

    Brand("bnd", "PF5/Brand"),

    Breadcrumb("bc", null),

    Button("btn", null),

    Card("crd", null),

    CardView("cv", null),

    Checkbox("chb", "PF5/Checkbox"),

    Chip("chp", null),

    ChipGroup("cpg", null),

    ContextSelector("cs", null),

    DataList("dl", null),

    DataTable("dt", null),

    Divider("dvr", "PF5/Divider"),

    Drawer("dw", null),

    Dropdown("dd", null),

    EmptyState("es", null),

    Form("frm", null),

    Icon("icn", "PF5/Icon"),

    InputGroup("ig", null),

    Label("lbl", null),

    LabelGroup("lbg", null),

    List("lst", null),

    Masthead("mh", null),

    Menu("mu", "PF5/Menu"),

    Navigation("nav", "PF5/Nav"),

    NavigationItem("ni", null),

    NotificationBadge("nb", null),

    OptionsMenu("opt", null),

    Page("pg", "PF5/Page"),

    Pagination("pgn", null),

    Select("sel", null),

    Sidebar("sb", null),

    Skeleton("sk", null),

    SkipToContent("stc", null),

    Slider("sld", null),

    Spinner("sp", null),

    Switch("sw", null),

    Tabs("tbs", null),

    TextContent("tc", null),

    Title("tlt", "PF5/Title"),

    ToggleGroup("tg", null),

    Toolbar("tb", "PF5/Toolbar"),

    TreeView("tv", null),

    Wizard("wzd", "PF5/Wizard"),

    // TODO Remove, once all components have been migrated to PF 5
    Unknown("ukn", null);

    public final String id;
    public final String componentName;

    ComponentType(String id, String componentName) {
        this.id = id;
        this.componentName = componentName;
    }
}
