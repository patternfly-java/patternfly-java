# `/pf-compare` Skill Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a Claude Code skill that compares a PatternFly component against its PatternFly Java implementation using Chrome DevTools MCP, producing a completeness report and DOM/CSS diff.

**Architecture:** Single skill file (`skill.md`) with inline JavaScript extraction scripts. The skill orchestrates Chrome DevTools MCP to scrape both showcases, uses AI-assisted semantic matching to pair variations, compares DOM subtrees for matched pairs, and outputs an inline summary plus a detailed Markdown report with YAML frontmatter for future `/pf-align` consumption.

**Tech Stack:** Claude Code skill (Markdown), Chrome DevTools MCP (`evaluate_script`, `navigate_page`, `new_page`), JavaScript (DOM extraction scripts)

---

## File Structure

| File | Responsibility |
|------|---------------|
| `~/.claude/skills/pf-compare/skill.md` | Skill definition: frontmatter, trigger phrases, full workflow, JS extraction scripts, report template |

One file. The skill is entirely self-contained — no helper scripts, no config files. The JavaScript extraction logic is embedded in the skill as code blocks that get passed to `evaluate_script`.

---

## Task 1: Create Skill File with Frontmatter and Argument Parsing

**Files:**
- Create: `~/.claude/skills/pf-compare/skill.md`

- [ ] **Step 1: Create the skill directory**

```bash
mkdir -p ~/.claude/skills/pf-compare
```

- [ ] **Step 2: Write the skill frontmatter and argument parsing section**

Write `~/.claude/skills/pf-compare/skill.md` with this content:

```markdown
---
name: pf-compare
description: >-
  Compare a PatternFly component against its PatternFly Java implementation.
  Use when the user says /pf-compare, "compare PF component", "check PFJ
  completeness", "compare button component", or wants to identify gaps between
  PatternFly and PatternFly Java component implementations.
author: "Harald Pehl <harald.pehl@gmail.com>"
license: Apache-2.0
metadata:
  version: "0.1.0"
---

# /pf-compare — PatternFly Component Comparison

Compares a PatternFly (React/HTML) component against its PatternFly Java implementation to identify variation coverage gaps and DOM/CSS structural differences.

## Tools

### Pre-allowed (no permission prompt)

- **Read** — Read existing comparison reports
- **Write** — Create comparison report files
- **Bash** — Check localhost reachability (`curl`), create directories (`mkdir`)

### Chrome DevTools MCP (require approval on first use)

- **mcp__plugin_chrome-devtools-mcp_chrome-devtools__navigate_page** — Navigate to showcase URLs
- **mcp__plugin_chrome-devtools-mcp_chrome-devtools__new_page** — Open new browser tabs
- **mcp__plugin_chrome-devtools-mcp_chrome-devtools__select_page** — Switch between tabs
- **mcp__plugin_chrome-devtools-mcp_chrome-devtools__evaluate_script** — Extract DOM data via JavaScript
- **mcp__plugin_chrome-devtools-mcp_chrome-devtools__close_page** — Clean up tabs when done
- **mcp__plugin_chrome-devtools-mcp_chrome-devtools__take_snapshot** — Fallback for debugging

## Arguments

```
/pf-compare <component> [--port <port>]
```

- `component` (required) — URL slug matching both showcases (e.g., `button`, `card`, `data-list`, `empty-state`)
- `--port` (optional) — PFJ local dev server port (default: `1234`)

Parse the arguments from the ARGUMENTS string. If no component is provided, ask the user which component to compare.
```

- [ ] **Step 3: Commit**

```bash
git add ~/.claude/skills/pf-compare/skill.md
git commit -m "feat: scaffold pf-compare skill with frontmatter"
```

---

## Task 2: Add Pre-flight Checks Section

**Files:**
- Modify: `~/.claude/skills/pf-compare/skill.md`

- [ ] **Step 1: Append the pre-flight checks section to the skill file**

Append after the Arguments section:

