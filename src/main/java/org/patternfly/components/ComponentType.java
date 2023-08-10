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

import static org.patternfly.resources.CSS.component;

public enum ComponentType {

    Accordion("ac", component("accordion"), null),

    ActionList("al", component("action-list"), null),

    Alert("at", component("alert"), "PF5/Alert"),

    AlertGroup("ag", component("alert-group"), null),

    Avatar("av", component("avatar"), null),

    Badge("bdg", component("badge"), null),

    Brand("bnd", component("brand"), null),

    Breadcrumb("bc", component("breadcrumb"), null),

    Button("btn", component("button"), null),

    Card("crd", component("card"), null),

    CardView("cv", null, null),

    Checkbox("chb", component("check"), null),

    Chip("chp", component("chip"), null),

    ChipGroup("cpg", component("chip-group"), null),

    ContextSelector("cs", component("context-selector"), null),

    DataList("dl", component("data-list"), null),

    DataTable("dt", component("table"), null),

    Drawer("dw", component("drawer"), null),

    Dropdown("dd", component("dropdown"), null),

    EmptyState("es", component("empty-state"), null),

    Form("frm", component("form"), null),

    Icon("icn", null, null),

    InputGroup("ig", component("input-group"), null),

    Label("lbl", component("label"), null),

    LabelGroup("lbg", component("label-group"), null),

    List("lst", component("list"), null),

    Masthead("mh", component("masthead"), null),

    Menu("mu", component("menu"), null),

    Navigation("nav", component("nav"), null),

    NotificationBadge("nb", component("button"), null),

    OptionsMenu("opt", component("options-menu"), null),

    Page("pg", component("page"), "PF5/Page"),

    Pagination("pgn", component("pagination"), null),

    Select("sel", component("select"), null),

    Sidebar("sb", component("page", "sidebar"), null),

    Skeleton("sk", component("skeleton"), null),

    SkipToContent("stc", component("skip-to-content"), null),

    Slider("sld", component("slider"), null),

    Spinner("sp", component("spinner"), null),

    Switch("sw", component("switch"), null),

    Tabs("tbs", null, null),

    TextContent("tc", component("content"), null),

    Title("tlt", component("title"), null),

    ToggleGroup("tg", component("toggle-group"), null),

    Toolbar("tb", component("toolbar"), null),

    TreeView("tv", component("tree-view"), null),

    Wizard("wzd", component("wizard"), "PF5/Wizard"),

    // TODO Remove, once all components have been migrated to PF 5
    Unknown("ukn", null, null);

    public final String id;
    public final String baseClass;
    public final String componentName;

    ComponentType(String id, String baseClass, String componentName) {
        this.id = id;
        this.baseClass = baseClass;
        this.componentName = componentName;
    }
}
