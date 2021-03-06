// TYPE ANNOTATIONS (NOT REQUIRED AS TYPE INFERENCE DOES ALL THIS)
// IF we do our declaration ( let apples ) and initialisation ( = 5) on the same line, Typescript will figure out what type that value is with type inference.

//// Primitive types

let apples: number = 5;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;


////Built in objects

//only allow now to be a date
let now: Date = new Date();

//array type annotation
let colors: string[] = ['yred','green','blue'];
let myNumber: number[] = [1,2,3,4];
let truths: boolean[] = [true, false, true]

//classes type annotations
class Car {

}
let car: Car = new Car();

//object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}


// Function type anotation (function:argument)=>returnavalue
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// WHEN TO USE ANNOTATIONS
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x:number; y:number} = JSON.parse(json);
console.log(coordinates); //{x: 10, y:20};


// 2) When we declare a variable on one line and initialise it later
let words= ['red','green','blue']
let foundWord: boolean;

for (let i=0; i<words.length; i++){
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//3) Variable who's type cannot be infered
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false;

for (let i=0; i<numbers.length; i++){
  if(numbers[i] > 0){
    numberAboveZero = numbers[i];
  }
}