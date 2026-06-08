---
name: pf-align
description: >-
  This skill should be used when aligning a PatternFly Java component with its
  PatternFly counterpart by implementing action items from pf-compare reports.
  Triggers include /pf-align, "align component", "implement missing variations",
  "fix PFJ component", "apply pf-compare recommendations", "add missing PFJ
  variations", "sync with PatternFly", "bring component up to date",
  "implement pf-compare action items", "implement comparison findings",
  "fix alignment issues", or any request to implement changes identified
  by a comparison report.
metadata:
  version: "0.2.0"
---

# /pf-align — PatternFly Java Alignment

Implements action items from `/pf-compare` reports. Simple fixes (CSS modifiers, attributes) are auto-generated. Complex items (new variations, structural changes, icons) are presented with context for the user to implement manually.

## Arguments

```
/pf-align <component> [--item <number>]
```

- **component** (required) — Component name matching the report file (e.g., `button`, `card`). **Reject `template`**.
- **--item** (optional) — Process only the specified action item number (default: process all)

---

## Step 1: Pre-flight Checks

1. **Parse arguments**: Extract component name and optional item filter.

2. **Check report exists**: `reports/pf-compare/<COMPONENT>.json`
   - If not found: "Report not found. Run `/pf-compare <COMPONENT>` first."

3. **Locate component files**:
   - Component class: `components/src/main/java/org/patternfly/component/<component>/<Component>.java`
   - Showcase file: `showcase/src/main/java/org/patternfly/showcase/component/<Component>Component.java`
   - For compound names (e.g., `description-list`), convert to PascalCase: `DescriptionList.java`
   - If not found, search: `find components/src -name "<Component>.java" -path "*/component/*"`

4. **Print**: "Pre-flight OK. Report: `reports/pf-compare/<COMPONENT>.json`"

---

## Step 2: Parse & Present Action Items

1. **Read the JSON report** at `reports/pf-compare/<COMPONENT>.json`. Extract:
   - `pfUrl` — PF React showcase URL
   - `variations` — array of `{ slug, title, html }` with raw PF HTML
   - `actionItems` — array of `{ number, type, priority, title, description, category, variations }`

2. **Classify items** into two categories:

   | Category | Types | What happens |
   |----------|-------|-------------|
   | **Simple** (auto-fix) | `fix_css`, `fix_attribute` | Code is generated and applied automatically |
   | **Complex** (manual) | `add_variation`, `fix_structure`, `fix_icon`, `implement_feature` | Context is presented, user implements |

3. **Print action items** grouped by category:
   ```
   Action items from reports/pf-compare/button.json:

   Simple (auto-fix):
     3. [P3] Fix attribute: Hamburger aria-expanded — add aria-expanded attribute

   Complex (manual):
     1. [P1] Add variation: Custom component — PF section not in PFJ
     2. [P2] Fix CSS: Circle tertiary — add pf-m-tertiary modifier
     4. [P4] Fix icon: Favorite — different icon set (viewBox mismatch)
   ```

4. **Handle --item filter**: If `--item N` specified, filter to only that item.

5. **Ask user**: "Process all items? Or specify which items to work on."

---

## Step 3: Process Items

For each selected item, read the component class and showcase file to understand existing patterns (modifiers, ARIA methods, section markers, snippet IDs).

### Simple items (fix_css, fix_attribute)

Read `references/code-generation.md` for the insertion pattern.

**fix_css**:
1. Extract modifier name from description (e.g., `.pf-m-danger` → `danger`)
2. Check if modifier method already exists in component class
3. If missing: generate modifier method, insert in `// --- builder` section
4. Show diff, ask for approval

**fix_attribute**:
1. Extract attribute from description (e.g., `aria-label` → `ariaLabel`)
2. Check if ARIA method already exists in component class
3. If missing: generate ARIA method, insert in `// --- aria` section
4. Show diff, ask for approval

### Complex items (add_variation, fix_structure, fix_icon, implement_feature)

Present context to help the user implement manually:

1. **Show PF reference HTML**: Look up the section title in the `variations` array from the report. Print the raw HTML (or a relevant excerpt if very long). If HTML is not in the report, print the `pfUrl` and section title so the user can inspect it in a browser.

2. **Show relevant PFJ code**: Print the relevant section of the component class or showcase file. For add_variation: show existing snippet patterns. For fix_structure: show the affected method. For fix_icon: show the icon usage.

3. **Describe the difference**: Restate the action item description with enough context for the user to act on it.

4. **Print guidance**:
   ```
   This item requires manual implementation:
   - PF reference: <section title> (HTML shown above)
   - PFJ file: <file path>
   - What to change: <description>
   ```

5. **Do not generate code** for complex items.

---

## Step 4: Build Verify

After all simple fixes are applied:

1. Run: `mvn verify -Dquickly -P showcase`
2. If build fails: show error, ask user whether to revert changes or keep them and fix manually
3. If build succeeds: continue to summary

Skip this step if no simple fixes were applied (only complex items presented).

---

## Step 5: Summary

Print a summary:

```
## pf-align: <COMPONENT>

Applied:
  - [P3] Fix attribute: Hamburger aria-expanded ✓

Manual (context presented):
  - [P1] Add variation: Custom component
  - [P4] Fix icon: Favorite

Files modified:
  - components/src/main/java/.../Button.java (1 method added)

Next steps:
  - Implement the manual items listed above
  - Re-run /pf-compare <COMPONENT> after changes to verify alignment
```

---

## Error Handling

| Situation | Action |
|-----------|--------|
| Report not found | Print error, suggest running `/pf-compare` first |
| Component class not found | Print error with search paths tried |
| Item number invalid | Print error, list valid numbers |
| Method already exists | Skip item, print "Already exists: `methodName()`" |
| Build failure | Show error, ask to revert or keep |
| HTML not in report | Print `pfUrl` + section title for manual inspection |

## Anti-Patterns

- **Do not generate code for complex items.** Show context and let the user implement.
- **Do not extract HTML from the browser.** Use only what's in the pf-compare report.
- **Do not write an align report.** Progress is tracked through git history.
- **Do not modify showcase files automatically.** Only component class changes (modifier/ARIA methods) are auto-generated.
