---
title: PatternFly Java Lint Summary
last_updated: 2026-06-01
---

# PF Lint Summary

Tracks which components have been linted with `/pf-lint`, what was found, and whether issues were fixed.

| Component | Date | Files | Errors | Warnings | Fixed | Status |
|-----------|------|-------|--------|----------|-------|--------|
| accordion | 2026-06-01 | 6 | 0 | 0 | — | clean |
| alert | 2026-05-30 | 7 | 4 | 3 | all | clean |
| avatar | 2026-05-30 | 2 | 0 | 0 | — | clean |
| backdrop | 2026-05-30 | 2 | 0 | 1 | all | clean |
| backtotop | 2026-05-30 | 2 | 1 | 1 | all | clean |
| badge | 2026-05-30 | 2 | 0 | 0 | — | clean |
| banner | 2026-05-30 | 2 | 0 | 0 | — | clean |
| brand | 2026-05-30 | 2 | 0 | 0 | — | clean |
| breadcrumb | 2026-05-30 | 4 | 1 | 0 | all | clean |
| button | 2026-05-30 | 2 | 0 | 0 | — | clean |
| card | 2026-05-30 | 10 | 1 | 0 | all | clean |
| codeblock | 2026-06-01 | 6 | 3 | 0 | all | clean |
| content | 2026-06-01 | 3 | 0 | 0 | — | clean |
| divider | 2026-06-01 | 3 | 0 | 0 | — | clean |
| drawer | 2026-06-01 | 11 | 1 | 0 | all | clean |
| emptystate | 2026-06-01 | 6 | 4 | 0 | all | clean |
| expandable | 2026-06-01 | 5 | 2 | 0 | all | clean |
| form | 2026-06-01 | 30 | 17 | 0 | all | clean |
| help | 2026-06-01 | 4 | 1 | 0 | all | clean |
| hint | 2026-06-01 | 7 | 4 | 0 | all | clean |
| icon | 2026-06-01 | 3 | 0 | 0 | — | clean |
| inputgroup | 2026-06-01 | 5 | 2 | 0 | all | clean |
| jumplinks | 2026-06-01 | 5 | 2 | 0 | all | clean |
| label | 2026-06-01 | 5 | 2 | 0 | all | clean |
| list | 2026-06-01 | 24 | 14 | 0 | all | clean |
| menu | 2026-06-01 | 42 | 9 | 0 | all | clean |
| modal | 2026-06-01 | 8 | 5 | 0 | all | clean |
| navigation | 2026-06-01 | 8 | 4 | 0 | all | clean |
| notification | 2026-06-01 | 9 | 7 | 0 | all | clean |
| numberinput | 2026-06-01 | 3 | 0 | 0 | — | clean |
| page | 2026-06-01 | 22 | 2 | 0 | all | clean |
| panel | 2026-06-01 | 6 | 3 | 0 | all | clean |
| popover | 2026-06-01 | 11 | 6 | 0 | all | clean |
| progress | 2026-06-01 | 4 | 0 | 0 | — | clean |
| progressstepper | 2026-06-01 | 4 | 0 | 0 | — | clean |
| skeleton | 2026-06-01 | 3 | 0 | 0 | — | clean |
| skiptocontent | 2026-06-01 | 2 | 0 | 0 | — | clean |
| slider | 2026-06-01 | 7 | 3 | 0 | all | clean |
| spinner | 2026-06-01 | 2 | 0 | 0 | — | clean |
| switch_ | 2026-06-01 | 2 | 0 | 0 | — | clean |
| table | 2026-06-01 | 15 | 10 | 0 | all | clean |
| tabs | 2026-06-01 | 8 | 3 | 0 | all | clean |
| textinputgroup | 2026-06-01 | 9 | 4 | 0 | all | clean |
| timestamp | 2026-06-01 | 7 | 2 | 0 | all | clean |
| title | 2026-06-01 | 2 | 0 | 0 | — | clean |
| togglegroup | 2026-06-01 | 4 | 1 | 0 | all | clean |
| toolbar | 2026-06-01 | 14 | 2 | 0 | all | clean |
| tooltip | 2026-06-01 | 5 | 0 | 0 | — | clean |
| tree | 2026-06-01 | 5 | 1 | 0 | all | clean |
| truncate | 2026-06-01 | 3 | 0 | 0 | — | clean |
| wizard | 2026-06-01 | 20 | 9 | 0 | all | clean |

## Fixed Issues Log

### alert (2026-05-30)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | Alert.java | ERROR | `decl-implements-format` | `Expandable` and `Attachable` on same line |
| 2 | Alert.java | WARN | `decl-implements-order` | `Attachable` not first alphabetically |
| 3 | Alert.java | WARN | `field-order` | `timeoutHandle` (private non-final) before private final fields |
| 4 | Alert.java | WARN | `store-component` | Missing `storeComponent()` in constructor |
| 5 | AlertDescription.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 6 | AlertActionGroup.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 7 | AlertGroup.java | ERROR | `section-instance-content` | Static field `toast` in factory section |

### backdrop (2026-05-30)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | package-info.java | WARN | `doc-pkg-usage` | Missing usage snippet |

### backtotop (2026-05-30)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | BackToTop.java | ERROR | `decl-implements-format` | `implements` on separate line, interfaces not on own lines |
| 2 | BackToTop.java | WARN | `decl-implements-order` | `Attachable` not first alphabetically |

