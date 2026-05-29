# Ignore Patterns for DOM Comparison

Patterns to ignore when comparing PF and PFJ HTML output in Step 5.

## Dynamic IDs

These attributes contain auto-generated values that differ between renders:
- `id="xxx-id-NNN"` -- Elemento/GWT generated element IDs
- `data-pfcsce` -- PatternFly internal tracking attribute
- `on-detach-uid` -- Elemento detach lifecycle attribute

## Whitespace and Formatting

- Whitespace differences between tags
- Attribute ordering differences
- Self-closing vs explicit closing tags (`<br/>` vs `<br></br>`)

## SVG Internals

- Do not compare SVG path data (`d` attribute) character-by-character
- Do not compare internal SVG structure (nested `<g>`, `<defs>`, etc.)
- **DO compare icon identity**: check the `viewBox` attribute on `<svg>` elements — a different viewBox usually means a different icon is used (e.g., `0 0 20 20` vs `0 0 32 32` indicates different icon sets)
- Compare the wrapping `<svg>` element's CSS classes

## Non-PF Classes

- Only compare classes with prefix `pf-v6-` or `pf-m-`
- Ignore application-specific classes (e.g., `showcase-*`)
- Ignore utility/framework classes (e.g., `ws-*`)

## Version-Dependent Constants

The `pf-v6-` prefix is tied to PatternFly v6. If the project upgrades to a new major version, update this prefix and the `ws-core-c-` selector prefix used in the extraction scripts.
