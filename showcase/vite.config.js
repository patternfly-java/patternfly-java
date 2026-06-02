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
import {defineConfig} from 'vite';
import {resolve} from 'path';
import {existsSync, createReadStream} from 'fs';
import {execSync} from 'child_process';

const j2clDir = resolve(__dirname, 'target/showcase');
const markdownDir = resolve(__dirname, 'markdown');

function serveJ2cl() {
    return {
        name: 'serve-j2cl',
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                if (req.url.match(/showcase\.js$|\.bundle\.js$/) || req.url.includes('/sources/')) {
                    const filePath = resolve(j2clDir, req.url.replace(/^\//, ''));
                    if (existsSync(filePath)) {
                        res.setHeader('Content-Type', 'application/javascript');
                        createReadStream(filePath).pipe(res);
                        return;
                    }
                }
                next();
            });
        }
    };
}

function markdownPlugin() {
    let reprocessing = false;

    function reprocess() {
        if (reprocessing) return;
        reprocessing = true;
        try {
            execSync('node markdown.mjs', {stdio: 'inherit'});
        } finally {
            reprocessing = false;
        }
    }

    function isMarkdownSource(file) {
        return file.startsWith(markdownDir) && (file.endsWith('.md') || file.endsWith('.yaml'));
    }

    return {
        name: 'markdown',
        buildStart() {
            reprocess();
        },
        configureServer(server) {
            server.watcher.add(markdownDir);
            for (const event of ['change', 'add', 'unlink']) {
                server.watcher.on(event, (file) => {
                    if (isMarkdownSource(file)) {
                        reprocess();
                    }
                });
            }
        }
    };
}

export default defineConfig({
    root: 'src/web',
    plugins: [serveJ2cl(), markdownPlugin()],
    server: {
        port: 1234,
        open: '/',
        fs: {
            allow: [resolve(__dirname, '..')]
        },
        watch: {
            ignored: ['!**/target/showcase/**']
        }
    },
    build: {
        outDir: resolve(__dirname, 'target/showcase'),
        emptyOutDir: false,
        cssMinify: 'esbuild',
        chunkSizeWarningLimit: 2200,
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'src/web/index.html'),
                '404': resolve(__dirname, 'src/web/404.html')
            }
        }
    }
});
