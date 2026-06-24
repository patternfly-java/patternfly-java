---
id: building
title: Building
---

# Building

This page covers how to build PatternFly Java locally, explains the Maven profiles and Node scripts, and describes the development workflow for the showcase.

## Prerequisites

| Tool | Version | Notes |
|------|---------|-------|
| Java | 21+ | Required for compilation |
| Maven | 3.9.9+ | Maven Wrapper (`mvnw`) included |
| Node | 24+ | For showcase and markdown processing |
| pnpm | 11+ | Installed via corepack (`corepack enable`) |

## Quick Start

```bash
# Full build (tests, javadoc)
mvn clean verify

# Quick build (skip tests, javadoc, J2CL)
mvn verify -Dquickly

# Format sources (editorconfig, imports, license headers)
./format.sh

# Validate sources (enforcer, checkstyle, editorconfig, imports, license)
./check.sh
```

## Modules

The project is organized into these modules:

| Module | Description |
|--------|-------------|
| **bom** | Bill of Materials (separate reactor, built first) |
| **build-config** | Build configuration (checkstyle rules, license headers) |
| **code-parent** | Parent POM for code modules |
| **core** | Core classes, handlers, styles, utilities |
| **components** | All UI components (50+ component packages) |
| **layouts** | Page layouts (Page, Sidebar, etc.) |
| **icons** | Icon sets (FontAwesome, PatternFly, Red Hat icons) |
| **tokens** | PatternFly design tokens as enum constants |
| **charts** | Chart web components wrapper — standalone NPM package (`@patternfly-java/charts`), built and published independently with pnpm, not part of the Maven build lifecycle |
| **extensions/codeeditor** | Code editor extension |
| **extensions/finder** | Finder extension |
| **gwt** | GWT compilation target support |
| **j2cl** | J2CL compilation target support |
| **showcase** | Interactive demo website (activated via `-P showcase`) |
| **snippet-tests** | Build-time validation of inline JavaDoc code snippets (activated via `-P check`, not deployed) |
| **apidoc** | API documentation aggregation (activated via `-P apidoc`) |

The BOM lives in a separate Maven reactor and must be installed before building the main project. All build scripts and CI workflows handle this automatically.

## Maven Profiles

### Profiles

| Profile | Activation | Purpose |
|---------|-----------|---------|
| `format` | `-P format` | Auto-format sources: editorconfig, import sorting, license headers |
| `check` | `-P check` | Validate sources: enforcer, checkstyle, editorconfig, import sorting, license headers, snippet validation |
| `showcase` | `-P showcase` | Include the showcase module in the build |
| `quick-build` | `-Dquickly` | Skip tests, javadoc, and integration tests |
| `skip-j2cl` | `-DskipJ2CL` | Disable J2CL compilation (showcase only) |
| `skip-j2cl-quickly` | `-Dquickly` | Also disables J2CL compilation when using quick build (showcase only) |
| `prod` | `-P prod` | Production build: advanced J2CL optimizations, Vite production build |
| `apidoc` | `-P apidoc` | Include the API documentation module |
| `release` | `-P release` | Attach sources/javadoc, GPG sign, publish to Maven Central |

Profiles activated with `-P` are explicit profiles. Profiles activated with `-D` are triggered by setting a system property — Maven activates them automatically when the property is present.

### Properties

| Property | Set by | Effect |
|----------|--------|--------|
| `quickly` | `-Dquickly` | Activates `quick-build` and `skip-j2cl-quickly` profiles |
| `skipJ2CL` | `-DskipJ2CL` | Activates `skip-j2cl` profile (showcase only) |
| `skipTests` | `-DskipTests` | Skip unit tests (standard Maven property) |
| `skipITs` | `-DskipITs` | Skip integration tests |
| `maven.javadoc.skip` | `-Dmaven.javadoc.skip` | Skip javadoc generation |

### Example Calls

```bash
# Full build (tests, javadoc — no showcase)
mvn clean verify

# Quick build (skip tests, javadoc, integration tests — no showcase)
mvn verify -Dquickly

# Build including showcase (with J2CL compilation)
mvn verify -P showcase

# Quick build including showcase (skip tests, javadoc, J2CL)
mvn verify -Dquickly -P showcase

# Build showcase but skip only J2CL
mvn verify -DskipJ2CL -P showcase

# Production showcase build (advanced J2CL optimizations, Vite production build)
mvn clean package -P showcase,prod

# Format and validate sources (including showcase)
./format.sh
./check.sh
```

