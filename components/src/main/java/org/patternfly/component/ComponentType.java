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

    Accordion("ac", "PF6/Component/Accordion"),

    ActionList("al", "PF6/Component/ActionList"),

    Alert("at", "PF6/Component/Alert"),

    AlertGroup("ag", "PF6/Component/AlertGroup"),

    Avatar("av", "PF6/Component/Avatar"),

    Backdrop("bd", "PF6/Component/Backdrop"),

    BackToTop("btt", "PF6/Component/BackToTop"),

    Badge("bdg", "PF6/Component/Badge"),

    Banner("bnr", "PF6/Component/Banner"),

    Brand("bnd", "PF6/Component/Brand"),

    Breadcrumb("bc", "PF6/Component/Breadcrumb"),

    Button("btn", "PF6/Component/Button"),

    Card("crd", "PF6/Component/Card"),

    Checkbox("chb", "PF6/Component/Checkbox"),

    CodeBlock("cb", "PF6/Component/CodeBlock"),

    CodeEditor("ce", "PF6/Component/CodeEditor"),

    Content("ct", "PF6/Component/Content"),

    DataList("dl", "PF6/Component/DataList"),

    DescriptionList("dsl", "PF6/Component/DescriptionList"),

    Divider("dvr", "PF6/Component/Divider"),

    Drawer("dw", "PF6/Component/Drawer"),

    Dropdown("dd", "PF6/Component/Dropdown"),

    EmptyState("es", "PF6/Component/EmptyState"),

    ExpandableSection("exs", "PF6/Component/ExpandableSection"),

    FilterInput("fi", "PF6/Component/FilterInput"),

    Finder("fnd", "PF6/Component/Finder"),

    Form("frm", "PF6/Component/Form"),

    FormSelect("frs", "PF6/Component/FormSelect"),

    HelperText("ht", "PF6/Component/HelperText"),

    Hint("hnt", "PF6/Component/Hint"),

    Icon("icn", "PF6/Component/Icon"),

    InputGroup("ig", "PF6/Component/InputGroup"),

    JumpLinks("jl", "PF6/Component/JumpLinks"),

    Label("lbl", "PF6/Component/Label"),

    LabelGroup("lbg", "PF6/Component/LabelGroup"),

    List("lst", "PF6/Component/List"),

    Masthead("mh", "PF6/Component/Masthead"),

    Menu("mu", "PF6/Component/Menu"),

    MenuToggle("mt", "PF6/Component/MenuToggle"),

    Modal("mo", "PF6/Component/Modal"),

    MultiSelect("ms", "PF6/Component/MultiSelect"),

    Navigation("nav", "PF6/Component/Nav"),

    NotificationBadge("nb", "PF6/Component/NotificationBadge"),

    NotificationDrawer("nd", "PF6/Component/NotificationDrawer"),

    NumberInput("ni", "PF6/Component/NumberInput"),

    Page("pg", "PF6/Component/Page"),

    PageHeader("ph", "PF6/Component/PageHeader"),

    Panel("pnl", "PF6/Component/Panel"),

    Popover("pvr", "PF6/Component/Popover"),

    Progress("prg", "PF6/Component/Progress"),

    ProgressStepper("ps", "PF6/Component/ProgressStepper"),

    Radio("rd", "PF6/Component/Radio"),

    SearchInput("si", "PF6/Component/SearchInput"),

    ServiceCard("sc", "PF6/Component/ServiceCard"),

    Sidebar("sb", "PF6/Component/Sidebar"),

    SimpleList("sl", "PF6/Component/SimpleList"),

    SingleSelect("ss", "PF6/Component/SingleSelect"),

    Skeleton("sk", "PF6/Component/Skeleton"),

    SkipToContent("stc", "PF6/Component/SkipToContent"),

    Slider("sld", "PF6/Component/Slider"),

    Spinner("sp", "PF6/Component/Spinner"),

    Switch("sw", "PF6/Component/Switch"),

    Tabs("tbs", "PF6/Component/Tabs"),

    Table("tbl", "PF6/Component/Table"),

    TextInput("ti", "PF6/Component/TextInput"),

    TextInputGroup("tig", "PF6/Component/TextInputGroup"),

    ThemeSelector("ths", "PF6/Component/ThemeSelector"),

    Timestamp("ts", "PF6/Component/Timestamp"),

    Title("tlt", "PF6/Component/Title"),

    ToggleGroup("tg", "PF6/Component/ToggleGroup"),

    Toolbar("tb", "PF6/Component/Toolbar"),

    Tooltip("tt", "PF6/Component/Tooltip"),

    TreeView("tv", "PF6/Component/TreeView"),

    Truncate("tr", "PF6/Component/Truncate"),

    Wizard("wzd", "PF6/Component/Wizard"),
    ;

    public final String id;
    public final String componentName;

    ComponentType(String id, String componentName) {
        this.id = id;
        this.componentName = componentName;
    }
}
