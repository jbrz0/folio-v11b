module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "rules": {
    "import/newline-after-import": 0,
    "import/extensions": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-no-bind": 0,
  },
  "env": {
    "browser": true,
    "node": true
  }
};