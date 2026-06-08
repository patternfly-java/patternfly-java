---
name: pf-update
description: >-
  Track PatternFly release changes and generate a prioritized work plan for
  updating PatternFly Java. This skill should be used when the user asks to
  "/pf-update", "check PF release", "what changed in PatternFly",
  "update PatternFly Java", "upgrade PatternFly Java", "PF changelog", "new PF version",
  "what's new in PatternFly", "check for PF updates", "PF release notes",
  "PF upgrade", "sync with PatternFly", or any request to analyze a
  PatternFly release for PFJ impact.
metadata:
  version: "0.1.0"
---

# /pf-update — PatternFly Release Update Tracker

Fetches PatternFly release changelogs from GitHub, classifies changes by relevance to PatternFly Java (PFJ), generates a prioritized work plan, writes a persistent report, and optionally creates GitHub issues.

Two phases: (1) discover what changed in a PF release, (2) translate changes into actionable PFJ tasks.

## Arguments

```
/pf-update [version | version-range]
```

**Parameters:**
- `[version]` (optional) — PF version to analyze (e.g., `6.5.0`)
- `[version-range]` (optional) — Two versions separated by `..` (e.g., `6.4.0..6.5.0`)
- No arguments — auto-detect by comparing `pom.xml` version against latest release

**Examples:**
```
/pf-update
/pf-update 6.5.0
/pf-update 6.4.0..6.5.0
```

---

## Workflow — Step 1: Parse Arguments & Resolve Versions

**Parse arguments:**
- If arg matches `X.Y.Z` → single version mode, set `TARGET_VERSION = X.Y.Z`
- If arg matches `X.Y.Z..A.B.C` → range mode, set `FROM_VERSION = X.Y.Z`, `TO_VERSION = A.B.C`
- If no args → auto-detect mode

**Read PFJ version:**
```bash
grep '<version.patternfly>' pom.xml | sed 's/.*>\(.*\)<.*/\1/'
```
Store as `PFJ_VERSION`.

**Auto-detect (no args):**
```bash
gh api repos/patternfly/patternfly/releases --per-page 25 --jq '[.[] | select(.tag_name | test("^v[0-9]+\\.[0-9]+\\.[0-9]+$")) | .tag_name][0]'
```
Note: Use this instead of `/releases/latest` because the latest release may have a non-standard tag like `patch-v*` or `prerelease-v*`. This finds the most recent release with a clean `vX.Y.Z` tag.

Strip the `v` prefix to get the version. Compare against `PFJ_VERSION`:
- If latest is newer → set `TARGET_VERSION` to the latest
- If same → print "PFJ is up to date with PF `<version>`" and stop

**Print:** "Analyzing PF `<TARGET_VERSION>` (PFJ currently at `<PFJ_VERSION>`)"

---

## Workflow — Step 2: Fetch Release Data

**For single version:**
```bash
gh api repos/patternfly/patternfly/releases/tags/v<TARGET_VERSION> --jq '.body'
gh api repos/patternfly/patternfly-react/releases/tags/v<TARGET_VERSION> --jq '.body'
```

**For version range:**
Fetch all releases from both repos. Note: `--paginate` with `--jq` outputs one JSON fragment per page, so use `[.[] | ...]` inside `--jq` and pipe through `jq -s 'add'` to flatten into a single array:
```bash
gh api repos/patternfly/patternfly/releases --paginate --jq '[.[] | select(.tag_name | test("^v")) | {tag_name, body}]' | jq -s 'add'
gh api repos/patternfly/patternfly-react/releases --paginate --jq '[.[] | select(.tag_name | test("^v")) | {tag_name, body}]' | jq -s 'add'
```
Filter to releases with tags between `v<FROM_VERSION>` (exclusive) and `v<TO_VERSION>` (inclusive) using semver comparison. Merge the PR lists from all matching releases.

**Handle missing releases:**
- If a release tag is not found in one repo, proceed with the other repo's data
- Print warning: "Release `v<VERSION>` not found in `<repo>`, using `<other repo>` only."
- If not found in either repo → error: "Release `v<VERSION>` not found. Check the version number."

**Parse PR entries:**
GitHub auto-generated release bodies list PRs as:
```
* <title> by @<author> in https://github.com/<org>/<repo>/pull/<number>
```

For each line matching this pattern, extract:
- `repo` — from the URL (`patternfly` or `patternfly-react`)
- `pr_number` — from the URL
- `title` — everything before ` by @`
- `author` — between `@` and ` in `
- `url` — the full PR URL

**Deduplicate** by `pr_number + repo` (a PR number is unique within a repo but the same number can exist in different repos).

Report: "Fetched N PRs from patternfly/patternfly and M PRs from patternfly/patternfly-react."

