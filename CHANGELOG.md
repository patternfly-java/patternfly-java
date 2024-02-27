# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Breadcrumb component (#27)
- Progress component (#81)
- Simple list component (#84)
- Skeleton component (#85)
- Toggle group component (#97)
- Truncate component (#101)

### Fixed

- Fix selection in navigation component
- Implement scrolling in horizontal navigation

## [0.1.4] - 2024-01-25

### Fixed

- Add missing externs for the Popper component

## [0.1.3] - 2024-01-25

### Added

#### Components

- Accordion component (#17)
- Back to top component (#21)
- Banner component (#25)
- Description list component (#39)
- Drawer component (#42)
- Empty state component (#44)
- Hint component (#56)
- Input group component (#59)
- List component (#62)
- Panel component (#77) - thanks @halkosajtarevic
- Slider component (#87)
- Switch component (#89)
- Tabs components (#91)

#### Layouts

- Bullseye layout (#118)
- Flex layout (#119)
- Flex layout (#122)
- Split layout (#123)

#### API

- [`Breakpoint`](https://patternfly-java.github.io/patternfly-java/org/patternfly/style/Breakpoint.html) and [`Breakpoints`](https://patternfly-java.github.io/patternfly-java/org/patternfly/style/Breakpoints.html) classes to manage responsive CSS modifiers.

### Fixed

- Min width for dropdown menus

## [0.1.2] - 2023-12-17

### Added

- Helper text component (#55)
- Form component (#49)
- Form control component (#50)
- Form select component (#51)
- Text area component (#53)
- Add support for responsive layout in various components
- Add the following interfaces to unify icon and text handling across components:
  - `WithIcon<E extends Element, B extends TypedBuilder<E, B>>`
  - `WithText<E extends Element, B extends TypedBuilder<E, B>>`
  - `WithIconAndText<E extends Element, B extends TypedBuilder<E, B>>`

### Changed

- Update `Grid` and `GridItem` to support responsive layout
- Replace `ComponentReference<C>` with `ComponentStore`
- Rename `Sidebar` to `PageSidebar` and turn it into a subcomponent of `Page`
- Move `Masthead` component to package `org.patternfly.component.page`
- Move style related classes to its own package `org.patternfly.style`

### Upgrades

- Bump Elemento to 1.2.11

## [0.1.1] - 2023-11-22

### Added

- Card component (#29)
- Label component (#61)
- Radio component (#53)
- Gallery layout (#120)
- Grid layout (#121)
- Classify and group log messages

### Changed

- Checkbox component: replace implicit standalone modifier with explicit method

### Removed

- Remove deprecated classes

## [0.1.0] - 2023-11-15

### Added

- Add J2CL support
- Avatar component (#20)
- Menu toggle component (#67)
- Dropdown component (#65)
- Add `ThirdParty.injectXXX()` methods to inject 3rd party dependencies

### Fixed

- Fix selection handler for checkbox menu items

## [0.0.7] - 2023-10-30

### Added

- Popover component (#80)

### Changed

- Refactor [popper.txt](https://popper.js.org/) integration

## [0.0.6] - 2023-10-25

### Added

- Tooltip component (#99)

## [0.0.5] - 2023-10-18

### Added

- Action list component (#18)
- Alert component (#19)
- Brand component (#26)
- Chip component (#30)
- Code editor (#33) (half done - w/o [Monaco editor](https://microsoft.github.io/monaco-editor/) integration)
- Sidebar component (#83)
- Text input group component (#93)
- Add `Closeable` interface and `CloseHandler`
- Add `Expandable` interface
- Add `Variable` and `VariableScope`

### Changed

- Move masthead, sidebar and skip to content components to its own packages
- Refactor `org.patternfly.core.WithProgress` interface
- Simplify `org.patternfly.style.Modifiers.*` interfaces
- Rename `org.patternfly.js` → `org.patternfly.dom`

## [0.0.4] - 2023-10-10

### Changed

- Refactor alert component factory methods

## [0.0.3] - 2023-10-10

### Added

- Code editor component (#33)

### Upgrades

- Bump Elemento to 1.2.2

## [0.0.2] - 2023-10-10

### Added

- Badge component (#24)
- Button component (#28)
- Checkbox component  (#48)
- Code block component (#32)
- Divider component (#40)
- Expandable section component (#45)
- Icon component (#57)
- Masthead component (#64)
- Menu component (#66)
- Navigation component (#70)
- Page component (#75)
- Text input component (#54)
- Skip to content component (#86)
- Spinner component (#88)
- Text content component (#92)
- Title component (#96)
- Stack layout (#124)

### Deprecated

- Marked old (PatternFly 4) components as deprecated

## [0.0.1] - 2023-10-05

This is the first public release of PatternFly Java 🍾🎉🎊🥳

Stay tuned for more to come...

<!--
## Template

### Added

- for new features

### Changed

- for changes in existing functionality

### Fixed

- for any bug fixes

### Security

- in case of vulnerabilities

### Deprecated

- for soon-to-be removed features

### Removed

- for now removed features

### Upgrades

- for dependency upgrades
-->
[Unreleased]: https://github.com/patternfly-java/patternfly-java/compare/v0.1.4...HEAD
[0.1.4]: https://github.com/patternfly-java/patternfly-java/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/patternfly-java/patternfly-java/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/patternfly-java/patternfly-java/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/patternfly-java/patternfly-java/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/patternfly-java/patternfly-java/compare/v0.0.7...v0.1.0
[0.0.7]: https://github.com/patternfly-java/patternfly-java/compare/v0.0.6...v0.0.7
[0.0.6]: https://github.com/patternfly-java/patternfly-java/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/patternfly-java/patternfly-java/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/patternfly-java/patternfly-java/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/patternfly-java/patternfly-java/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/patternfly-java/patternfly-java/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/patternfly-java/patternfly-java/compare/vTemplate...v0.0.1
