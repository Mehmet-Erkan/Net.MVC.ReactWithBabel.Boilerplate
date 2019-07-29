# Boilerplate to create a .Net web project with react and babel

### References
- [Video Tutorial React and Babel](https://www.youtube.com/watch?v=bnFgGYooDCM)
- [Tutorial Babel und TypeScript](https://medium.com/@francesco.agnoletto/how-to-set-up-typescript-with-babel-and-webpack-6fba1b6e72d5)

## Create a react folder inside the script folder

- `npm init`
- `npm install webpack webpack-cli --save-dev`
- `npm install react react-dom --save`
- `npm install typescript --save-dev`
- `npm install @babel/core babel-loader  @babel/preset-react @babel/preset-typescript  @babel/plugin-proposal-class-properties  @babel/plugin-proposal-object-rest-spread --save-dev`

> Make shure you have "babel-loader": "^7.1.5", instead of 8 by default.

- `npm install css-loader style-loader --save-dev`
- `npm install html-webpack-plugin --save-dev`
- optional `npm install webpack-dev-server --save-dev`
- optional `npm install tslint tslint-immutable --save-dev`

Types
- `npm install @types/react @types/react-dom`


## Create webpack.config.js file
Webpack is simply a module bundler. While it can bundle almost any resource or asset, it is most commonly used to bundle JavaScript files for use in a browser, in this case it will be bundling or .tsx and .ts files into .js so it can be served

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

## TypeScript

Install types for react
- `npm install --save-dev @types/react @types/react-dom`

TypeScript loader for dev
- `npm install --save-dev typescript ts-loader source-map-loader`

Both of these dependencies will let TypeScript and webpack play well together. ts-loader helps Webpack compile your TypeScript code using the TypeScript’s standard configuration file named tsconfig.json. source-map-loader uses any sourcemap outputs from TypeScript to inform webpack when generating its own sourcemaps. This will allow you to debug your final output file as if you were debugging your original TypeScript source code. [Source](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)

### Add TypeScript configuration file
Simply create a new file in your project root named tsconfig.json and fill it with the following contents

```JSON
{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "commonjs",
        "target": "es6",
        "jsx": "react"
    }
}
```
