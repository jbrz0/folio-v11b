const express = require('express');
const path = require('path');
const sitemap = require('express-sitemap')();

const app = express();

app.use(express.static(path.join(__dirname, 'build'), {
  extensions: ['html'],
}));

sitemap.generate(app);

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/about.html'));
});

app.listen(8888);

// Production server
// viewed at http://localhost:8888
