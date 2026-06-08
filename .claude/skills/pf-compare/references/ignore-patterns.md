# Ignore Patterns for DOM Comparison

Patterns to ignore when comparing PF and PFJ HTML output. The `normalize-dom.js` script handles most filtering during extraction.

## Stripped by `normalize-dom.js`

These are filtered out during normalization and never reach the comparison step:

- **Non-PF classes** — only `pf-v6-c-*`, `pf-v6-l-*`, and `pf-m-*` classes are kept
- **Dynamic IDs** — all `id` attributes are stripped
- **Style attributes** — `style` is stripped
- **OUIA attributes** — `data-ouia-*` (test automation attributes)
- **Elemento attributes** — `data-pfcsce`, `on-detach-uid`
- **SVG internals** — SVG elements are collapsed to `{ tag: "svg", svgViewBox: "..." }`; no path data, nested groups, or defs are compared

## Kept by `normalize-dom.js`

These survive normalization and are available for comparison:

- **PF classes** — `pf-v6-c-*` (component), `pf-v6-l-*` (layout)
- **PF modifiers** — `pf-m-*`
- **Semantic attributes** — `role`, `type`, `tabindex`, `disabled`, `hidden`, `href`, `target`
- **ARIA attributes** — all `aria-*` attributes
- **SVG viewBox** — used to detect different icons (e.g., `0 0 20 20` vs `0 0 32 32`)
- **Direct text content** — truncated to 50 characters

## AI Comparison Guidelines

The AI comparison step interprets the normalized element lists. When classifying differences:

- **Whitespace and formatting** — not visible in normalized output, ignore
- **Element count differences** — may indicate showcase layout choices (PF often wraps examples in flex containers), not missing features
- **Icon viewBox differences** — usually means different icon sets (FontAwesome vs Red Hat icons), classify as P4
- **Text content differences** — often showcase placeholder text, classify as P5 unless it indicates a functional difference

## Version-Dependent Constants

The `pf-v6-` class prefix and `ws-react-c-` ID prefix are tied to PatternFly v6. If the project upgrades to a new major version, update these prefixes in the extraction and normalization scripts.
