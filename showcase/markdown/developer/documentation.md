---
id: documentation
title: Documentation
order: 5
---

# Documentation

The showcase uses a markdown-based documentation system. Pages are authored as markdown files, processed at build time into JSON, and rendered dynamically at runtime.

## Directory Structure

Markdown files live in `showcase/markdown/`. The directory structure maps directly to routes and navigation:

```
showcase/markdown/
├── home.md                    → /
├── get-started.md             → /get-started
├── icons.md                   → /icons
├── developer/                 → Navigation group "Developer"
│   ├── index.md               → /developer (group has own content)
│   ├── api-design.md          → /developer/api-design
│   ├── building.md            → /developer/building
│   └── ...
└── reference/                 → Navigation group "Reference"
    ├── _meta.yaml             → Group metadata (no own content)
    ├── page-a.md              → /reference/page-a
    └── page-b.md              → /reference/page-b
```

## Adding a Page

To add a new page, create a markdown file with YAML frontmatter:

```yaml
---
id: my-page
title: My Page
order: 3
---

# My Page

Content goes here...
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Route segment and JSON filename. Must be unique within its folder. |
| `title` | Yes | Page title shown in the browser tab and navigation. |
| `order` | No | Sort order within the parent folder. Lower numbers come first. Defaults to 0. Pages with the same order are sorted alphabetically by title. |

### When Java Changes Are Needed

Routes are registered automatically from the manifest — **you never need a Java page class for markdown pages**. However, navigation placement in `Showcase.java` follows these rules:

| Action | Java change needed? |
|--------|---------------------|
| Add a page inside an existing folder | **No** — appears automatically |
| Add a new top-level page (root level) | **Yes** — add `manifest.navItem(placeManager, "/my-page")` to navigation in `Showcase.java` |
| Add a new folder | **Yes** — add `manifest.navGroup(placeManager, "my-folder")` to navigation in `Showcase.java` |
| Add a page inside a new subfolder of an existing folder | **No** — nested groups are built recursively |

The reason top-level items and new folders need manual placement is to control their position relative to non-markdown sections (Components, Extensions, Charts, Layouts).

## Folders

Folders create expandable navigation groups. A folder can optionally have its own content page.

### Folder with Content

Place an `index.md` file in the folder. The frontmatter of `index.md` provides the group title and order:

```
developer/
├── index.md          ← group title comes from here
├── api-design.md
└── building.md
```

When a folder has `index.md`, clicking the group in the navigation shows the index content.

### Folder without Content

If there's no `index.md`, create a `_meta.yaml` file to set the group title and order:

```yaml
# _meta.yaml
title: Reference
order: 10
```

Without `_meta.yaml`, the folder name is title-cased automatically (e.g., `my-folder` → `My Folder`).

## Build Pipeline

The markdown pipeline runs during the Maven build (`prepare-package` phase) via:

```bash
pnpm run markdown
```

This executes `markdown.mjs`, which:

1. Walks the `showcase/markdown/` directory recursively
2. Parses each `.md` file (frontmatter, GFM, syntax highlighting)
3. Writes JSON files to `src/web/public/markdown/`, preserving the directory structure
4. Generates `src/web/public/markdown/manifest.json` with the full navigation tree

### JSON Output

Each markdown file produces a JSON file with:

```json
{
  "id": "developer/building",
  "title": "Building",
  "html": "<h1>...</h1>...",
  "toc": [
    { "id": "prerequisites", "text": "Prerequisites", "level": 2 }
  ]
}
```

### Manifest

The `manifest.json` file describes the navigation tree:

```json
[
  { "type": "page", "id": "get-started", "route": "/get-started", "title": "Get started", "order": 1 },
  {
    "type": "group", "id": "developer", "route": "/developer",
    "title": "Developer", "order": 5, "hasContent": true, "contentId": "developer/index",
    "children": [
      { "type": "page", "id": "developer/api-design", "route": "/developer/api-design", "title": "API design", "order": 0 }
    ]
  }
]
```

## Runtime

At runtime, the showcase loads `manifest.json` on startup and uses it to:

1. Register routes programmatically with Elemento's `PlaceManager`
2. Build the sidebar navigation with expandable groups
3. Lazily load page content (JSON) when a route is visited

Markdown pages share a single `MarkdownPage` class — no per-page Java classes are needed.

## Syntax Highlighting

Code blocks are highlighted at build time using [Shiki](https://shiki.matsu.io/) with the `github-light` theme. Supported languages: `java`, `xml`, `javascript`, `json`, `html`, `css`, `bash`.

## Links

Links to the [API documentation](https://patternfly-java.github.io/apidocs/) are automatically opened in a new tab.
