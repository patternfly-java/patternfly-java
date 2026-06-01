# Scope Mapping Reference

## PascalCase to PFJ directory

When a PR scope uses PascalCase (e.g., `DataList`), convert to match PFJ directory names. PFJ directories use lowercase without hyphens for most components.

| PR Scope | PFJ Directory | Notes |
|----------|---------------|-------|
| `Accordion` | `accordion` | |
| `ActionList` | — | Not in PFJ |
| `Alert` | `alert` | |
| `Avatar` | `avatar` | |
| `Backdrop` | `backdrop` | |
| `BackToTop` | `backtotop` | |
| `Badge` | `badge` | |
| `Banner` | `banner` | |
| `Brand` | `brand` | |
| `Breadcrumb` | `breadcrumb` | |
| `Button` | `button` | |
| `Card` | `card` | |
| `CardDescription` | `card` | Sub-component of card |
| `Checkbox` | `form` | Part of form module |
| `CodeBlock` | `codeblock` | |
| `CodeEditor` | — | Extension, not core component |
| `Content` | `content` | |
| `DataList` | — | Not in PFJ (no `data-list` or `datalist` dir) |
| `Divider` | `divider` | |
| `Drawer` | `drawer` | |
| `DrawerPanelContent` | `drawer` | Sub-component of drawer |
| `Dropdown` | `menu` | PFJ uses menu for dropdown |
| `EmptyState` | `emptystate` | |
| `ExpandableSection` | `expandable` | |
| `Form` | `form` | |
| `Hint` | `hint` | |
| `Icon` | `icon` | |
| `InputGroup` | `inputgroup` | |
| `JumpLinks` | `jumplinks` | |
| `Label` | `label` | |
| `List` | `list` | |
| `Masthead` | `page` | Part of page module |
| `Menu` | `menu` | |
| `MenuToggle` | `menu` | Sub-component of menu |
| `Modal` | `modal` | |
| `Nav` | `navigation` | PFJ uses `navigation` not `nav` |
| `Navigation` | `navigation` | |
| `Notification` | `notification` | |
| `NumberInput` | `numberinput` | |
| `Page` | `page` | |
| `PageSidebar` | `page` | Sub-component of page |
| `Pagination` | — | Not in PFJ |
| `Panel` | `panel` | |
| `Popover` | `popover` | |
| `Progress` | `progress` | |
| `ProgressStepper` | `progressstepper` | |
| `Radio` | `form` | Part of form module |
| `SearchInput` | `textinputgroup` | PFJ uses textinputgroup |
| `Select` | `menu` | PFJ uses menu for select |
| `Skeleton` | `skeleton` | |
| `SkipToContent` | `skiptocontent` | |
| `Slider` | `slider` | |
| `Spinner` | `spinner` | |
| `Switch` | `switch_` | Note trailing underscore |
| `Table` | `table` | |
| `Tabs` | `tabs` | |
| `TextArea` | `form` | Part of form module |
| `TextInput` | `form` | Part of form module |
| `TextInputGroup` | `textinputgroup` | |
| `Tile` | — | Deprecated in PF6 |
| `Timestamp` | `timestamp` | |
| `Title` | `title` | |
| `ToggleGroup` | `togglegroup` | |
| `Toolbar` | `toolbar` | |
| `Tooltip` | `tooltip` | |
| `TreeView` | `tree` | PFJ uses `tree` not `treeview` |
| `Truncate` | `truncate` | |
| `Wizard` | `wizard` | |

For scopes not in this table, normalize by: lowercase the entire scope, remove hyphens and spaces, and check if a PFJ directory matches.

## Token and style scopes

These scopes map to PFJ's `tokens` module:

- `tokens`, `react-tokens`, `styles`, `react-styles`
- `Common` (when title mentions token/style/theme)
- `glass`, `theme`

Also match PR titles containing: `token`, `CSS variable`, `design token`, `theme`

## Icon scopes

These scopes map to PFJ's `icons` module:

- `icons`, `react-icons`

Also match PR titles containing: `icon`, `iconography`, `icon set`

Current PFJ icon sets: Fab, Far, Fas, Patternfly, RhMicrons, RhStandard, RhUi

## Discarded scopes

PRs with these scopes are never relevant to PFJ — they are React-specific packages or unrelated extensions:

- `react-topology`, `topology`
- `chatbot`, `virtual-assistant`
- `quickstarts`, `react-quickstarts`
- `react-templates`
- `react-console`, `console`
- `react-virtualized-extension`
- `react-catalog-view`, `react-catalog-view-extension`
- `react-component-groups`
- `react-data-view`, `data-view`
- `react-log-viewer`, `log-viewer`
- `react-user-feedback`, `user-feedback`
- `react-drag-drop`, `drag-drop`
- `react-docs`, `documentation-framework`
- `deps`, `ci`, `build`
