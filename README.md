# Installation
**In project directory**  
`npm i`

# Usage
**Development**  
`npm run dev`

**Build**  
`npm run build`

**Production**  
`npm start`

# Deployment
1) Optionally remove `.html` file extensions in links to hide in URL bar
2) On your server install forever globally `sudo npm install forever -g`
3) On your server, in your project directory run `forever start -c "npm start" ./`

**Debug deployment**  
To check if `forever` processes are running run `forever list`  
To stop `forever` processes run `forever stop`

**Digital Ocean deployment**  
To deploy to digital ocean there is 2 files that will help in this repo.  
- `README-DO.md`  
is a list of commands on a fresh Linux install of a digital ocean droplet  
- `README-nginx.md`  
is a sample Nginx config with an installation guide

# Dev Deployment
Install **Now CLI** for easy demo  
`sudo npm install -g now`  
`now`

## Adding HTML Pages
1) Create html page in `/app`
2) Add HTMLWebpackPlugin variable under the `HTML Pages` section in `webpack.config.js`
3) Add variable in list of `plugins` at the bottom of `webpack.config.js`
4) Add new route in `server.js` (for production)

## Adding React Components to HTML
`index.js` is the file to `import` and `render` all ReactJS components to their `#div`s

## Editing Metadata & Analytics
Metadata component is in `app/js/components/HeadInfo.js`  
Editable information is located in `app/js/index.js`  
  
To add different metadata to another page duplicate `Page Header Info` section in `index.js` file - then change the id selector in both `index.js` and `HTML` page template  
  
To add different metadata edit the tracking code under `Analytics Info` inside `index.js`