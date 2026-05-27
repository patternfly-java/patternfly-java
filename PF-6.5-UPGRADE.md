# PatternFly 6.5 Upgrade Checklist

Upgrade from PatternFly 6.4.0 → 6.5.x.
Source: [Release Highlights](https://www.patternfly.org/releases/release-highlights), [patternfly/patternfly v6.5.0](https://github.com/patternfly/patternfly/releases/tag/v6.5.0), [patternfly/react v6.5.0](https://github.com/patternfly/patternfly-react/releases/tag/v6.5.0)

Items marked ⚠️ are potentially breaking or high-impact. Items marked 🆕 are entirely new. Items marked 🔧 are modifications to existing components.

---

## 1 — Theming & Global Changes

These are cross-cutting concerns that affect many components.

- [x] 🆕 **Project Felt theme support** — Added `Theme` enum and `ThemeManager<Theme>` with CSS class `pf-v6-theme-felt`. ThemeSelector now includes a Theme toggle group (Default / Project Felt).
- [x] 🆕 **Glass mode** — Added `Contrast.GLASS` value mapping to CSS class `pf-v6-theme-glass`. Added `glass` and `noPlainOnGlass` constants to `Classes.java` and `Glass`/`NoPlainOnGlass` modifier interfaces to `Modifiers.java`. Per-component support tracked in section 3.
- [x] 🔧 **High contrast mode (full release)** — Graduated from beta. `Contrast.HIGH_CONTRAST` maps to `pf-v6-theme-high-contrast`. ThemeSelector exposes all contrast modes (System / Default / High contrast / Glass).
- [x] 🔧 **Link style changes** — CSS-only change, no Java impact. Verified no markup changes needed.
- [x] 🔧 **Navigation active item style** — CSS-only, nav component markup is compatible. No Java changes needed.
- [x] 🔧 **Control borders** — CSS-only change. No Java changes needed.
- [x] 🆕 **Global SCSS variable for image path** — SCSS build concern, not applicable to Java components.

---

## 2 — New Components

- [ ] 🆕 **Hero component** (beta) — New card-like component for attention-grabbing callouts. Decide whether to implement.
- [ ] 🆕 **CardDescription** — New sub-component for Card (#7921, #12105). Add `CardDescription` class and `addDescription()` to Card.
- [ ] 🆕 **Compass component** (beta) — Conversational/generative UI layout with CompassMainHeader, CompassMainFooter, CompassNav, CompassPanel. Large new component set. Decide whether to implement (likely defer — beta + AI-specific).
- [ ] 🆕 **Docked Navigation** — Space-saving nav that minimizes to icons (#8020, #8149). New layout paradigm. Decide whether to implement.

---

## 3 — New Variants & Modifiers on Existing Components

### Button
- [ ] 🔧 **Circle variant** — New `.pf-m-circle` modifier (#7922, #12092). Add `circle()` method or variant enum value.
- [ ] 🔧 **Plain variant** — New `.pf-m-plain` on button (#8305). Button may already support `plain()` via `Modifiers.Plain` — verify it applies correctly with new styling.

### ActionList
- [ ] 🔧 **Vertical variant** — New `.pf-m-vertical` modifier (#7920, #12090). Add `vertical()` or `isVertical()` method. `Modifiers.Vertical` interface exists — implement it on ActionList.

### Table
- [ ] 🔧 **Plain variant** — New `isPlain` prop (#7925, #12112). Add `plain()` support via `Modifiers.Plain`.
- [ ] 🔧 **Container queries support** — (#8054). CSS-only, verify markup compatibility.
- [ ] 🔧 **Dynamic sticky styling** — (#8321, #12348). New sticky behavior for table headers. Evaluate if Java API changes needed.
- [ ] 🔧 **Indeterminate checkbox for select-all header** — (#12411). Add support for indeterminate state on select-all checkbox.

### DataList
- [ ] 🔧 **Plain variant** — New `isPlain` prop (#7929, #12112). Add `plain()` support.
- [ ] 🔧 **`isNoPlainOnGlass` prop** — (#12292). Add glass-related modifier.

### Tabs
- [ ] 🔧 **Nav variant** — New `.pf-m-nav` modifier (#7924, #12111). Add nav variant support.
- [ ] 🔧 **`tabListAriaLabel` prop** — (#12193). Add aria-label support for tab list.
- [ ] 🔧 **Updated `aria-selected` and label attributes** — (#7975). Verify current implementation matches new behavior.

### Drawer
- [ ] 🔧 **Pill variant** — New `.pf-m-pill` modifier (#7945, #12091). Add `pill()` method.
- [ ] 🔧 **Glass panel support** — `noGlass` / glass props (#7963, #12125, #12305). Add glass-related methods.
- [ ] 🔧 **Plain variant on DrawerSection** — (#8318). Add `plain()` to drawer section.
- [ ] 🔧 **`inert` attribute when closed** — (#12027). Add `inert` attribute to DrawerPanelContent when drawer is closed.
- [ ] 🔧 **Splitter restyled** — (#8198). CSS-only, verify compatibility.

### Wizard
- [ ] ⚠️ **Warning step status** — (#12041). `ValidationStatus.warning` already exists in PatternFly Java — verify the wizard step properly supports it with correct icon.
- [ ] 🔧 **Plain styling** — (#8215, #12289). Add `plain()` support to Wizard.

### Progress
- [ ] 🔧 **`hideStatusIcon` flag** — (#12038). Add method to hide the status icon.
- [ ] 🔧 **Fixed danger icon** — (#7900, #12073). Verify PatternFly Java uses `fa-exclamation-circle` for danger status.

### ExpandableSection
- [ ] 🔧 **Aria labeling props** — (#12071). Add aria label support.
- [ ] 🔧 **Functional `toggleContent`** — (#12063). Allow function-based toggle content.
- [ ] 🔧 **More control over toggle icon** — (#12051). Add icon customization to toggle.

### Banner
- [ ] 🔧 **Pill variant** — New `.pf-m-pill` modifier (#8353). Add `pill()` method.

### Accordion
- [ ] 🔧 **`isPlain` and `isNoPlainOnGlass` props** — (#12288). Add `plain()` and glass-related modifier.

### ToggleGroup
- [ ] 🔧 **Full width variant** — `.pf-m-full-width` (#8326, #12374). `Modifiers.FullWidth` already exists — implement it on ToggleGroup.

### Pagination
- [ ] 🔧 **Dynamic sticky style** — (#8320, #12388). New sticky behavior.
- [ ] 🔧 **Plain variant** — (#8320, #12388). Add `plain()` support.

### Toolbar
- [ ] 🔧 **Dynamic sticky support** — (#8321, #12375). New sticky behavior for toolbars.
- [ ] 🔧 **Responsive height via breakpoints** — (#8295, #12347). Add breakpoint-based height.

### Card
- [ ] 🔧 **`isGlass` prop** — (#12290). Add `glass()` method.
- [ ] ⚠️ **Card header wrap** — Card header wrap examples now require `.pf-v6-c-card__header-main` wrapper (#7897). Verify card header structure.
- [ ] 🔧 **Clickable/selectable plain card border update** — (#8301). CSS-only, verify compatibility.

### Panel
- [ ] 🔧 **Updated for Compass usage** — (#8303, #12372). Panel gained compass-related features. Evaluate impact.

### Page
- [ ] 🔧 **Glass mode support for sticky sections** — (#8345, #12293). Add glass styling support.
- [ ] 🔧 **Dynamic sticky section support** — (#12409). New sticky behavior for page sections.
- [ ] 🔧 **Responsive docked nav support** — (#12327). Add support for docked navigation in page layout.

### NotificationBadge
- [ ] 🔧 **Plain variant** — (#12139). Add `plain()` support.

### TreeView
- [ ] 🔧 **Disabled visual appearance** — (#8030, #12140). Already implemented in Java (`TreeViewItem.disabled()`), but verify the CSS class `.pf-m-disabled` on `<li>` matches new PatternFly behavior.

### MenuToggle
- [ ] 🔧 **Form styling support** — (#12326). Add styling for use within forms.

### ClipboardCopy
- [ ] 🔧 **Text input callbacks and props** — (#12180). Add callback support for text input changes.

### CalendarMonth
- [ ] 🔧 **Select `appendTo` passthrough** — (#12391). Add container option for select dropdown.

### Label
- [ ] 🔧 **`LabelColor` and `LabelStatus` enums** — (#12338). Add typed enums if not already present.
- [ ] 🔧 **Render add-variant as button** — (#12192). Verify add-label variant renders as `<button>`.

### TextInputGroup
- [ ] 🔧 **`default` as `validated` option** — (#12349). Add `default` to validation status options.

### Radio / Checkbox
- [ ] 🔧 **`aria-describedBy` support** — (#12042). Add `ariaDescribedBy()` method.

### Dropdown
- [ ] 🔧 **Optional container with `ouiaId`** — (#12022). Add OUIA ID support for dropdown container.

### LoginPage
- [ ] 🔧 **Brand props passthrough, optional brand** — (#12194). Make brand optional, allow brand prop forwarding.

---

## 4 — Icon System Changes

⚠️ This is a significant cross-cutting change. PatternFly 6.5 systematically replaces FontAwesome icons with Red Hat brand icons.

- [x] ⚠️ **Icon set swapping support** — (#8123, #12245). Added rhUi, rhMicrons, rhStandard icon sets via `rhIcons.mjs` adapter and updated `generate.mjs`. All components updated to use RH icons.
- [x] ⚠️ **Close icon → RH micron close** — (#8174, #12283). All `fas.times` → `rhUi.close` across 10 component files.
- [x] ⚠️ **Caret icons → RH micron carets** — (#8176, #12298). All `fas.angle*`/`fas.caretDown` → `rhUi.caret*` across 17 component files.
- [x] ⚠️ **Status icons → RH icons** — (#8179, #12291). Updated `Severity.java` and `ValidationStatus.java` enums to use rhUi status icons.
- [x] 🔧 **Cog → RH settings icon** — (#12345). No cog/settings icon usage found in components (not applicable).
- [x] 🔧 **Multiple FA → RH brand replacements** — Star, PlusCircle, QuestionCircle, ExternalLink, Blueprint, etc. (#12366-#12379). All FA icon usages in components audited and replaced with RH equivalents.
- [x] 🔧 **RH-standard icon styling** — New `.pf-m-rh-standard` styling applied to icons by default with opt-out (#8280, #12320). CSS-only, no Java changes needed.
- [x] 🔧 **React icons updated to static SVGs** — (#12154). Java icon generation updated via `rhIcons.mjs` adapter to handle new SVG icon format including multi-path flattening.
- [x] 🔧 **Update `@patternfly/react-icons` dependency** — Updated from 6.2.2 to 6.5.1 in `icons/package.json`.

---

## 5 — Bug Fixes to Verify / Port

These are fixes in PatternFly React that may also affect the Java implementation.

- [ ] 🔧 **DrawerPanelContent styles overriding** — (#12039). Check Java drawer panel styling.
- [ ] 🔧 **Nav horizontal overflow resizeObserver** — (#12070). Verify nav overflow handling.
- [ ] 🔧 **PageSidebar flash on non-mobile** — (#12040). Check sidebar initialization.
- [ ] 🔧 **ExpandableSection nested bug** — (#8009). Verify nested expandable sections work.
- [ ] 🔧 **TypeaheadSelect state sync** — (#12147). Check typeahead select synchronization.
- [ ] 🔧 **Wizard crash with hidden first sub-step** — (#12166). Verify wizard nav handles hidden sub-steps.
- [ ] 🔧 **FileUploadField empty DOM node** — (#12236). Don't render empty node when no file selected.
- [ ] 🔧 **DescriptionList `termWidth` token** — (#12253). Use correct design token.
- [ ] 🔧 **Popper null/connected checks** — (#12284). Add null checks for document in popper.
- [ ] 🔧 **Menu drilled-in root height** — (#12294). Fix initially drilled-in root menu height.
- [ ] 🔧 **CodeEditor focus loss** — (#12212). Prevent focus loss on code editor interactions.
- [ ] 🔧 **Toolbar filter null exception** — (#12352). Fix null handling in toolbar filters.
- [ ] 🔧 **DualListSelector accessible names** — (#8194). Verify buttons have accessible names.
- [ ] 🔧 **NotificationDrawer spacing** — (#8085). Verify spacing between header actions.
- [ ] 🔧 **NotificationDrawer read/unread layout shift** — (#8134). Prevent layout shift when marking items.
- [ ] 🔧 **Form required asterisk orphaning** — (#11961). Keep asterisk from orphaning on line break.

---

## 6 — Breaking / Removal

- [ ] ⚠️ **Menu `disableHover` removed** — (#12064). Check if PatternFly Java has this prop and remove it.
- [ ] ⚠️ **Table uses PF check/radio instead of native** — (#12045). Table select columns now use PatternFly checkbox/radio components instead of native HTML. Verify Java implementation.
- [ ] ⚠️ **CSS rename: `no-plain` → `no-plain-on-glass`** — (#8249). If any Java code references the old `no-plain` modifier, update it.

---

## 7 — Design Token Updates

- [x] 🔧 **Token updates from Figma** — (#8097, #8237, #8407). Updated `@patternfly/react-tokens` from 6.4.0 to 6.5.1; Token.java regenerated (1,014 → 1,072 tokens).
- [x] 🔧 **Sticky column background token** — (#8332). Included in the react-tokens 6.5.1 update.
- [x] 🔧 **Unified theme tokens applied** to Card, Nav, ToggleGroup, Button, NotificationBadge, JumpLinks, Progress, Breadcrumbs, Table, ClipboardCopy, Menu/MenuToggle. CSS-only changes — no markup impact confirmed.

---

## 8 — Out of Scope / Defer

These items are likely not relevant for PatternFly Java or should be deferred:

- **Compass component** — Beta, AI/chatbot-specific layout. Defer unless needed.
- **Docked Navigation** — New layout paradigm. Defer to a separate effort.
- **Hero component** — Beta. Defer unless needed.
- **ChatBot features** — Not part of core PatternFly Java scope.
- **PatternFly MCP Server / CLI / ai-helpers** — Tooling, not component library.
- **react-charts high contrast** — Charts module is separate in Java.
- **DragDropSort / DragDropContainer fixes** — Verify if drag-drop is implemented in Java.
- **NextJS hydration fixes** — Not applicable to Java.
- **react-icons `sideEffects: false`** — Build tooling, not applicable.

---

## Suggested Work Order

1. **Icon system** (section 4) — Cross-cutting, affects many components
2. **Theming/glass infrastructure** (section 1) — Enables glass modifiers on components
3. **New modifiers on existing components** (section 3) — Bulk of the work
4. **New sub-components** (CardDescription) (section 2)
5. **Bug fixes** (section 5) — Verify and port as needed
6. **Breaking changes** (section 6) — Must address
7. **Token updates** (section 7) — If tokens are auto-generated, re-run generator
8. **New components** (section 2) — Hero, Compass, DockedNav — decide and schedule separately
