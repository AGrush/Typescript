![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

# NOTES

## 11 TS Example

- ts-node module is for quickly compiling & running a typescript file with tsc & node using `ts-node index.ts`

## 12 Features

- basic run through of types

## 13 Maps

- npm i -g parcel-bundler
quick way of compiling .ts inside html files.

- to run inside browser type: 'parcel index.html'

get type definition files from Definitely Typed
npm i @types/[module-name]


## 14 SortingAlgo

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

#### index.ts will use Sorter(has an interface) which uses NumberCollection/StringCollection/anyCollection class as long as it has the methods for that particular collection and how to compare,sort,getlength of that type of data.

### Intefaces are useful because you can setup a contract between a parent class and other classes explaining what methods they need to easily expand the systems functionality and reuse the parent's logic.
- Use when we have very different objects we want to work together.
- Loose coupling (more modular & reusable)

#### Inheritance/Abstract Classes: 
- Use when we are trying to build up a definition of an object.
- Strongly couples classes together (pointless without eachother)

## 15 CSV Data statistical analisys

#### Project Setup
> npm init -y

> tsc --init

> npm install nodemon concurrently

- create src&build files
- create index.ts in src
- change tsconfig.json outDir and rootDir to './build' and './src'

#### Loading CSV files with Node fs module
- https://nodejs.org/docs/latest/api/fs.html

Use of a node library module means you have to install node types:
> npm install @types/node

- - MAKE CODE REUSABLE BY TURNING CLASS INTO ABSTRACT CLASS, THEN IMPORTING & EXTENDING THE MORE GENERAL ABSTRACT CLASS & ADDING CUSTOMISED FUNCTIONALITY IN ANOTHER FILE.

- Generics: 
```ts
class HoldANything<T>{
  data: T;

  add(a: T): T{
    return a;
  }
}

const holdNumber = new HoldAything<number>();
holdNumber.data = 123;
holdNumber.add(10);

const holdString = new HoldAnything<string>();
holdString.data = 'asdflsdf';
```

## - Inheritance vs Composition
-     'is a'   vs  'has a'

### Inheritance:
- class Window
open: boolean
toggleOpen(): void
height: number
width: number
area(): number
- class Wall
color: string
height:number
width: number
area(): number
- - To avoid code duplication we create a class that shares some of the properties:
- class Rectangle
height: number
width: number
are(): number
- class Wall extends Rectangle
color: string
- class Window extends Rectangle
open: boolean
toggleOpen(): void
- - Problem is if we want a circular window we will need two new classes and duplicate some of the rectangular window code.


![alt text](https://i.postimg.cc/DJqyqZQj/1.png 'Logo Title Text 1')

### 
- 