```markdown
## Workflow

### Step 1: Pre-flight Checks

Run these checks in order. Stop and report if any fail.

1. **Parse arguments:** Extract `<component>` and optional `--port <port>` (default `1234`) from the ARGUMENTS string. If no component is provided, use `AskUserQuestion` to ask the user.

2. **Resolve PFJ showcase URL:** Try these in order:
   - Run: `curl -s -o /dev/null -w "%{http_code}" http://localhost:<port>/components/<component>`
   - If HTTP 200, use `http://localhost:<port>/components/<component>` as `PFJ_URL`
   - Otherwise, run: `curl -s -o /dev/null -w "%{http_code}" https://patternfly-java.github.io/components/<component>`
   - If HTTP 200, use `https://patternfly-java.github.io/components/<component>` as `PFJ_URL`
   - If neither returns 200, stop and tell the user:
     > "Neither the local PFJ dev server (localhost:<port>) nor the published showcase (patternfly-java.github.io) is reachable for component `<component>`. Start the local server with `mvn j2cl:watch -P showcase` or verify the component name."

3. **Verify PF site:** Run: `curl -s -o /dev/null -w "%{http_code}" https://www.patternfly.org/components/<component>/html`
   - If not HTTP 200, stop and tell the user:
     > "PatternFly site is not reachable at `https://www.patternfly.org/components/<component>/html`. Verify the component name matches the PF URL scheme."

4. **Set variables:**
   - `PF_URL` = `https://www.patternfly.org/components/<component>/html`
   - `PFJ_URL` = resolved URL from step 2
   - `COMPONENT` = the component slug

Print: "Pre-flight OK. Comparing PF (`PF_URL`) against PFJ (`PFJ_URL`)."
```

- [ ] **Step 2: Commit**

```bash
git add ~/.claude/skills/pf-compare/skill.md
git commit -m "feat(pf-compare): add pre-flight checks"
```

---

## Task 3: Add PF Data Extraction Section

**Files:**
- Modify: `~/.claude/skills/pf-compare/skill.md`

- [ ] **Step 1: Append the PF data extraction section**

Append after the pre-flight checks:

```markdown
### Step 2: Extract PF Variations

Open the PatternFly HTML tab and extract all demo variations.

1. **Open PF page:**
   Use `new_page` to open `PF_URL` in a new Chrome tab.

2. **Extract variation list:**
   Use `evaluate_script` with this function:

   ```javascript
   (componentSlug) => {
     const prefix = 'ws-core-c-' + componentSlug + '-';
     const containers = document.querySelectorAll('div[id^="' + prefix + '"]');
     const variations = [];
     for (const container of containers) {
       const id = container.id;
       const slug = id.replace(prefix, '');
       // Find the h3 heading that labels this variation
       // The h3 is in a preceding sibling or parent structure
       const heading = document.getElementById(slug);
       const title = heading ? heading.textContent.trim() : slug.replace(/-/g, ' ');
       // Extract the preview HTML
       const preview = container.querySelector('.ws-preview-html');
       const html = preview ? preview.innerHTML.trim() : '';
       variations.push({ slug, title, html });
     }
     return variations;
   }
   ```

   Pass `COMPONENT` as the argument: `args: [COMPONENT]`

3. **Store the result** as `PF_VARIATIONS` — an array of `{ slug, title, html }` objects.

4. **Report:** "Extracted N PF variations: <list of titles>"
```

- [ ] **Step 2: Commit**

```bash
git add ~/.claude/skills/pf-compare/skill.md
git commit -m "feat(pf-compare): add PF variation extraction"
```

---

## Task 4: Add PFJ Data Extraction Section

**Files:**
- Modify: `~/.claude/skills/pf-compare/skill.md`

- [ ] **Step 1: Append the PFJ data extraction section**

Append after the PF extraction:

```markdown
### Step 3: Extract PFJ Snippets

Open the PatternFly Java showcase and extract all snippet sections.

1. **Open PFJ page:**
   Use `new_page` to open `PFJ_URL` in a new Chrome tab.

