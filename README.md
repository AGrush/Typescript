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

MAKE CODE REUSABLE BY TURNING CLASS INTO ABSTRACT CLASS, THEN IMPORTING & EXTENDING THE MORE GENERAL ABSTRACT CLASS & ADDING CUSTOMISED FUNCTIONALITY IN ANOTHER FILE.

#### Generics: 
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
- class Window |
open: boolean |
toggleOpen(): void |
height: number |
width: number |
area(): number |
- class Wall |
color: string |
height:number |
width: number |
area(): number |
- - To avoid code duplication we create a class that shares some of the properties:
- class Rectangle | 
height: number |
width: number |
area(): number |
- class Wall extends Rectangle |
color: string |
- class Window extends Rectangle |
open: boolean |
toggleOpen(): void |
- - Problem is if we want a circular window we will need two new classes and duplicate some of the rectangular window code.


<img src="https://i.postimg.cc/d1fkcZhY/1.png" width="100%"/>


### Composition

- More modular
- This way there is no code repetition compared to the inheritance way.

Create a class for Wall, Window and have a Dimensions: Shape reference object, which references a particular shape, such as Rectangle or Circle. The Area() method would be deleagated to each shapes class through the dimensions property and defined with an interface. Therefore all shape types will need at least an area() method. 

<img src="https://i.postimg.cc/mZcVzQN7/2.png" width="100%"/>

<img src="https://i.postimg.cc/7Pp9gfmd/3.png" width="100%"/>


## Final structure of match report app.

<img src="https://i.postimg.cc/mDY1rYVY/4.png" width="100%"/>



### notes
- static methods on classes can be called off the class
- regular methods on classes can be called off an instance of the class

## 16 Building a web framework

### Setup:

> npm install -g parcel-bundler

- add index.html and index.ts and run:
> parcel index.html

<img src="https://i.ibb.co/H2bd2jf/Screen-Shot-2020-05-11-at-8-04-38-PM.png" width="100%"/>

<img src="https://i.ibb.co/wwpDLWp/2.png" width="100%"/>
<img src="https://i.ibb.co/7jPWPsJ/3.png" width="100%"/>


## 18 React/Redux

basic index.tsx setup no different
```js
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <div>Hi there</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
```

- create interface for class component props
  
#### redux

> npm install redux react-redux axios redux-thunk
> npm install @types/react-redux




## Redux flow of adding a new action ‘deleteTodo’:

### ADD AN ACTION

actions/types.ts
- Add a new ‘deleteTodo’ to the enum ActionTypes

actions/todos.ts
- Create interface (DeleteTodosAction) that models a todos action structure with type: ActionTypes.deleteTodo and payload: whatever you need  

actions/types.ts
- Import the new ‘DeleteTodosAction’ interface
- Add ‘DeleteTodosAction’ to the TodoActions union.

actions/index.ts
- add Export * from ‘./todos’

Reducers/todos.ts
- Import the unified ’TodosAction’ interface and use it 

App.tsx
- Import deleteTodo from the actions index file (as with everything)
- Create the onTodoClick method which calls this.props.deleteTodo(id)
- Add ‘deleteTodo’ to the connected export of App.
- Add ‘deleteTodo’ to AppProps interface

