module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "plugins": [
    "vue",
  ],
  "extends": [
    "eslint:recommended",
    "plugin:vue/strongly-recommended",
  ],
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": "2018",
    "sourceType": "module",
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
  },
  "globals": {
    "require": true,
  },
};


