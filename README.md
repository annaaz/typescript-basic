# **SOFTWARE ENGGINER NOTE**
# Essential Progamming : 
#### **Typescript Basic**

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This page contain basic knowledge typescript. and few setup to run environment 
There also more principlies in to discover more. 

Initiate environement setup guide : 
1. Make sure this available (Node , Npm /Yarn)
2. Init project with `npm init -y `
2. Install typescript with `yarn install typescript -D`
3. Add script in package.json for compile typescript and run nodemon for watch server   "scripts": {
    "tsc": "rm -rf buiild/ && tsc",
    "ts": "rm -rf buiild/ && tsc -w",
    "dev": "nodemon ./build/module/Product.js"
  },
4. Install Nodemon 
5. Add typescript configuration `node_module/.bin/tsc --init` since we want setup typescript locally (not global) , in 'tsconfig.json' adjust the parameter like outdir for output directory , and `include` for add new folder want to compile `  "include": ["./src/"]`
6. Adjust the execute file in package.json `"dev": "nodemon ./build/module/Product.js"`
