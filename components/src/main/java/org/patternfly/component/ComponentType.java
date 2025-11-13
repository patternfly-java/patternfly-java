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

    Accordion("ac", "PF6/Accordion"),

    ActionList("al", "PF6/ActionList"),

    Alert("at", "PF6/Alert"),

    AlertGroup("ag", "PF6/AlertGroup"),

    Avatar("av", "PF6/Avatar"),

    Backdrop("bd", "PF6/Backdrop"),

    BackToTop("btt", "PF6/BackToTop"),

    Badge("bdg", "PF6/Badge"),

    Banner("bnr", "PF6/Banner"),

    Brand("bnd", "PF6/Brand"),

    Breadcrumb("bc", "PF6/Breadcrumb"),

    Button("btn", "PF6/Button"),

    Card("crd", "PF6/Card"),

    CardView("cv", null),

    Checkbox("chb", "PF6/Checkbox"),

    CodeBlock("cb", "PF6/CodeBlock"),

    CodeEditor("ce", "PF6/CodeEditor"),

    Content("ct", "PF6/Content"),

    ContextSelector("cs", null),

    DataList("dl", null),

    DataTable("dt", null),

    DescriptionList("dsl", "PF6/DescriptionList"),

    Divider("dvr", "PF6/Divider"),

    Drawer("dw", "PF6/Drawer"),

    Dropdown("dd", "PF6/Dropdown"),

    EmptyState("es", "PF6/EmptyState"),

    ExpandableSection("exs", "PF6/ExpandableSection"),

    Finder("fnd", "PF6/Finder"),

    Form("frm", "PF6/Form"),

    FormSelect("frs", "PF6/FormSelect"),

    HelperText("ht", "PF6/HelperText"),

    Hint("hnt", "PF6/Hint"),

    Icon("icn", "PF6/Icon"),

    InputGroup("ig", "PF6/InputGroup"),

    JumpLinks("jl", "PF6/JumpLinks"),

    Label("lbl", "PF6/Label"),

    LabelGroup("lbg", null),

    List("lst", "PF6/List"),

    Masthead("mh", "PF6/Masthead"),

    Menu("mu", "PF6/Menu"),

    MenuToggle("mt", "PF6/MenuToggle"),

    Modal("mo", "PF6/Modal"),

    MultiSelect("ms", "PF6/MultiSelect"),

    Navigation("nav", "PF6/Nav"),

    NotificationBadge("nb", "PF6/NotificationBadge"),

    NotificationDrawer("nd", "PF6/NotificationDrawer"),

    OptionsMenu("opt", null),

    Page("pg", "PF6/Page"),

    Pagination("pgn", null),

    Panel("pnl", "PF6/Panel"),

    Popover("pvr", "PF6/Popover"),

    Progress("prg", "PF6/Progress"),

    ProgressStepper("ps", "PF6/ProgressStepper"),

    Radio("rd", "PF6/Radio"),

    Sidebar("sb", "PF6/Sidebar"),

    SimpleList("sl", "PF6/SimpleList"),

    SingleSelect("ss", "PF6/SingleSelect"),

    Skeleton("sk", null),

    SkipToContent("stc", "PF6/SkipToContent"),

    Slider("sld", "PF6/Slider"),

    Spinner("sp", "PF6/Spinner"),

    Switch("sw", "PF6/Switch"),

    Tabs("tbs", "PF6/Tabs"),

    Table("tbl", "PF6/Table"),

    TextInput("ti", "PF6/TextInput"),

    TextInputGroup("tig", "PF6/TextInputGroup"),

    ThemeSelector("ths", "PF6/ThemeSelector"),

    Timestamp("ts", "PF6/Timestamp"),

    Title("tlt", "PF6/Title"),

    ToggleGroup("tg", null),

    Toolbar("tb", "PF6/Toolbar"),

    Tooltip("tt", "PF6/Tooltip"),

    TreeView("tv", "PF6/TreeView"),

    Truncate("tr", "PF6/Truncate"),

    Wizard("wzd", "PF6/Wizard");

    public final String id;
    public final String componentName;

    ComponentType(String id, String componentName) {
        this.id = id;
        this.componentName = componentName;
    }
}
