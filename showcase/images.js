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

// Ensure the images directory exists
if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
}

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    console.log('Loading page...');
    await page.goto(url, { waitUntil: 'networkidle0' });

    console.log('Extracting image URLs...');
    const imageUrls = await page.$$eval(selector, imgs =>
        imgs.map(img => img.src)
    );

    await browser.close();

    console.log(`Found ${imageUrls.length} images`);

    // Download each image
    let downloaded = 0;
    imageUrls.forEach((imgUrl) => {
        let fileName = path.basename(imgUrl.split('?')[0]);
        // Remove ID pattern from filename (e.g., "name.abc123.png" -> "name.png")
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
