![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

#NOTES

####11 TS Example

- ts-node module is for running tsc & node together using `ts-node index.js`



####12 Features


####13 Maps

- npm i -g parcel-bundler
quick way of compiling .ts inside html files.

- to run inside browser type: 'parcel index.html'

get type definition files from Definitely Typed
npm i @types/[module-name]


####14 SortingAlgo

- 'tsc index.ts' :compile typescript file: 
- 'tsc --init' :customise compiler with tsconfig.json:   (can simply run 'tsc' after setting outDir and rootDir)
- 'tsc -w' :also watch for changes;

Manually running the JS with node :
- node build index.js

Automatically:
//nodemon: allows us to rerun node every time there is a change, it executes js.
//concurrently: runs multiple scripts at the same time
- npm install nodemon concurrently


package.json:
```  "scripts": {
        "start:build": "tsc -w",
        "start:run": "nodemon build/index.js",
        "start": "concurrently npm:start:*"
      },
```