2. **Extract snippet list:**
   Use `evaluate_script` with this function:

   ```javascript
   () => {
     const headings = document.querySelectorAll('h3.ws-heading');
     const snippets = [];
     for (const h3 of headings) {
       const id = h3.id;
       const title = h3.textContent.trim();
       // Navigate to preview: h3 -> parent(flex) -> parent(stack-item) -> parent(stack)
       const stack = h3.parentElement?.parentElement?.parentElement;
       if (!stack) continue;
       const children = stack.children;
       if (children.length < 2) continue;
       const previewItem = children[1];
       const previewDiv = previewItem?.firstElementChild;
       const html = previewDiv ? previewDiv.innerHTML.trim() : '';
       snippets.push({ id, title, html });
     }
     return snippets;
   }
   ```

3. **Store the result** as `PFJ_SNIPPETS` — an array of `{ id, title, html }` objects.

4. **Report:** "Extracted M PFJ snippets: <list of titles>"
```

- [ ] **Step 2: Commit**

```bash
git add ~/.claude/skills/pf-compare/skill.md
git commit -m "feat(pf-compare): add PFJ snippet extraction"
```

---

## Task 5: Add Variation Matching Section

**Files:**
- Modify: `~/.claude/skills/pf-compare/skill.md`

- [ ] **Step 1: Append the matching section**

Append after PFJ extraction:

```markdown
### Step 4: Match Variations

Match PF variations to PFJ snippets using AI-assisted semantic matching.

Given `PF_VARIATIONS` (array of `{ slug, title, html }`) and `PFJ_SNIPPETS` (array of `{ id, title, html }`), produce a matching table.

**Matching rules (apply in order):**
1. **Exact match** — PF title equals PFJ title (case-insensitive) → automatic match
2. **Semantic match** — titles are clearly referring to the same thing (e.g., "Variations" ↔ "Variant examples", "Call to action" ↔ "Call to action (CTA) buttons") → match with note
3. **No match** — no PFJ snippet corresponds to this PF variation → `missing_in_pfj`

After matching PF→PFJ, check for PFJ snippets that were not matched to any PF variation → `extra_in_pfj`.

**Produce three lists:**
- `MATCHED` — array of `{ pf: { slug, title, html }, pfj: { id, title, html } }` pairs
- `MISSING_IN_PFJ` — array of PF variations with no PFJ match
- `EXTRA_IN_PFJ` — array of PFJ snippets with no PF match

**Report the matching table** to the user:

```
Matching results for <COMPONENT>:
  Matched (K):
    PF "Variations" ↔ PFJ "Variant examples"
    PF "Disabled" ↔ PFJ "Disabled buttons"
    ...
  Missing in PFJ (L):
    PF "Clicked buttons"
    PF "Aria-disabled"
    ...
  Extra in PFJ (E):
    PFJ "Custom snippet"
    ...
```
```

- [ ] **Step 2: Commit**

```bash
git add ~/.claude/skills/pf-compare/skill.md
git commit -m "feat(pf-compare): add variation matching logic"
```

---

## Task 6: Add DOM/CSS Comparison Section

**Files:**
- Modify: `~/.claude/skills/pf-compare/skill.md`

- [ ] **Step 1: Append the DOM/CSS comparison section**

Append after matching:

```markdown
### Step 5: Compare DOM/CSS for Matched Variations

For each pair in `MATCHED`, compare the extracted HTML from PF and PFJ.

**Comparison approach:**

For each matched pair, analyze the `html` field from both PF and PFJ. Focus on:

1. **CSS class differences** — compare PatternFly-specific CSS classes (`pf-v6-c-*`, `pf-m-*`, `pf-v6-l-*`) on corresponding elements. Report:
   - Classes present in PF but missing from PFJ
   - Classes present in PFJ but absent from PF

2. **Structural differences** — compare element tag hierarchy. Report:
   - Elements/wrappers present in PF but missing from PFJ (e.g., `<span class="pf-v6-c-button__icon">`)
   - Extra wrapper elements in PFJ not present in PF

3. **Attribute differences** — compare ARIA attributes (`aria-label`, `aria-hidden`, `role`), `type`, `tabindex`. Report:
   - Attributes present in PF but missing from PFJ
   - Attributes present in PFJ but absent from PF

