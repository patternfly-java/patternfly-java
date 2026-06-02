---
id: ci-cd
title: CI/CD
---

# CI/CD

PatternFly Java uses GitHub Actions for continuous integration, snapshot publishing, documentation updates, and releases. All workflow files are in `.github/workflows/`.

## Workflow Overview

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| [verify.yml](#verify) | Push/PR to `main` | Validate the build |
| [snapshot.yml](#snapshot) | After verify succeeds | Publish snapshot artifacts |
| [publish-docs.yml](#publish-docs) | Push to `showcase/markdown/**` or manual | Update markdown documentation |
| [showcase.yml](#showcase) | Manual dispatch | Publish showcase website |
| [apidocs.yml](#apidocs) | Manual dispatch | Publish API documentation |
| [release.yml](#release) | Tag `v*` | Full release pipeline (see [Releasing](/releasing)) |

## Verify

**File:** `verify.yml`
**Trigger:** Push to `main`, pull requests targeting `main`

Validates the codebase by building all modules including the showcase, but skipping J2CL compilation for speed:

```bash
mvn install           # BOM (separate reactor)
mvn verify -P showcase -DskipJ2CL
```

This runs tests, javadoc generation, and all validation checks. It's the gatekeeper for every change.

## Snapshot

**File:** `snapshot.yml`
**Trigger:** Automatically after the "Verify Codebase" workflow completes

Publishes snapshot artifacts to Maven Central in two steps:

1. Deploy the BOM
2. Deploy all project modules

Both steps skip tests (already validated by verify) and authenticate against Maven Central using `CENTRAL_USERNAME` and `CENTRAL_PASSWORD` secrets.

## Publish Docs

**File:** `publish-docs.yml`
**Trigger:** Push to `showcase/markdown/**` or manual dispatch

Updates the showcase documentation without a full build:

1. Install Node dependencies in `showcase/`
2. Run `pnpm run markdown` to process markdown files into JSON
3. Copy the JSON files to the `patternfly-java/patternfly-java.github.io` repository (gh-pages branch)

This allows documentation changes to go live immediately, without rebuilding the entire showcase or waiting for a release.

## Showcase

**File:** `showcase.yml`
**Trigger:** Manual dispatch only

Builds and deploys the full showcase website:

1. Install NPM dependencies for charts
2. Build the showcase with production optimizations: `mvn -P showcase,prod package`
3. Deploy `showcase/target/showcase/` to `patternfly-java/patternfly-java.github.io` (gh-pages)

Use this to manually update the showcase between releases.

## API Docs

**File:** `apidocs.yml`
**Trigger:** Manual dispatch only

Generates and publishes API documentation:

1. Install Graphviz (for dependency graphs)
2. Build all modules
3. Generate dependency graph, copy doc files, sources, and demos
4. Run `javadoc:javadoc` in the `apidoc/` module
5. Deploy to `patternfly-java/apidocs` (gh-pages)

## Release

**File:** `release.yml`
**Trigger:** Git tags matching `v*`

Orchestrates the full release pipeline. This is covered in detail on the [Releasing](/releasing) page.

## Secrets

The following GitHub secrets are required by the CI/CD workflows:

| Secret | Used by | Purpose |
|--------|---------|---------|
| `CENTRAL_USERNAME` | snapshot, release | Maven Central authentication |
| `CENTRAL_PASSWORD` | snapshot, release | Maven Central authentication |
| `MAVEN_GPG_PRIVATE_KEY` | release | GPG signing of release artifacts |
| `MAVEN_GPG_PASSPHRASE` | release | GPG key passphrase |
| `PUBLISH_CONTENT` | publish-docs, showcase, apidocs, release | GitHub token for pushing to `patternfly-java.github.io` and `patternfly-java/apidocs` |
| `GITHUB_TOKEN` | release | Create GitHub Release (provided automatically) |