---

## Workflow — Step 3: Classify PRs

**Parse conventional commit prefix and scope from each PR title:**

Pattern: `<prefix>(<scope>): <description>` or `<prefix>: <description>` (no scope)

Examples:
- `feat(Button): added circle variant` → prefix: `feat`, scope: `Button`, description: `added circle variant`
- `fix(card): remove padding` → prefix: `fix`, scope: `card`, description: `remove padding`
- `chore(deps): bump playwright` → prefix: `chore`, scope: `deps`, description: `bump playwright`

**If no conventional commit prefix is found**, classify by keywords in the title:
- Title starts with or contains `add`, `create`, `added`, `new` → treat as `feat`
- Title starts with or contains `fix`, `fixed`, `update`, `updated` → treat as `fix`
- Title starts with or contains `breaking`, `BREAKING`, `remove`, `removed`, `deprecate` → treat as `breaking`
- Otherwise → `unclassified`

**Filter by prefix:**

| Prefix | Action |
|--------|--------|
| `feat` | Keep |
| `fix` | Keep |
| `breaking`, `BREAKING CHANGE` | Keep (high priority) |
| `techdebt` | Keep (treat as fix) |
| `chore` | Discard |
| `docs` | Discard |
| `ci` | Discard |
| `test` | Discard |
| `unclassified` | Keep in separate bucket |

Report: "Classified N PRs: X features, Y fixes, Z breaking, W unclassified, V discarded."

---

## Workflow — Step 4: Filter by Relevance & Detect New Items

Read `references/scope-mapping.md` for scope normalization rules, discarded scopes, and token/icon keywords.

**Normalize each PR scope:**
1. Check the explicit mapping table in `scope-mapping.md` first
2. If not found, lowercase the scope and check if it matches a PFJ component directory under `components/src/main/java/org/patternfly/component/`
3. If still not found, convert PascalCase to lowercase (e.g., `ExpandableSection` → `expandablesection`) and check again
4. If still not found, check token/icon scope lists

**Enumerate PFJ component directories:**
```bash
ls -d components/src/main/java/org/patternfly/component/*/ | xargs -n1 basename
```

**Exclude `template`** — it is a blueprint component used as a reference for project conventions, not a real UI component. Do not match PR scopes to it or include it in affected component lists. See also the discarded scopes list in `references/scope-mapping.md`.

**Bucket PRs into categories:**

1. **Component (existing)** — scope matches a PFJ component directory
2. **Component (new)** — scope has `feat` prefix, does NOT match any PFJ directory, and PR title suggests a new component (contains "added component", "add component", "create", or scope appears as `feat` in both repos)
3. **Tokens** — scope matches token/style keywords from `scope-mapping.md`
4. **Icons** — scope matches icon keywords from `scope-mapping.md`
5. **Unclassified** — kept PRs whose scope does not match any bucket
6. **Discarded** — scope matches the discarded list, OR prefix was already discarded in step 3

**Detect new icon sets:**
```bash
ls icons/src/main/java/org/patternfly/icon/IconSpecs*.java | sed -n 's/.*IconSpecs\(.\{1,\}\)\.java/\1/p' | tr '[:upper:]' '[:lower:]'
```
Compare PR titles mentioning icon set names against this list.

Report:
```
Relevant changes:
  Components (existing): X PRs across Y components
  Components (new): Z new components (<names>)
  Tokens: T PRs
  Icons: I PRs
  Unclassified: U PRs

Skipped: D PRs (chore/deps/CI/docs/irrelevant scopes)
```

---

## Workflow — Step 5: Generate Work Plan

**Assign priorities:**

| Priority | Criteria |
|----------|----------|
| P1 — Breaking | PR prefix is `breaking` AND scope matches existing PFJ component |
| P2 — New feature | PR prefix is `feat` AND scope matches existing PFJ component |
| P3 — Bug fix | PR prefix is `fix` or `techdebt` AND scope matches existing PFJ component |
| P4 — New component | PR scope flagged as new component in step 4 |
| P5 — Tokens/Icons | PR bucketed into tokens or icons |

**Group by component:**
Multiple PRs affecting the same component are grouped together. The highest priority PR determines the group's position in the sorted list.

**Determine suggested action for each group:**
1. Check if a compare report exists: `reports/pf-compare/<component>.json`

| State | Suggested action |
|-------|-----------------|
| No compare report | "Run `/pf-compare <component>`" |
| Compare report exists, has gaps | "Run `/pf-align <component>` to implement N missing variations" |
| Compare report exists, 100% match | "Run `/pf-compare <component>` to check for new differences" |
| New component | "Evaluate whether to implement" |
| Tokens | "Update `tokens` module" |
| Icons | "Update `icons` module" |

