<img src="https://cdn.rawgit.com/brz0/folio-v11/master/src/img/logo-dark.svg" alt="alt text" width="350">

<img src="https://img.shields.io/npm/l/express.svg"> <img src="https://img.shields.io/david/strongloop/express.svg">

Personal website portfolio template - v2

[**http://justinbrazeau.com**](http://justinbrazeau.com)


<img src="http://i.imgur.com/XVKqNQF.jpg">

# Dependencies

* Webpack
* Babel
* NodeJS
* ReactJS
* Sass

# Installation

```bash
git clone <repo>
yarn install
yarn start
```

# Usage
We need to rum pm2 from node_modules like this:
node_modules/pm2/bin/pm2 start server.js
node_modules/pm2/bin/pm2 stop server.js

So to run with build:
npm run build && node_modules/pm2/bin/pm2 start server.js

# Lisence

This project is licensed under the MIT License - see the LICENSE file for details
