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
- [x] 🔧 **Circle variant** — New `.pf-m-circle` modifier (#7922, #12092). Button now implements `Circle` modifier interface.
- [x] 🔧 **Plain variant** — New `.pf-m-plain` on button (#8305). Button already implements `Modifiers.Plain` — verified it applies correctly.

### ActionList
- [x] 🔧 **Vertical variant** — New `.pf-m-vertical` modifier (#7920, #12090). ActionList now implements `Vertical` modifier interface.

### Table
- [x] 🔧 **Plain variant** — New `isPlain` prop (#7925, #12112). Table now implements `Plain` modifier interface.
- [x] 🔧 **Container queries support** — (#8054). CSS-only, no markup changes needed.
- [ ] 🔧 **Dynamic sticky styling** — (#8321, #12348). New sticky behavior for table headers. Sticky cell support exists in CSS (`.pf-v6-c-table__sticky-cell`) but no Java builder methods yet. Showcase snippets marked as nyi().
- [x] 🔧 **Indeterminate checkbox for select-all header** — (#12411). Already implemented in `Table.select()` — sets `checkbox.indeterminate = true` for partial selection.

### DataList
- [x] 🔧 **Plain variant** — New `isPlain` prop (#7929, #12112). DataList now implements `Plain` modifier interface.
- [x] 🔧 **`isNoPlainOnGlass` prop** — (#12292). DataList now implements `NoPlainOnGlass` modifier interface.

### Tabs
- [ ] 🔧 **Nav variant** — New `.pf-m-nav` modifier (#7924, #12111). Add nav variant support. `Classes.nav` constant exists but no `nav()` method on Tabs yet. Note: PF CSS does not yet contain `.pf-m-nav` for Tabs.
- [ ] 🔧 **`tabListAriaLabel` prop** — (#12193). Current `ariaLabel()` applies to outer container, not the inner `role=tablist` element. Need a dedicated method for the tab list.
- [x] 🔧 **Updated `aria-selected` and label attributes** — (#7975). Already correctly implemented — `aria-selected` is set/updated on tab buttons in `Tab.select()`.

### Drawer
- [x] 🔧 **Pill variant** — New `.pf-m-pill` modifier (#7945, #12091). Drawer now implements `Pill` modifier interface.
- [x] 🔧 **Glass panel support** — `noGlass` / glass props (#7963, #12125, #12305). DrawerPanel now implements `Glass` and `NoPlainOnGlass` modifier interfaces.
- [x] 🔧 **Plain variant on DrawerSection** — (#8318). DrawerSection now implements `Plain` modifier interface.
- [x] 🔧 **`inert` attribute when closed** — (#12027). Added `inert` attribute toggle to `Drawer.collapse()`/`expand()` on the panel element.
- [x] 🔧 **Splitter restyled** — (#8198). CSS-only, no markup changes needed.

### Wizard
- [x] ⚠️ **Warning step status** — (#12041). `ValidationStatus.warning` exists with `warningFill` icon. `WizardStep.status()` correctly handles warning via `WizardNavItem`.
- [x] 🔧 **Plain styling** — (#8215, #12289). Wizard now implements `Plain` modifier interface.

### Progress
- [x] 🔧 **`hideStatusIcon` flag** — (#12038). Added `hideStatusIcon()` builder method that suppresses status icons.
- [x] 🔧 **Fixed danger icon** — (#7900, #12073). Fixed: changed `closeCircle()` → `errorFill()` for danger status to match PF 6.5 and `ValidationStatus.error`.

### ExpandableSection
- [x] 🔧 **Aria labeling props** — (#12071). Added `ariaLabel(String)` method that applies aria-label to the toggle button.
- [ ] 🔧 **Functional `toggleContent`** — (#12063). Toggle already supports `moreText`/`lessText` at construction, but no runtime update method exists.
- [ ] 🔧 **More control over toggle icon** — (#12051). Icon container is private; no public API to hide/replace/customize the toggle icon.

### Banner
- [x] 🔧 **Pill variant** — New `.pf-m-pill` modifier (#8353). Banner now implements `Pill` modifier interface.

### Accordion
- [x] 🔧 **`isPlain` and `isNoPlainOnGlass` props** — (#12288). Accordion now implements `Plain` and `NoPlainOnGlass` modifier interfaces.

### ToggleGroup
- [x] 🔧 **Full width variant** — `.pf-m-full-width` (#8326, #12374). ToggleGroup now implements `FullWidth` modifier interface.

### Pagination
- [ ] 🔧 **Dynamic sticky style** — (#8320, #12388). Pagination component does not exist yet. Defer.
- [ ] 🔧 **Plain variant** — (#8320, #12388). Pagination component does not exist yet. Defer.

### Toolbar
- [x] 🔧 **Dynamic sticky support** — (#8321, #12375). Already implements `Sticky` interface with `sticky()` and `sticky(boolean)` methods.
- [ ] 🔧 **Responsive height via breakpoints** — (#8295, #12347). Has `inset(Breakpoints<Inset>)` but no height breakpoint support yet.

### Card
- [x] 🔧 **`isGlass` prop** — (#12290). Card now implements `Glass` modifier interface.
- [x] ⚠️ **Card header wrap** — (#7897). `CardHeader` already has `.pf-v6-c-card__header-main` wrapper via `mainElement` used as `containerDelegate()`.
- [x] 🔧 **Clickable/selectable plain card border update** — (#8301). CSS-only, no markup changes needed.

### Panel
- [ ] 🔧 **Updated for Compass usage** — (#8303, #12372). Compass itself is deferred (section 8). Defer this too.

### Page
- [ ] 🔧 **Glass mode support for sticky sections** — (#8345, #12293). `Glass` modifier exists in core but not applied to `PageSection`. Need to add.
- [x] 🔧 **Dynamic sticky section support** — (#12409). Already implemented via `PageSectionBuilder.sticky(Breakpoints<Sticky>)`.
- [ ] 🔧 **Responsive docked nav support** — (#12327). Docked Navigation itself is deferred (section 8). Defer this too.

### NotificationBadge
- [x] 🔧 **Plain variant** — (#12139). NotificationBadge now implements `Plain` modifier interface.

### TreeView
- [x] 🔧 **Disabled visual appearance** — (#8030, #12140). Already implemented — `TreeViewItem` implements `Disabled` interface, applies `.pf-m-disabled` on `<li>` and disables child buttons/inputs.

### MenuToggle
- [ ] 🔧 **Form styling support** — (#12326). Add styling for use within forms.

### ClipboardCopy
- [ ] 🔧 **Text input callbacks and props** — (#12180). ClipboardCopy component does not exist yet. Defer.

### CalendarMonth
- [ ] 🔧 **Select `appendTo` passthrough** — (#12391). CalendarMonth component does not exist yet. Defer.

### Label
- [x] 🔧 **`LabelColor` and `LabelStatus` enums** — (#12338). Colors handled via existing `Color` enum; status via `Severity` enum with `status(Severity)` method.
- [ ] 🔧 **Render add-variant as button** — (#12192). No "add" variant exists in Label. Evaluate if needed.

### TextInputGroup
- [x] 🔧 **`default` as `validated` option** — (#12349). `ValidationStatus.default_` already exists with null modifier, supported by `Validatable` interface.

### Radio / Checkbox
- [x] 🔧 **`aria-describedBy` support** — (#12042). Added `ariaDescribedBy(String)` method to both Radio and Checkbox.

### Dropdown
- [x] 🔧 **Optional container with `ouiaId`** — (#12022). Full OUIA support already exists via `BaseComponent` → `OuiaSupport` with `ouiaId(String)`.

### LoginPage
- [ ] 🔧 **Brand props passthrough, optional brand** — (#12194). LoginPage component does not exist yet. Defer.

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

- [x] 🔧 **DrawerPanelContent styles overriding** — (#12039). Inline `overflow-anchor` style is intentional for bottom-drawer resize. Low risk, no change needed.
- [ ] 🔧 **Nav horizontal overflow resizeObserver** — (#12070). Known issue ("Horizontal navigation doesn't shrink!" TODO in Navigation.java). Needs ScrollButtons investigation.
- [x] 🔧 **PageSidebar flash on non-mobile** — (#12040). Java sidebar starts expanded by default — no flash issue.
- [x] 🔧 **ExpandableSection nested bug** — (#8009). Already handled — retry mechanism with 10 attempts and explicit detached-mode support with null checks.
- [x] 🔧 **TypeaheadSelect state sync** — (#12147). N/A — TypeaheadSelect component does not exist in Java implementation.
- [x] 🔧 **Wizard crash with hidden first sub-step** — (#12166). Not affected — Java adds steps sequentially and `select()` checks `!step.disabled`, so the first enabled step is auto-selected. `nextEnabledStep()`/`previousEnabledStep()` already null-safe.
- [x] 🔧 **FileUploadField empty DOM node** — (#12236). N/A — FileUpload component does not exist in Java implementation.
- [x] 🔧 **DescriptionList `termWidth` token** — (#12253). N/A — DescriptionList component does not exist in Java implementation.
- [x] 🔧 **Popper null/connected checks** — (#12284). Popper `contains()` checks are DOM-level and handle edge cases. Low risk, no change needed.
- [x] 🔧 **Menu drilled-in root height** — (#12294). N/A — Java Menu does not support drill-down menus.
- [x] 🔧 **CodeEditor focus loss** — (#12212). CodeEditor extension is minimal with no focus management. Low risk, no change needed.
- [x] 🔧 **Toolbar filter null exception** — (#12352). `failSafeLabelGroup()` has proper null guards with lazy initialization. No change needed.
- [x] 🔧 **DualListSelector accessible names** — (#8194). N/A — DualListSelector component does not exist in Java implementation.
- [x] 🔧 **NotificationDrawer spacing** — (#8085). CSS-only concern — header action structure uses correct PF CSS classes.
- [x] 🔧 **NotificationDrawer read/unread layout shift** — (#8134). CSS-only concern — no read/unread state handling in Java that would cause layout shift.
- [x] 🔧 **Form required asterisk orphaning** — (#11961). Fixed: moved required asterisk `<span>` inside `textElement` (`.pf-v6-c-form__label-text`) instead of appending to `labelElement`, preventing line-break separation.

---

## 6 — Breaking / Removal

- [x] ⚠️ **Menu `disableHover` removed** — (#12064). Not implemented in PatternFly Java — no action needed.
- [x] ⚠️ **Table uses PF check/radio instead of native** — (#12045). Already using PF `Checkbox` components in `Td.java` and `Th.java`, not native HTML inputs.
- [x] ⚠️ **CSS rename: `no-plain` → `no-plain-on-glass`** — (#8249). Already using correct `noPlainOnGlass` constant and `NoPlainOnGlass` modifier interface.

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