**Format each work item:**
```
N. [P<X>] **<component>** — <type>: <description>
   → <suggested action>
```

---

## Workflow — Step 6: Print Inline Summary

Print to the conversation:

```markdown
## PF Update: <VERSION>

### Release Digest
- **Total PRs:** <TOTAL> (<RELEVANT> relevant, <SKIPPED> skipped)
- **Components affected:** <COUNT> (<list>)
- **New components:** <COUNT> (<list or "none">)
- **Token changes:** <COUNT> PR(s)
- **Icon changes:** <COUNT> PR(s)

### Work Plan

| # | Pri | Component | Change | Action |
|---|-----|-----------|--------|--------|
| 1 | P1 | button | Breaking: removed isBlock | `/pf-compare button` |
| 2 | P2 | button | New: circle variant | `/pf-compare button` |
| ... | | | | |

### Unclassified (review manually)
- "<title>" — <PR link>

Full report: reports/pf-update/<VERSION>.md
```

---

## Workflow — Step 7: Write Persistent Report

1. Create the output directory:
   ```bash
   mkdir -p reports/pf-update
   ```

2. Read the template from `references/report-template.md`.

3. Fill in all placeholders with actual data from steps 2–5.

4. Write the markdown report to `reports/pf-update/<VERSION>.md` (or `reports/pf-update/<FROM>..<TO>.md` for ranges).

5. **Write the JSON companion report** to `reports/pf-update/<VERSION>.json` (or `reports/pf-update/<FROM>..<TO>.json` for ranges). Use the schema from `references/report-schema.json`. The JSON includes:
   - skillVersion (from `metadata.version` in this SKILL.md), version, date, pfjVersion, sourceRepos
   - Stats (totalPrs, relevantPrs, skippedPrs, breaking, features, fixes, etc.)
   - componentsAffected and newComponents arrays
   - Full workItems array with number, priority, component, change, source, action, status
   - unclassifiedPrs array
   - issuesCreated count

6. Report: "Reports saved to `reports/pf-update/<VERSION>.md` and `reports/pf-update/<VERSION>.json`"

---

## Workflow — Step 8: Offer GitHub Issue Creation

**Ask the user:**
```
Create GitHub issues for these work items? (yes/no/select)
  yes    — Create issues for all P1–P4 items
  no     — Skip issue creation
  select — Choose which items to file
```

**If yes or select:**

1. Detect the PFJ repo:
   ```bash
   git remote get-url origin
   ```
   Parse owner/repo from the URL. Confirm with user before creating first issue: "Will create issues in `<owner>/<repo>`. Proceed?"

2. Read the issue templates from `references/issue-templates.md`.

3. For each selected work item:

   a. **Deduplication check:**
   ```bash
   gh issue list --label pf-update --search "<component>" --state open --json number,title
   ```
   If a matching issue exists, add a comment instead of creating a new one.

   b. **Create issue** (if no duplicate):
   Use `gh issue create` with title, labels, and body from the template.

   c. **Or add comment** (if duplicate found):
   Use `gh issue comment` to add the new PR findings.

4. After all issues are created, update both report files:
   - In the `.md` file: set `issues_created` in YAML frontmatter and append issue links to the "GitHub Issues" section
   - In the `.json` file: set `issuesCreated` to the count

5. Report: "Created N issues, commented on M existing issues."

---

## Error Handling

| Scenario | Message |
|----------|---------|
| `gh` CLI not found | "GitHub CLI (`gh`) required. Install: `brew install gh`" |
| `gh` not authenticated | "GitHub CLI not authenticated. Run: `gh auth login`" |
| Release tag not found (both repos) | "Release `v<version>` not found. Check the version number." |
| Release tag not found (one repo) | Warning, proceed with other repo |
| `pom.xml` not found | "Could not read `version.patternfly` from `pom.xml`. Specify version explicitly." |
| No relevant changes | "No component/token/icon changes found in PF `<version>`. PFJ is up to date." |
| GitHub API rate limited | "GitHub API rate limited. Try again later or authenticate: `gh auth login`" |
| Issue creation fails | Print error, continue with remaining items |

## Anti-Patterns

- **Don't auto-run `/pf-compare`** — just recommend it in the work plan; the user decides when to run comparisons
- **Don't modify PFJ source code** — this skill is read-only analysis only
- **Don't fetch CHANGELOG.md files** — GitHub Releases are sufficient and more structured
- **Don't create issues without asking** — always confirm first to avoid issue spam
- **Don't deep-parse PR diffs** — titles and conventional commit metadata provide sufficient signal without API rate cost
- **Don't include chore/deps/CI PRs** — they're noise for PFJ purposes
