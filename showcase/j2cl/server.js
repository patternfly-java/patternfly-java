const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const path = require('path');

const app = express();
const port = process.argv[2] || 8234;
const parcelPort = process.argv[3] || 1234;

// 1. Proxy Parcel's dev server
app.use(
    '/parcel-assets',
    createProxyMiddleware({
        target: 'http://localhost:$(parcelPort)',
        changeOrigin: true,
        ws: true, // Enable WebSocket proxying if you use it
        pathRewrite: {
            '^/parcel-assets': '',
        },
        logLevel: 'debug',
    })
);

// 2. Serve static files
app.use(express.static(path.join(__dirname, 'target', 'showcase')));


// 3. J2CL routes
app.get(/.*showcase\.js$/, (req, res) => {
    res.sendFile(path.resolve(__dirname, 'target', 'showcase', 'showcase.js'));
});
app.get(/.*bundle\.js$/, (req, res) => {
    const filename = path.basename(req.url);
    res.sendFile(path.resolve(__dirname, 'target', 'showcase', filename));
});
app.get('/{*pre}/sources/{*post}', (req, res) => {
    const source = req.url.substring(req.url.indexOf('sources/'));
    res.sendFile(path.resolve(__dirname, 'target', 'showcase', source));
});

// 4. SPA fallback
app.get('/{*any}', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'target', 'showcase', 'dev.html'));
});

app.listen(port, () => {
    console.log(`Development server running on http://localhost:${port}`);
    console.log(`Proxying Parcel on http://localhost:${parcelPort}`);
});
