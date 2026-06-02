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
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const url = 'https://www.patternfly.org/components/all-components';
const selector = '.pf-v6-l-gallery .pf-v6-c-card__body img';
const imageDir = path.join(__dirname, 'src', 'web', 'images');

if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
}

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    console.log(`Loading ${url}`);
    await page.goto(url, { waitUntil: 'networkidle0' });

    console.log('Extracting images');
    const imageUrls = await page.$$eval(selector, imgs =>
        imgs.map(img => img.src)
    );
    await browser.close();
    console.log(`Found ${imageUrls.length} images`);

    let downloaded = 0;
    imageUrls.forEach((imgUrl) => {
        let fileName = path.basename(imgUrl.split('?')[0]);
        fileName = fileName.replace(/\.[a-f0-9]+(\.\w+)$/, '$1');
        const filePath = path.join(imageDir, fileName);

        https.get(imgUrl, (imgRes) => {
            const fileStream = fs.createWriteStream(filePath);
            imgRes.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                downloaded++;
                console.log(`Downloaded: ${fileName} (${downloaded}/${imageUrls.length})`);
            });
        }).on('error', (err) => {
            console.error(`Error downloading ${imgUrl}:`, err.message);
        });
    });
})();
