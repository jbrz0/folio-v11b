const express = require('express');
const path = require('path');
const sitemap = require('express-sitemap')();

const app = express();

app.use(express.static(path.join(__dirname, 'build'), {
  extensions: ['html'],
}));

// Set to production
process.env.NODE_ENV = 'production';

// Generate XML Sitemap
sitemap.generate(app);
sitemap.XMLtoFile();

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/about.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/build/404.html'));
});

app.listen(8888);

// Production server
// viewed at http://localhost:8888