**Filtering rules:**
- Only compare classes with prefix `pf-v6-` (ignore utility classes, framework-specific classes)
- Ignore dynamic/generated IDs (anything matching patterns like `id="xxx-id-NNN"`, `data-pfcsce`, `on-detach-uid`)
- Ignore SVG internals — icons may use different icon sets; only compare the wrapping `<svg>` element's classes
- Ignore whitespace and formatting differences in HTML

**For each matched pair, produce:**
```json
{
  "variation": "<PF title>",
  "status": "ok | differences_found",
  "missingClasses": [{ "class": "pf-m-xxx", "element": "<tag>", "context": "..." }],
  "extraClasses": [{ "class": "pf-m-xxx", "element": "<tag>", "context": "..." }],
  "structuralDiffs": ["PF has <span class='pf-v6-c-button__icon'> wrapping icon — PFJ does not"],
  "attributeDiffs": ["aria-label missing on <button> in PFJ"]
}
```

Store all results as `COMPARISON_RESULTS`.
```

- [ ] **Step 2: Commit**

```bash
git add ~/.claude/skills/pf-compare/skill.md
git commit -m "feat(pf-compare): add DOM/CSS comparison logic"
```

---

## Task 7: Add Inline Summary Output Section

**Files:**
- Modify: `~/.claude/skills/pf-compare/skill.md`

- [ ] **Step 1: Append the inline summary section**

Append after comparison:

```markdown
### Step 6: Print Inline Summary

After completing the comparison, print a summary to the conversation:

```
## PF Compare: <COMPONENT>

### Completeness: <MATCHED count>/<PF_VARIATIONS count> variations (<percentage>%)

Missing in PFJ:
  - <title 1>
  - <title 2>
  ...

Extra in PFJ:
  - <title 1>
  ...

### DOM Comparison (matched variations):
  <variation title>: <N> class differences, <M> structural issues
  <variation title>: OK
  ...

Full report: docs/pf-compare/<COMPONENT>.md
```

Replace `OK` for variations where `status` is `"ok"`. For variations with `differences_found`, summarize the count of `missingClasses`, `extraClasses`, `structuralDiffs`, and `attributeDiffs`.
```

- [ ] **Step 2: Commit**

```bash
git add ~/.claude/skills/pf-compare/skill.md
git commit -m "feat(pf-compare): add inline summary output"
```

---

## Task 8: Add Detailed Report Generation Section

**Files:**
- Modify: `~/.claude/skills/pf-compare/skill.md`

- [ ] **Step 1: Append the report generation section**

Append after inline summary:

```markdown
### Step 7: Write Detailed Report

Generate a detailed Markdown report and save it using the `Write` tool.

1. **Create output directory:**
   Run: `mkdir -p docs/pf-compare`

2. **Detect PF version:**
   Use `evaluate_script` on the PF page to extract the version:

   ```javascript
   () => {
     const btn = document.querySelector('button[class*="release"]');
     return btn ? btn.textContent.trim() : 'unknown';
   }
   ```

   Store as `PF_VERSION`.

