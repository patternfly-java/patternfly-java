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
package org.patternfly.style;

import org.patternfly.core.PatternFly;

import static org.patternfly.style.Breakpoint.default_;

@SuppressWarnings("SpellCheckingInspection")
public interface Classes {

    // ------------------------------------------------------ constants (a-z)

    // TODO Cleanup and remove unused classes
    String accordion = "accordion";
    String action = "action";
    String actionGroup = "action-group";
    String actionList = "action-list";
    String actions = "actions";
    String active = "active";
    String alert = "alert";
    String alertGroup = "alert-group";
    String alignCenter = "align-center";
    String alignRight = "align-right";
    String arrow = "arrow";
    String autoColumnWidths = "auto-column-widths";
    String autoFit = "auto-fit";
    String avatar = "avatar";
    String backToTop = "back-to-top";
    String badge = "badge";
    String banner = "banner";
    String block = "block";
    String body = "body";
    String bordered = "bordered";
    String bottom = "bottom";
    String brand = "brand";
    String breadcrumb = "breadcrumb";
    String bulkSelect = "bulk-select";
    String bullseye = "bullseye";
    String button = "button";
    String buttonGroup = "button-group";
    String card = "card";
    String category = "category";
    String cell = "cell";
    String center = "center";
    String check = "check";
    String chip = "chip";
    String chipGroup = "chip-group";
    String clickable = "clickable";
    String clipper = "clipper";
    String close = "close";
    String code = "code";
    String codeBlock = "code-block";
    String codeEditor = "code-editor";
    String col = "col";
    String collapsed = "collapsed";
    String compact = "compact";
    String content = "content";
    String contextSelector = "context-selector";
    String control = "control";
    String controls = "controls";
    String count = "count";
    String current = "current";
    String custom = "custom";
    String danger = "danger";
    String dataList = "data-list";
    String dataToolbar = "data-toolbar";
    String description = "description";
    String descriptionList = "description-list";
    String detached = "detached";
    String disabled = "disabled";
    String display = "display";
    String divider = "divider";
    String dropdown = "dropdown";
    String dynamic = "dynamic";
    String editable = "editable";
    String editableActive = "editable-active";
    String emptyState = "empty-state";
    String end = "end";
    String error = "error";
    String expandable = "expandable";
    String expandableContent = "expandable-content";
    String expandableRow = "expandable-row";
    String expandableSection = "expandable-section";
    String expanded = "expanded";
    String expandTop = "expand-top";
    String externalIcon = "external-icon";
    String favorite = "favorite";
    String favorited = "favorited";
    String fieldGroup = "field-group";
    String fieldset = "fieldset";
    String fill = "fill";
    String fillColumns = "fill-columns";
    String filterGroup = "filter-group";
    String fixed = "fixed";
    String flat = "flat";
    String flex = "flex";
    String floatLeft = "float-left";
    String floatRight = "float-right";
    String fluid = "fluid";
    String flyout = "flyout";
    String focus = "focus";
    String footer = "footer";
    String form = "form";
    String formControl = "form-control";
    String fullHeight = "full-height";
    String gallery = "gallery";
    String global = "global";
    String grid = "grid";
    String group = "group";
    String gutter = "gutter";
    String hasPopup = "haspopup";
    String head = "head";
    String header = "header";
    String help = "help";
    String helpText = "help-text";
    String helperText = "helper-text";
    String hidden = "hidden";
    String horizontal = "horizontal";
    String horizontalSubnav = "horizontal-subnav";
    String hoverable = "hoverable";
    String icon = "icon";
    String icons = "icons";
    String iconButtonGroup = "icon-button-group";
    String indented = "indented";
    String indeterminate = "indeterminate";
    String indicator = "indicator";
    String info = "info";
    String inline = "inline";
    String inlineGrid = "inline-grid";
    String inProgress = "in-progress";
    String input = "input";
    String inputGroup = "input-group";
    String inset = "inset";
    String insetNone = "inset-none";
    String item = "item";
    String itemAction = "item-action";
    String itemContent = "item-content";
    String itemControl = "item-control";
    String itemRow = "item-row";
    String keyboard = "keyboard";
    String label = "label";
    String labelGroup = "label-group";
    String leadBall = "lead-ball";
    String left = "left";
    String level = "level";
    String limitWidth = "limit-width";
    String link = "link";
    String list = "list";
    String listbox = "listbox";
    String main = "main";
    String mainSection = "main-section";
    String masthead = "masthead";
    String maxLines = "max-lines";
    String menu = "menu";
    String menuitem = "menuitem";
    String menuToggle = "menu-toggle";
    String nav = "nav";
    String noBorderRows = "no-border-rows";
    String noFill = "no-fill";
    String noOffset = "no-offset";
    String none = "none";
    String noPadding = "no-padding";
    String noPaddingTop = "no-padding-top";
    String option = "option";
    String optionsMenu = "options-menu";
    String outline = "outline";
    String overflow = "overflow";
    String overflowScroll = "overflow-scroll";
    String padding = "padding";
    String page = "page";
    String pageInsets = "page-insets";
    String pagination = "pagination";
    String path = "path";
    String picture = "picture";
    String plain = "plain";
    String placeholder = "placeholder";
    String popover = "popover";
    String pre = "pre";
    String presentation = "presentation";
    String primary = "primary";
    String progress = "progress";
    String progressbar = "progressbar";
    String radio = "radio";
    String read = "read";
    String readOnly = "read-only";
    String readonly = "readonly";
    String required = "required";
    String resizeBoth = "resize-both";
    String resizeObserver = "resize-observer";
    String resizeHorizontal = "resize-horizontal";
    String resizeVertical = "resize-vertical";
    String right = "right";
    String rounded = "rounded";
    String scope = "scope";
    String screenReader = "pf-" + PatternFly.VERSION + "-screen-reader";
    String scroll = "scroll";
    String scrollable = "scrollable";
    String scrollButton = "scroll-button";
    String search = "search";
    String secondary = "secondary";
    String section = "section";
    String select = "select";
    String selectable = "selectable";
    String selected = "selected";
    String selector = "selector";
    String separator = "separator";
    String shadowBottom = "shadow-bottom";
    String shadowTop = "shadow-top";
    String shortcuts = "shortcuts";
    String sidebar = "sidebar";
    String simple = "simple";
    String skipToContent = "skip-to-content";
    String small = "small";
    String sort = "sort";
    String spinner = "spinner";
    String split = "split";
    String splitButton = "split-button";
    String stack = "stack";
    String standalone = "standalone";
    String start = "start";
    String status = "status";
    String sticky = "sticky";
    String subnav = "subnav";
    String success = "success";
    String tab = "tab";
    String tabContent = "tab-content";
    String table = "table";
    String tabpanel = "tabpanel";
    String tabs = "tabs";
    String tailBall = "tail-ball";
    String tertiary = "tertiary";
    String term = "term";
    String text = "text";
    String textInput = "text-input";
    String textInputGroup = "text-input-group";
    String textAlignLeft = "text-align-left";
    String textLeftAligned = "textLeftAligned";
    String title = "title";
    String toast = "toast";
    String toggle = "toggle";
    String toggleGroup = "toggle-group";
    String toggleGroupContainer = "toggle-group-container";
    String toggleRight = "toggle-right";
    String toolbar = "toolbar";
    String tools = "tools";
    String tooltip = "tooltip";
    String top = "top";
    String totalItems = "total-items";
    String truncate = "truncate";
    String type = "type";
    String typeahead = "typeahead";
    String unread = "unread";
    String utilities = "utilities";
    String valueText = "value-text";
    String vertical = "vertical";
    String warning = "warning";
    String widthAuto = "width-auto";
    String wizard = "wizard";
    String wrap = "wrap";
    String wrapper = "wrapper";

