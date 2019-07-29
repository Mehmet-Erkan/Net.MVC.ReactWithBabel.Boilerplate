# Boilerplate to create a .Net web project with react and babel

### References
- [Video Tutorial React and Babel](https://www.youtube.com/watch?v=bnFgGYooDCM)
- [Tutorial Babel und TypeScript](https://medium.com/@francesco.agnoletto/how-to-set-up-typescript-with-babel-and-webpack-6fba1b6e72d5)

## Create a react folder inside the script folder

- `npm init`
- `npm install --save react react-dom`
- `npm install --save-dev babel-core babel-loader webpack babel-preset-env babel-preset-react`

> Make shure you have "babel-loader": "^7.1.5", instead of 8 by default.

## Create webpack.config.js file

```JavaScript
"use strict";
const path = require('path');

module.exports = {
    context: __dirname,
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    }
}
```

## Modify package.json
Enter the webpak as run script 

```JavaScript
"scripts": {
    "webpack": "webpack --mode development",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

## Create starting js file
app.js with some ES6 code like
`const x = "this is new feature of ES6";`

## Run sanity check
`npm run webpack`

Your output will be located in the Scripts/React/dist folder. Include this folder with the bundle.js into your solution
Please not the ES6 is not transpiled to ES5 yet. Need to enable Babel

## Enable Babel in the webpack.config.js

```JavaScript
module.exports = {
    context: __dirname,
    entry: "./app.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                **test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env', 'babel-preset-react']
                    }
                }**
            }
        ]
    }
}
```