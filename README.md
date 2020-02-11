![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

# NOTES

#### 11 TS Example

- ts-node module is for quickly compiling & running a typescript file with tsc & node using `ts-node index.ts`

#### 12 Features

- basic run through of types

#### 13 Maps

- npm i -g parcel-bundler
quick way of compiling .ts inside html files.

- to run inside browser type: 'parcel index.html'

get type definition files from Definitely Typed
npm i @types/[module-name]


#### 14 SortingAlgo

- 'tsc index.ts' :compile typescript file: 
- 'tsc --init' :customise compiler with tsconfig.json:   (can simply run 'tsc' after setting outDir and rootDir)
- 'tsc -w' :also watch for changes;

Manually running the JS with node :
- node build index.js

Automatically:
- nodemon: allows us to rerun node every time there is a change, it executes js.
- concurrently: runs multiple scripts at the same time
- npm install nodemon concurrently

package.json:
```  
      "scripts": {
        "start:build": "tsc -w", //watch and compile
        "start:run": "nodemon build/index.js", //run index.js with nodemon 
        "start": "concurrently npm:start:*" //run all npm:start scripts concurrently
      },
```

## index.ts will use Sorter(has an interface) which uses NumberCollection/StringCollection/anyCollection class as long as it has the methods for that particular collection and how to compare,sort,getlength of that type of data.

## Intefaces are useful because you can setup a contract between a parent class and other classes explaining what methods they need to easily expand the systems functionality and reuse the parent's logic.
- Use when we have very different objects we want to work together.
- Loose coupling (more modular & reusable)

## Inheritance/Abstract Classes: 
- Use when we are trying to build up a definition of an object.
- Strongly couples classes together (pointless without eachother)