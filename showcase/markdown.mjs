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
import {existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync} from 'fs';
import {basename, resolve} from 'path';
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeShiki from '@shikijs/rehype';
import rehypeStringify from 'rehype-stringify';
import YAML from 'yaml';

const MARKDOWN_DIR = resolve(import.meta.dirname, 'markdown');
const OUTPUT_DIR = resolve(import.meta.dirname, 'src/web/markdown');

const PF_HEADING_CLASSES = {
    h1: 'pf-v6-c-title pf-m-4xl',
    h2: 'pf-v6-c-title pf-m-2xl',
    h3: 'pf-v6-c-title pf-m-lg',
};

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

async function createProcessor() {
    return unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkFrontmatter, ['yaml'])
        .use(extractFrontmatter)
        .use(extractToc)
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, {behavior: 'wrap'})
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

    // Add slug IDs to TOC entries (matching rehype-slug output)
    const tocWithIds = toc.map(entry => ({
        id: entry.text.toLowerCase().replace(/[^\w]+/g, '-').replace(/(^-|-$)/g, ''),
        text: entry.text,
        level: entry.level,
    }));

    return {
        id: frontmatter.id,
        title: frontmatter.title || frontmatter.id,
        html: String(result),
        toc: tocWithIds,
    };
}

async function main() {
    if (!existsSync(MARKDOWN_DIR)) {
        console.error(`Markdown directory not found: ${MARKDOWN_DIR}`);
        process.exit(1);
    }

    mkdirSync(OUTPUT_DIR, {recursive: true});

    const files = readdirSync(MARKDOWN_DIR)
        .filter(f => f.endsWith('.md'))
        .sort();

    if (files.length === 0) {
        console.warn('No markdown files found.');
        return;
    }

    const processor = await createProcessor();
    let count = 0;

    for (const file of files) {
        const filePath = resolve(MARKDOWN_DIR, file);
        const data = await processFile(processor, filePath);
        const outputPath = resolve(OUTPUT_DIR, `${data.id}.json`);
        writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');
        console.log(`  ${file} → markdown/${data.id}.json`);
        count++;
    }

    console.log(`Processed ${count} markdown files`);
}

main().catch(err => {
    console.error('Error processing markdown:', err);
    process.exit(1);
});
