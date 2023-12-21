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

public enum ComponentType {

    Accordion("ac", "PF5/Accordion"),

    ActionList("al", "PF5/ActionList"),

    Alert("at", "PF5/Alert"),

    AlertGroup("ag", "PF5/AlertGroup"),

    Avatar("av", "PF5/Avatar"),

    BackToTop("btt", "PF5/BackToTop"),

    Badge("bdg", "PF5/Badge"),

    Banner("bnr", "PF5/Banner"),

    Brand("bnd", "PF5/Brand"),

    Breadcrumb("bc", null),

    Button("btn", "PF5/Button"),

    Card("crd", "PF5/Card"),

    CardView("cv", null),

    Checkbox("chb", "PF5/Checkbox"),

    Chip("chp", "PF5/Chip"),

    ChipGroup("cpg", "PF5/ChipGroup"),

    CodeBlock("cb", "PF5/CodeBlock"),

    CodeEditor("ce", "PF5/CodeEditor"),

    ContextSelector("cs", null),

    DataList("dl", null),

    DataTable("dt", null),

    DescriptionList("dsl", "PF5/DescriptionList"),

    Divider("dvr", "PF5/Divider"),

    Drawer("dw", null),

    Dropdown("dd", "PF5/Dropdown"),

    EmptyState("es", null),

    ExpandableSection("exs", "PF5/ExpandableSection"),

    Form("frm", "PF5/Form"),

    FormSelect("frs", "PF5/FormSelect"),

    HelperText("ht", "PF5/HelperText"),

    Icon("icn", "PF5/Icon"),

    InputGroup("ig", null),

    Label("lbl", "PF5/Label"),

    LabelGroup("lbg", null),

    List("lst", null),

    Masthead("mh", "PF5/Masthead"),

    Menu("mu", "PF5/Menu"),

    MenuToggle("mt", "PF5/MenuToggle"),

    Navigation("nav", "PF5/Nav"),

    NotificationBadge("nb", null),

    OptionsMenu("opt", null),

    Page("pg", "PF5/Page"),

    Pagination("pgn", null),

    Popover("pvr", "PF5/Popover"),

    Radio("rd", "PF5/Radio"),

    Select("sel", null),

    Sidebar("sb", "PF5/Sidebar"),

    Skeleton("sk", null),

    SkipToContent("stc", "PF5/SkipToContent"),

    Slider("sld", null),

    Spinner("sp", "PF5/Spinner"),

    Switch("sw", null),

    Tabs("tbs", null),

    TextContent("tc", "PF5/TextContent"),

    TextInput("ti", "PF5/TextInput"),

    TextInputGroup("tig", "PF5/TextInputGroup"),

    Title("tlt", "PF5/Title"),

    ToggleGroup("tg", null),

    Toolbar("tb", "PF5/Toolbar"),

    Tooltip("tt", "PF5/Tooltip"),

    TreeView("tv", null),

    Wizard("wzd", "PF5/Wizard");

    public final String id;
    public final String componentName;

    ComponentType(String id, String componentName) {
        this.id = id;
        this.componentName = componentName;
    }
}