    // ------------------------------------------------------ api

    static String component(String component, String... elements) {
        return compose('c', component, elements);
    }

    static String layout(String layout, String... elements) {
        return compose('l', layout, elements);
    }

    static String util(String utility) {
        return "pf-" + PatternFly.VERSION + "-u-" + utility;
    }

    // ------------------------------------------------------ modifiers

    static String modifier(String modifier) {
        return modifier != null && !modifier.isEmpty() ? "pf-m-" + modifier : "";
    }

    static String modifier(String modifier, Size size) {
        if (modifier != null && !modifier.isEmpty() && size != null) {
            return "pf-m-" + modifier + "-" + size.value();
        }
        return "";
    }

    static String modifier(String modifier, Breakpoint breakpoint) {
        if (modifier != null && !modifier.isEmpty() && breakpoint != null) {
            return "pf-m-" + modifier + (breakpoint != default_ ? "-on-" + breakpoint.value : "");
        }
        return "";

    }

    // ------------------------------------------------------ internal

    private static String compose(char abbreviation, String type, String... elements) {
        StringBuilder builder = new StringBuilder();
        if (type != null && !type.isEmpty()) {
            builder.append("pf-").append(PatternFly.VERSION).append("-").append(abbreviation).append("-").append(type);
            if (elements != null && elements.length != 0) {
                builder.append("__");
                for (int i = 0; i < elements.length; i++) {
                    builder.append(elements[i]);
                    if (i < elements.length - 1) {
                        builder.append("-");
                    }
                }
            }
        }
        return builder.toString();
    }
}
