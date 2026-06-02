/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import {existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync} from 'fs';
import {basename, join, relative, resolve} from 'path';
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';

import rehypeShiki from '@shikijs/rehype';
import rehypeStringify from 'rehype-stringify';
import YAML from 'yaml';

const MARKDOWN_DIR = resolve(import.meta.dirname, 'markdown');
const OUTPUT_DIR = resolve(import.meta.dirname, 'src/web/public/markdown');

const PF_HEADING_CLASSES = {
    h1: 'pf-v6-c-title pf-m-4xl',
    h2: 'pf-v6-c-title pf-m-2xl',
    h3: 'pf-v6-c-title pf-m-lg',
};

// ------------------------------------------------------ remark/rehype plugins

function extractFrontmatter() {
    return (tree, file) => {
        const yamlNode = tree.children.find(node => node.type === 'yaml');
        if (yamlNode) {
            file.data.frontmatter = YAML.parse(yamlNode.value);
            tree.children = tree.children.filter(node => node.type !== 'yaml');
        }
    };
}

function extractToc() {
    return (tree, file) => {
        const toc = [];
        for (const node of tree.children) {
            if (node.type === 'heading' && node.depth >= 2 && node.depth <= 3) {
                const text = node.children
                    .filter(child => child.type === 'text')
                    .map(child => child.value)
                    .join('');
                if (text) {
                    toc.push({text, level: node.depth});
                }
            }
        }
        file.data.toc = toc;
    };
}

function addHeadingClasses() {
    return (tree) => {
        function visit(node) {
            if (node.type === 'element' && PF_HEADING_CLASSES[node.tagName]) {
                const classes = PF_HEADING_CLASSES[node.tagName];
                node.properties = node.properties || {};
                const existing = node.properties.className || [];
                node.properties.className = [...existing, ...classes.split(' ')];
            }
            if (node.children) {
                node.children.forEach(visit);
            }
        }

        visit(tree);
    };
}

// ------------------------------------------------------ processor

async function createProcessor() {
    return unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkFrontmatter, ['yaml'])
        .use(extractFrontmatter)
        .use(extractToc)
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypeSlug)
        .use(addHeadingClasses)
        .use(rehypeShiki, {
            theme: 'github-light',
            langs: ['java', 'xml', 'javascript', 'json', 'html', 'css', 'bash'],
        })
        .use(rehypeStringify, {allowDangerousHtml: true});
}

async function processFile(processor, filePath) {
    const markdown = readFileSync(filePath, 'utf-8');
    const result = await processor.process(markdown);
    const frontmatter = result.data.frontmatter || {};
    const toc = result.data.toc || [];

    if (!frontmatter.id) {
        const name = basename(filePath, '.md');
        console.warn(`Warning: ${filePath} has no 'id' in frontmatter, using filename '${name}'`);
        frontmatter.id = name;
    }

    const tocWithIds = toc.map(entry => ({
        id: entry.text.toLowerCase().replace(/[^\w]+/g, '-').replace(/(^-|-$)/g, ''),
        text: entry.text,
        level: entry.level,
    }));

    return {
        id: frontmatter.id,
        title: frontmatter.title || frontmatter.id,
        order: frontmatter.order ?? 0,
        html: String(result),
        toc: tocWithIds,
    };
}

// ------------------------------------------------------ directory walker

function titleCase(str) {
    return str.replace(/(^|-)(\w)/g, (_, _sep, c) => ((_ === '') ? c : ' ' + c).toUpperCase());
}

function readMeta(dirPath) {
    const metaPath = join(dirPath, '_meta.yaml');
    if (existsSync(metaPath)) {
        return YAML.parse(readFileSync(metaPath, 'utf-8')) || {};
    }
    return null;
}