### breadcrumb (2026-05-30)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | BreadcrumbItem.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### card (2026-05-30)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | CardActions.java | ERROR | `decl-implements-format` | `implements` on separate line from `extends` |

### codeblock (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | CodeBlockAction.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | CodeBlockActions.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 3 | CodeBlockHeader.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### drawer (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | DrawerCloseButton.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### emptystate (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | EmptyStateActions.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | EmptyStateBody.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 3 | EmptyStateFooter.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 4 | EmptyStateFooter.java | ERROR | `name-subid` | `SUB_COMPONENT_ID = "esb"` duplicated EmptyStateBody; changed to `"esf"` |

### expandable (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | ExpandableSectionContent.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | ExpandableSectionToggle.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### form (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | CheckboxBody.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | CheckboxDescription.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 3 | FormActionGroup.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 4 | FormAlert.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 5 | FormControl.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 6 | FormFieldGroup.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 7 | FormFieldGroupBody.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 8 | FormFieldGroupHeader.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 9 | FormGroup.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 10 | FormGroupControl.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 11 | FormGroupLabel.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 12 | FormSection.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 13 | FormSelectOption.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 14 | FormSelectOption.java | ERROR | `ctor-visibility` | Constructor was `public`; changed to package-private |
| 15 | FormSelectOptionGroup.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 16 | RadioBody.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 17 | RadioDescription.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### help (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | HelperTextItem.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### hint (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | HintActions.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | HintBody.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 3 | HintFooter.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 4 | HintTitle.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### inputgroup (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | InputGroupItem.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | InputGroupText.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### jumplinks (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | JumpLinksItem.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | JumpLinksList.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### label (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | LabelGroup.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | LabelGroup.java | ERROR | `doc-class-see` | Missing `@see` link to PatternFly docs |

### list (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | ActionListGroup.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | ActionListItem.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 3 | DataListAction.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 4 | DataListCell.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 5 | DataListCell.java | ERROR | `name-subid` | `SUB_COMPONENT_ID = "dlc"` duplicated DataListExpandableContent; changed to `"dlcl"` |
| 6 | DataListExpandableContent.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 7 | DataListItem.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 8 | DescriptionListDescription.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 9 | DescriptionListDescription.java | ERROR | `name-subid` | `SUB_COMPONENT_ID = "dlg"` duplicated DescriptionListGroup; changed to `"dld"` |
| 10 | DescriptionListGroup.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 11 | DescriptionListTerm.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 12 | DescriptionListTerm.java | ERROR | `name-subid` | `SUB_COMPONENT_ID = "dlg"` duplicated DescriptionListGroup; changed to `"dlt"` |
| 13 | ListItem.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 14 | SimpleListGroup.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 15 | SimpleListItem.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### menu (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | MenuContent.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | MenuFooter.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 3 | MenuGroup.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 4 | MenuHeader.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 5 | MenuItem.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 6 | MenuItemAction.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 7 | MenuList.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 8 | MenuSearch.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 9 | MenuToggleAction.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### modal (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | ModalBody.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | ModalFooter.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 3 | ModalHeader.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 4 | ModalHeaderDescription.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 5 | ModalHeaderTitle.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### navigation (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | ExpandableNavigationGroup.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | NavigationGroup.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 3 | NavigationItem.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 4 | NavigationLinkText.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### notification (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | NotificationDrawer.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | NotificationDrawer.java | ERROR | `doc-class-see` | Missing `@see` link to PatternFly docs |
| 3 | NotificationDrawerBody.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 4 | NotificationDrawerHeader.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 5 | NotificationDrawerItem.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 6 | NotificationDrawerItemBody.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 7 | NotificationDrawerList.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### page (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | MastheadBrand.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | MastheadLogo.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### panel (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | PanelFooter.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | PanelHeader.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 3 | PanelMain.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### popover (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | PopoverBody.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | PopoverFooter.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 3 | PopoverHeader.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 4 | PopperPopoverBody.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 5 | PopperPopoverFooter.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 6 | PopperPopoverHeader.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### slider (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | SliderActions.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | SliderStep.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 3 | SliderSteps.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### table (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | Cell.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | TableCaption.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 3 | TableCaption.java | ERROR | `name-subid` | `SUB_COMPONENT_ID = "tc"` duplicated TitleCell; kept as `"tc"` |
| 4 | TableText.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 5 | Tbody.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 6 | Td.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 7 | Th.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 8 | Thead.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 9 | TitleCell.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 10 | TitleCell.java | ERROR | `name-subid` | `SUB_COMPONENT_ID = "tc"` duplicated TableCaption; changed to `"ttc"` |
| 11 | Tr.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### tabs (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | Tab.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | TabContent.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 3 | TabContentBody.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### textinputgroup (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | BaseFilterInput.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | BaseSearchInput.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 3 | BaseTextInputGroup.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 4 | TextInputGroupUtilities.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### timestamp (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | CustomFormat.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | LocaleOptions.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### togglegroup (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | ToggleGroupItem.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### toolbar (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | ToolbarFilterContent.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | ToolbarFilterLabelGroup.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### tree (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | TreeViewItem.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### wizard (2026-06-01)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | WizardContext.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 2 | WizardFooter.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 3 | WizardFooterButtons.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 4 | WizardHeader.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 5 | WizardHeaderDescription.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 6 | WizardHeaderTitle.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 7 | WizardNav.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 8 | WizardNavItem.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 9 | WizardStep.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
