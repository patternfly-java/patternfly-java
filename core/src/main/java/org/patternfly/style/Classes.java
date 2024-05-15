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

import org.patternfly.core.Version;

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
    String add = "add";
    String alert = "alert";
    String alertGroup = "alert-group";
    String alignCenter = "align-center";
    String alignTop = "align-top";
    String ariaDisabled = "aria-disabled";
    String arrow = "arrow";
    String autoColumnWidths = "auto-column-widths";
    String autoFit = "auto-fit";
    String avatar = "avatar";
    String backdrop = "backdrop";
    String backToTop = "back-to-top";
    String badge = "badge";
    String banner = "banner";
    String bar = "bar";
    String block = "block";
    String body = "body";
    String bordered = "bordered";
    String bottom = "bottom";
    String box = "box";
    String brand = "brand";
    String breadcrumb = "breadcrumb";
    String bullseye = "bullseye";
    String button = "button";
    String caption = "caption";
    String card = "card";
    String category = "category";
    String center = "center";
    String check = "check";
    String chip = "chip";
    String chipGroup = "chip-group";
    String clickable = "clickable";
    String close = "close";
    String code = "code";
    String codeBlock = "code-block";
    String codeEditor = "code-editor";
    String col = "col";
    String collapsed = "collapsed";
    String compact = "compact";
    String content = "content";
    String control = "control";
    String controls = "controls";
    String count = "count";
    String current = "current";
    String danger = "danger";
    String description = "description";
    String descriptionList = "description-list";
    String detached = "detached";
    String disabled = "disabled";
    String display = "display";
    String divider = "divider";
    String drawer = "drawer";
    String dropdown = "dropdown";
    String dynamic = "dynamic";
    String editable = "editable";
    String editableActive = "editable-active";
    String emptyState = "empty-state";
    String end = "end";
    String error = "error";
    String expandable = "expandable";
    String expandableContent = "expandable-content";
    String expandableSection = "expandable-section";
    String expanded = "expanded";
    String expandTop = "expand-top";
    String externalIcon = "external-icon";
    String favorite = "favorite";
    String favorited = "favorited";
    String fieldGroup = "field-group";
    String fill = "fill";
    String fillColumns = "fill-columns";
    String fixed = "fixed";
    String flat = "flat";
    String flex = "flex";
    String floating = "floating";
    String floatLeft = "float-left";
    String floatRight = "float-right";
    String fluid = "fluid";
    String flyout = "flyout";
    String footer = "footer";
    String form = "form";
    String formControl = "form-control";
    String fullHeight = "full-height";
    String gallery = "gallery";
    String global = "global";
    String grid = "grid";
    String group = "group";
    String gutter = "gutter";
    String handle = "handle";
    String hasPopup = "haspopup";
    String head = "head";
    String header = "header";
    String help = "help";
    String helperText = "helper-text";
    String helpText = "help-text";
    String hidden = "hidden";
    String hint = "hint";
    String horizontal = "horizontal";
    String horizontalSubnav = "horizontal-subnav";
    String icon = "icon";
    String icons = "icons";
    String indented = "indented";
    String indeterminate = "indeterminate";
    String indicator = "indicator";
    String inline = "inline";
    String inlineGrid = "inline-grid";
    String inProgress = "in-progress";
    String input = "input";
    String inputGroup = "input-group";
    String insetNone = "inset-none";
    String item = "item";
    String jumpLinks = "jump-links";
    String keyboard = "keyboard";
    String label = "label";
    String labelGroup = "label-group";
    String left = "left";
    String level = "level";
    String limitWidth = "limit-width";
    String link = "link";
    String list = "list";
    String load = "load";
    String loading = "loading";
    String main = "main";
    String masthead = "masthead";
    String measure = "measure";
    String menu = "menu";
    String menuToggle = "menu-toggle";
    String modalBox = "modal-box";
    String nav = "nav";
    String noBorder = "no-border";
    String noBorderBottom = "no-border-bottom";
    String noBorderRows = "no-border-rows";
    String noFill = "no-fill";
    String none = "none";
    String noOffset = "no-offset";
    String noPadding = "no-padding";
    String noPaddingTop = "no-padding-top";
    String off = "off";
    String on = "on";
    String open = "open";
    String option = "option";
    String outline = "outline";
    String overflow = "overflow";
    String overflowScroll = "overflow-scroll";
    String padding = "padding";
    String page = "page";
    String pageInsets = "page-insets";
    String panel = "panel";
    String path = "path";
    String picture = "picture";
    String placeholder = "placeholder";
    String plain = "plain";
    String popover = "popover";
    String pre = "pre";
    String primary = "primary";
    String progress = "progress";
    String radio = "radio";
    String rail = "rail";
    String raised = "raised";
    String read = "read";
    String readOnly = "read-only";
    String readonly = "readonly";
    String required = "required";
    String resizable = "resizable";
    String resizeBoth = "resize-both";
    String resizeHorizontal = "resize-horizontal";
    String resizeObserver = "resize-observer";
    String resizeVertical = "resize-vertical";
    String resizing = "resizing";
    String reverse = "reverse";
    String right = "right";
    String rounded = "rounded";
    String screenReader = "pf-" + Version.PATTERN_FLY_MAJOR_VERSION + "-screen-reader";
    String scroll = "scroll";
    String scrollable = "scrollable";
    String scrollButton = "scroll-button";
    String search = "search";
    String secondary = "secondary";
    String section = "section";
    String select = "select";
    String selectable = "selectable";
    String selected = "selected";
    String separator = "separator";
    String shadowBottom = "shadow-bottom";
    String shadowTop = "shadow-top";
    String shortcuts = "shortcuts";
    String sidebar = "sidebar";
    String simpleList = "simple-list";
    String singleline = "singleline";
    String skeleton = "skeleton";
    String skipToContent = "skip-to-content";
    String slider = "slider";
    String small = "small";
    String sort = "sort";
    String spinner = "spinner";
    String split = "split";
    String splitButton = "split-button";
    String splitter = "splitter";
    String stack = "stack";
    String standalone = "standalone";
    String start = "start";
    String static_ = "static";
    String status = "status";
    String step = "step";
    String steps = "steps";
    String sticky = "sticky";
    String subnav = "subnav";
    String success = "success";
    String svg = "pf-" + Version.PATTERN_FLY_MAJOR_VERSION + "-svg";
    String switch_ = "switch";
    String tab = "tab";
    String tabContent = "tab-content";
    String table = "table";
    String tabs = "tabs";
    String tbody = "tbody";
    String td = "td";
    String term = "term";
    String tertiary = "tertiary";
    String text = "text";
    String textAlignLeft = "text-align-left";
    String textInput = "text-input";
    String textInputGroup = "text-input-group";
    String textLeftAligned = "textLeftAligned";
    String th = "th";
    String thead = "thead";
    String thumb = "thumb";
    String tick = "tick";
    String title = "title";
    String toast = "toast";
    String toggle = "toggle";
    String toggleGroup = "toggle-group";
    String toggleRight = "toggle-right";
    String toolbar = "toolbar";
    String tooltip = "tooltip";
    String top = "top";
    String tr = "tr";
    String track = "track";
    String truncate = "truncate";
    String typeahead = "typeahead";
    String unread = "unread";
    String utilities = "utilities";
    String value = "value";
    String vertical = "vertical";
    String warning = "warning";
    String widthAuto = "width-auto";
    String wizard = "wizard";
    String wrap = "wrap";

    // ------------------------------------------------------ api

    static String component(String component, String... elements) {
        return compose('c', component, elements);
    }

    static String layout(String layout, String... elements) {
        return compose('l', layout, elements);
    }

    static String util(String utility) {
        return "pf-" + Version.PATTERN_FLY_MAJOR_VERSION + "-u-" + utility;
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

    // ------------------------------------------------------ icons

    /**
     * Builds a PatternFly icons class.
     *
     * @param name the name of the PatternFly icon <strong>w/o</strong> any prefix.
     */
    static String pfIcon(String name) {
        return "pf-" + Version.PATTERN_FLY_MAJOR_VERSION + "-pficon pf-" + Version.PATTERN_FLY_MAJOR_VERSION + "-pficon-" + name;
    }

    /**
     * Builds a FontAwesome solid icons class.
     *
     * @param name the name of the FontAwesome icon <strong>w/o</strong> any prefix.
     */
    static String fas(String name) {
        return "fas fa-" + name;
    }

    /**
     * Builds a FontAwesome regular icons class.
     *
     * @param name the name of the FontAwesome icon <strong>w/o</strong> any prefix.
     */
    static String far(String name) {
        return "far fa-" + name;
    }


    // ------------------------------------------------------ internal

    static String compose(char abbreviation, String type, String... elements) {
        StringBuilder builder = new StringBuilder();
        if (type != null && !type.isEmpty()) {
            builder.append("pf-").append(Version.PATTERN_FLY_MAJOR_VERSION).append("-").append(abbreviation).append("-").append(type);
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
