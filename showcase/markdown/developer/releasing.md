---
id: releasing
title: Releasing
---

# Releasing

This page describes how to create a new PatternFly Java release, what the release workflow does, and how to roll back a failed release.

## Prerequisites

Before releasing, ensure:

- You are on the `main` branch with no uncommitted changes
- The [Verify Codebase](https://github.com/patternfly-java/patternfly-java/actions/workflows/verify.yml) workflow is green
- The `CHANGELOG.md` has entries in the `Unreleased` section
- You have push access to the repository

## Creating a Release

Run the release script with the release version and the next snapshot version:

```bash
./release.sh <release-version> <next-version>
```

For example:

```bash
./release.sh 1.0.0 1.1.0
```

The script performs these steps:

1. Bump the version to `1.0.0` across all POMs and NPM packages
2. Update `README.md` with the new version
3. Move changelog entries from `Unreleased` to the `1.0.0` section
4. Commit and push to `main`
5. Create and push the tag `v1.0.0`
6. Bump the version to `1.1.0-SNAPSHOT`
7. Commit and push to `main`

Pushing the `v*` tag triggers the [release workflow](https://github.com/patternfly-java/patternfly-java/actions/workflows/release.yml) on GitHub.

## Release Workflow

The `release.yml` workflow runs six jobs in sequence:

### 1. Deploy BOM

Builds and publishes the Bill of Materials to Maven Central with GPG signing.

### 2. Deploy Maven Artifacts

Builds the full project and publishes all modules to Maven Central with GPG signing. This is the main release artifact — the Java libraries that users depend on.

### 3. Publish NPM Packages

Publishes three NPM packages to the npm registry:

| Package | Source |
|---------|--------|
| `@patternfly-java/core` | `core/npm/` |
| `@patternfly-java/finder` | `extensions/finder/npm/` |
| `@patternfly-java/charts` | `charts/npm/` (built with pnpm before publishing) |

### 4. Publish Showcase

Builds the production showcase (`mvn -P showcase,prod package`) and deploys the static site to `patternfly-java/patternfly-java.github.io` (gh-pages).

### 5. Publish API Documentation

Generates Javadoc with dependency graphs (requires Graphviz) and deploys to `patternfly-java/apidocs` (gh-pages).

### 6. Create GitHub Release

Creates a GitHub Release from the tag. The release body is extracted from `CHANGELOG.md` using the changelog-reader action.

## Job Dependencies

```
deploy-bom
    └─► deploy-patternfly
            ├─► publish-npm
            │       └─► publish-showcase
            └─► release (GitHub Release)

publish-apidocs (runs independently)
```

The BOM must be published first because other modules depend on it. NPM packages must be published before the showcase because the charts module's NPM package is consumed during the showcase build.

## Version Management

The `versionBump.sh` script updates version strings across the project:

| File(s) | Updated by |
|---------|-----------|
| All `pom.xml` files | `mvn versions:set` |
| `bom/pom.xml` | `mvn versions:set` (separate reactor) |
| `showcase/src/doc/*.md` | `sed` replacement |
| `core/npm/package.json` | `npm version` |
| `charts/npm/package.json` | `npm version` |
| `extensions/finder/npm/package.json` | `npm version` |

The script is called by `release.sh` twice: once for the release version and once for the next snapshot version.

## What Gets Published

After a successful release, the following artifacts are available:

| Artifact | Location |
|----------|----------|
| Maven libraries | [Maven Central](https://central.sonatype.com/namespace/org.patternfly) |
| NPM packages | [npmjs.com/@patternfly-java](https://www.npmjs.com/org/patternfly-java) |
| Showcase website | [patternfly-java.github.io](https://patternfly-java.github.io) |
| API documentation | [patternfly-java.github.io/apidocs](https://patternfly-java.github.io/apidocs) |
| GitHub Release | [GitHub Releases](https://github.com/patternfly-java/patternfly-java/releases) |

## Rolling Back a Release

If a release fails (e.g., Maven Central deployment fails), use `unrelease.sh`:

```bash
./unrelease.sh <release-version>
```

For example:

```bash
./unrelease.sh 1.0.0
```

This script:

1. Deletes the tag `v1.0.0` locally and on the remote
2. Bumps the version back to `1.0.0-SNAPSHOT`
3. Commits and pushes to `main`

After running `unrelease.sh`, you must manually revert any changelog changes that were made by the release.