async function walkDirectory(processor, dirPath, parentRoute) {
    const entries = readdirSync(dirPath).sort();
    const items = [];
    let count = 0;

    const mdFiles = entries.filter(e => e.endsWith('.md') && e !== 'index.md' && !(parentRoute === '' && e === 'home.md'));
    const indexFile = entries.includes('index.md') ? join(dirPath, 'index.md') : null;
    const subdirs = entries.filter(e => {
        const full = join(dirPath, e);
        return statSync(full).isDirectory();
    });

    // process markdown files in this directory
    for (const file of mdFiles) {
        const filePath = join(dirPath, file);
        const data = await processFile(processor, filePath);
        const route = parentRoute === '/'
            ? `/${data.id}`
            : `${parentRoute}/${data.id}`;
        const relId = relative(MARKDOWN_DIR, filePath).replace(/\.md$/, '');

        // write JSON
        const outputPath = resolve(OUTPUT_DIR, `${relId}.json`);
        mkdirSync(resolve(outputPath, '..'), {recursive: true});
        writeFileSync(outputPath, JSON.stringify({
            id: relId,
            title: data.title,
            html: data.html,
            toc: data.toc,
        }, null, 2), 'utf-8');
        console.log(`  ${relative(MARKDOWN_DIR, filePath)} → markdown/${relId}.json`);
        count++;

        items.push({
            type: 'page',
            id: relId,
            route,
            title: data.title,
            order: data.order,
        });
    }

    // process subdirectories
    for (const dir of subdirs) {
        const dirFullPath = join(dirPath, dir);
        const dirRoute = parentRoute === '/'
            ? `/${dir}`
            : `${parentRoute}/${dir}`;

        const meta = readMeta(dirFullPath);
        const indexPath = join(dirFullPath, 'index.md');
        const hasIndex = existsSync(indexPath);

        let groupTitle = titleCase(dir);
        let groupOrder = 0;
        let hasContent = false;

        if (hasIndex) {
            const indexData = await processFile(processor, indexPath);
            groupTitle = indexData.title;
            groupOrder = indexData.order;
            hasContent = true;

            const relId = relative(MARKDOWN_DIR, indexPath).replace(/\.md$/, '');
            const outputPath = resolve(OUTPUT_DIR, `${relId}.json`);
            mkdirSync(resolve(outputPath, '..'), {recursive: true});
            writeFileSync(outputPath, JSON.stringify({
                id: relId,
                title: indexData.title,
                html: indexData.html,
                toc: indexData.toc,
            }, null, 2), 'utf-8');
            console.log(`  ${relative(MARKDOWN_DIR, indexPath)} → markdown/${relId}.json`);
            count++;
        } else if (meta) {
            groupTitle = meta.title || groupTitle;
            groupOrder = meta.order ?? 0;
        }

        const result = await walkDirectory(processor, dirFullPath, dirRoute);
        count += result.count;

        const group = {
            type: 'group',
            id: dir,
            route: dirRoute,
            title: groupTitle,
            order: groupOrder,
        };
        if (hasContent) {
            group.hasContent = true;
            group.contentId = relative(MARKDOWN_DIR, indexPath).replace(/\.md$/, '');
        }
        if (result.items.length > 0) {
            group.children = result.items;
        }
        items.push(group);
    }

    // sort by order, then by title
    items.sort((a, b) => {
        if (a.order !== b.order) return a.order - b.order;
        return a.title.localeCompare(b.title);
    });

    return {items, count};
}

// ------------------------------------------------------ special: home.md

async function processHome(processor) {
    const homePath = join(MARKDOWN_DIR, 'home.md');
    if (!existsSync(homePath)) {
        return null;
    }
    const data = await processFile(processor, homePath);
    const outputPath = resolve(OUTPUT_DIR, 'home.json');
    writeFileSync(outputPath, JSON.stringify({
        id: 'home',
        title: data.title,
        html: data.html,
        toc: data.toc,
    }, null, 2), 'utf-8');
    console.log(`  home.md → markdown/home.json`);
    return {
        type: 'page',
        id: 'home',
        route: '/',
        title: data.title,
        order: 0,
    };
}

// ------------------------------------------------------ main

async function main() {
    if (!existsSync(MARKDOWN_DIR)) {
        console.error(`Markdown directory not found: ${MARKDOWN_DIR}`);
        process.exit(1);
    }

    mkdirSync(OUTPUT_DIR, {recursive: true});

    const processor = await createProcessor();

    // process home.md separately (maps to /)
    const homeItem = await processHome(processor);
    let totalCount = homeItem ? 1 : 0;

    // walk the rest of the directory tree (excluding home.md and index.md at root)
    const result = await walkDirectory(processor, MARKDOWN_DIR, '');
    totalCount += result.count;

    // build manifest: home first, then everything else
    const manifest = [];
    if (homeItem) {
        manifest.push(homeItem);
    }
    manifest.push(...result.items);

    // write manifest
    const manifestPath = resolve(OUTPUT_DIR, 'manifest.json');
    writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
    console.log(`  manifest.json`);

    console.log(`Processed ${totalCount} markdown files`);
}

main().catch(err => {
    console.error('Error processing markdown:', err);
    process.exit(1);
});
