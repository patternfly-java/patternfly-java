package org.patternfly.components;

import static org.patternfly.resources.CSS.component;

public enum ComponentType {
    Accordion("ac", component("accordion")),
    ActionList("al", component("action-list")),
    Alert("at", component("alert")),
    AlertGroup("ag", component("alert-group")),
    Avatar("av", component("avatar")),
    Badge("bdg", component("badge")),
    Brand("bnd", component("brand")),
    Breadcrumb("bc", component("breadcrumb")),
    Button("btn", component("button")),
    Card("crd", component("card")),
    CardView("cv", null),
    Checkbox("chb", component("check")),
    Chip("chp", component("chip")),
    ChipGroup("cpg", component("chip-group")),
    ContextSelector("cs", component("context-selector")),
    DataList("dl", component("data-list")),
    DataTable("dt", component("table")),
    Drawer("dw", component("drawer")),
    Dropdown("dd", component("dropdown")),
    EmptyState("es", component("empty-state")),
    Form("frm", component("form")),
    Icon("icn", null),
    InputGroup("ig", component("input-group")),
    Label("lbl", component("label")),
    LabelGroup("lbg", component("label-group")),
    List("lst", component("list")),
    Masthead("mh", component("masthead")),
    Menu("mu", component("menu")),
    Navigation("nav", component("nav")),
    NotificationBadge("nb", component("button")),
    OptionsMenu("opt", component("options-menu")),
    Page("pg", component("page")),
    Pagination("pgn", component("pagination")),
    Select("sel", component("select")),
    Sidebar("sb", component("page", "sidebar")),
    Skeleton("sk", component("skeleton")),
    Slider("sld", component("slider")),
    Spinner("sp", component("spinner")),
    Switch("sw", component("switch")),
    Tabs("tbs", null),
    TextContent("tc", component("content")),
    Title("tlt", component("title")),
    ToggleGroup("tg", component("toggle-group")),
    Toolbar("tb", component("toolbar")),
    TreeView("tv", component("tree-view"));

    private final String id;
    private final String baseClass;

    ComponentType(String id, String baseClass) {
        this.id = id;
        this.baseClass = baseClass;
    }

    public String id() {
        return id;
    }

    public String baseClass() {
        return baseClass;
    }
}
