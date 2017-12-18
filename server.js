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

app.get('/chart-suite', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/chart-suite.html'));
});

app.get('/terminal-ui', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/terminal-ui.html'));
});

app.get('/homes-from-the-future', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/homes-from-the-future.html'));
});

app.get('/odd-scenes', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/odd-scenes.html'));
});

app.get('/walltagged', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/walltagged.html'));
});

app.get('/gold-tooth', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/gold-tooth.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/build/404.html'));
});

app.listen(5000);

// Production server
// viewed at http://localhost:5000