3. **Generate report content** using this template:

   ```markdown
   ---
   component: <COMPONENT>
   date: <YYYY-MM-DD>
   pf_version: <PF_VERSION>
   pf_url: <PF_URL>
   pfj_url: <PFJ_URL>
   completeness:
     pf_total: <PF_VARIATIONS count>
     pfj_total: <PFJ_SNIPPETS count>
     matched: <MATCHED count>
     missing_in_pfj:
       - <slug 1>
       - <slug 2>
     extra_in_pfj:
       - <id 1>
   ---

   # PF Compare: <COMPONENT>

   ## Completeness

   | # | PF Variation | PFJ Snippet | Status |
   |---|---|---|---|
   | 1 | <PF title> | <PFJ title> | matched |
   | 2 | <PF title> | — | missing_in_pfj |
   | 3 | — | <PFJ title> | extra_in_pfj |

   ## DOM Comparison

   For each item in COMPARISON_RESULTS where status is "differences_found":

   ### <Variation Title>

   **Status:** differences_found

   #### Missing CSS Classes
   For each item in missingClasses:
   - `.<class>` on `<element>` — present in PF, absent in PFJ

   #### Extra CSS Classes
   For each item in extraClasses:
   - `.<class>` on `<element>` — present in PFJ, absent in PF

   #### Structural Differences
   For each item in structuralDiffs:
   - <description>

   #### Attribute Differences
   For each item in attributeDiffs:
   - <description>

   For items where status is "ok", write:

   ### <Variation Title>

   **Status:** ok

   ## Action Items

   Generate a prioritized list:
   1. For each MISSING_IN_PFJ: **Add variation:** <title> — implement this PF variation in PFJ
   2. For each missingClasses: **Fix CSS:** <variation> — add missing `.<class>` to `<element>`
   3. For each structuralDiffs: **Fix structure:** <variation> — <description>
   4. For each attributeDiffs: **Fix attribute:** <variation> — <description>
   ```

4. **Write the file:**
   Use `Write` tool to save to `docs/pf-compare/<COMPONENT>.md` (path relative to the project working directory).

5. **Report:** "Detailed report saved to `docs/pf-compare/<COMPONENT>.md`"
```

- [ ] **Step 2: Commit**

```bash
git add ~/.claude/skills/pf-compare/skill.md
git commit -m "feat(pf-compare): add detailed report generation"
```

---

## Task 9: Add Cleanup Section and Final Polish

**Files:**
- Modify: `~/.claude/skills/pf-compare/skill.md`

- [ ] **Step 1: Append the cleanup section**

Append after report generation:

```markdown
### Step 8: Cleanup

Close the Chrome tabs opened during this comparison.

1. Use `list_pages` to find the pages opened for PF and PFJ.
2. Close them with `close_page` (keep at least one tab open — Chrome DevTools requires it).

The comparison is complete. The user can now:
- Review the detailed report at `docs/pf-compare/<COMPONENT>.md`
- Use the report as input for a future `/pf-align` skill to implement missing variations
- Run `/pf-compare` on another component
```

- [ ] **Step 2: Review the complete skill file**

Read back the entire `~/.claude/skills/pf-compare/skill.md` and verify:
- Frontmatter is valid YAML
- All 8 workflow steps are present and in order
- JavaScript code blocks use correct selectors (verified during brainstorming):
  - PF: `div[id^="ws-core-c-<component>-"]` with `.ws-preview-html` child
  - PFJ: `h3.ws-heading` with parent stack navigation
- Report template matches the spec's YAML frontmatter schema
- Tool names match the Chrome DevTools MCP tool IDs exactly

- [ ] **Step 3: Commit**

```bash
git add ~/.claude/skills/pf-compare/skill.md
git commit -m "feat(pf-compare): add cleanup and finalize skill"
```

---

## Task 10: Smoke Test with Button Component

**Files:**
- None (manual test)

- [ ] **Step 1: Verify skill is discoverable**

Run `/pf-compare` without arguments. The skill should load and ask which component to compare.

- [ ] **Step 2: Run comparison against button component**

Run `/pf-compare button`. Verify:
- Pre-flight checks pass (PF site reachable, PFJ fallback to `patternfly-java.github.io`)
- PF variations are extracted (expect ~18 variations for button)
- PFJ snippets are extracted (expect ~8 snippets for button)
- Matching table is printed with reasonable matches
- DOM comparison runs for matched pairs
- Inline summary is printed
- Report file is created at `docs/pf-compare/button.md`
- Report has valid YAML frontmatter
- Chrome tabs are cleaned up

- [ ] **Step 3: Review the generated report**

Read `docs/pf-compare/button.md` and verify:
- YAML frontmatter parses correctly
- Completeness table lists all variations
- DOM comparison sections have meaningful diffs (not empty)
- Action items are present and prioritized

- [ ] **Step 4: Commit the test report (optional)**

If the report looks good, commit it as a reference:
```bash
git add docs/pf-compare/button.md
git commit -m "docs: add pf-compare button reference report"
```