## Shell Scripts

| Script | Purpose |
|--------|---------|
| `format.sh` | Shortcut for `mvn process-sources -P format,showcase` |
| `check.sh` | Shortcut for `mvn test -P check,showcase` |
| `release.sh` | Orchestrate a release (see [Releasing](/releasing)) |
| `unrelease.sh` | Roll back a failed release (see [Releasing](/releasing)) |
| `versionBump.sh` | Bump version across all POMs and NPM packages |
| `apidoc.sh` | Generate API documentation locally |
| `depgraph.sh` | Generate dependency graph (requires Graphviz) |

## Node/pnpm Scripts

The showcase module uses Node for markdown processing, CSS bundling, and local development. Scripts are defined in `showcase/package.json`:

| Script | Command | Purpose |
|--------|---------|---------|
| `code` | `node code.mjs` | Extract `@code-start`/`@code-end` snippets from showcase Java sources into a generated `Code.java` class |
| `markdown` | `node markdown.mjs` | Process `showcase/markdown/*.md` into JSON files with syntax highlighting and table of contents |
| `watch` | `vite` | Start Vite dev server for CSS/HTML hot reloading |
| `prod` | `vite build` | Build optimized production bundle |
| `http-server` | `http-server target/showcase --ssl` | Serve the built showcase locally with HTTPS |
| `audit:fix` | `node audit.mjs` | Suppress security advisories from `@patternfly/documentation-framework` transitive dependencies and dismiss the corresponding Dependabot alerts (see [Security Advisories](#security-advisories) below) |
| `images:clean` | `rm -rf src/web/images/*` | Remove all downloaded component images |
| `images:download` | `node images.mjs` | Download component images from the PatternFly website |

## Security Advisories

The showcase depends on `@patternfly/documentation-framework` for its CSS styles (layout chrome, side navigation, table of contents, example blocks, etc.). This package pulls in a large transitive dependency tree including React, Monaco, Babel, webpack-dev-server, and others — all of which regularly trigger security advisories.

**We only import CSS files from this package.** None of its JavaScript code paths (template compilation, code editor, HTTP clients, dev server) are executed at build time or runtime. The vulnerable code is never reached, so these advisories are safe to suppress.

Suppression is handled in two places:

- **`pnpm-workspace.yaml`** — `auditConfig.ignoreGhsas` silences `pnpm audit`, and `overrides` pins patched versions where possible
- **GitHub Dependabot** — alerts are dismissed with reason "not_used"

When new advisories appear (after dependency updates or new CVE disclosures), run:

```bash
cd showcase && pnpm run audit:fix
```

This adds new GHSA IDs to the ignore list and dismisses any open Dependabot alerts in a single step.

## Showcase Development

Developing the showcase requires two processes running in parallel:

### 1. J2CL Watch Mode

Compiles Java to JavaScript and watches for changes:

```bash
mvn j2cl:watch -P showcase
```

This runs incremental J2CL compilation. Output goes to `showcase/target/showcase/`.

### 2. Vite Dev Server

Serves CSS, HTML, and static assets with hot module replacement:

```bash
cd showcase && pnpm run watch
```

### Markdown Pipeline

The `markdown` script recursively walks `showcase/markdown/` and transforms `.md` files into JSON:

1. Parses markdown with remark (GFM + frontmatter support)
2. Extracts YAML frontmatter (`id`, `title`, `order`)
3. Generates a table of contents from h2/h3 headings
4. Converts to HTML with rehype
5. Adds slug IDs and autolinks to headings
6. Applies PatternFly CSS classes to headings
7. Syntax-highlights code blocks (Java, XML, JavaScript, JSON, HTML, CSS, Bash)
8. Writes JSON to `showcase/src/web/markdown/`, preserving the directory structure
9. Generates `showcase/src/web/markdown/manifest.json` with the navigation tree

The Vite dev server watches the `markdown/` directory for changes, additions, and deletions (`.md` and `.yaml` files) and regenerates JSON automatically. During a Maven `package` build, `pnpm run markdown` runs automatically in the `prepare-package` phase.

See the [Documentation](/developer/documentation) page for details on the directory structure, frontmatter fields, and folder conventions.

### Full Showcase Build

To build the production showcase (e.g., for deployment):

```bash
mvn clean package -P showcase,prod
```

This runs the complete pipeline: J2CL compilation with advanced optimizations, markdown processing, and Vite production build. The output is a static site in `showcase/target/showcase/`.
