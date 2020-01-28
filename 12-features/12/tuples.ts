export {};

//very similar to an array (but not as good as simple js objects)
//multiple different properties to describe one thing
/*
DRINK:
  color: brown,
  carbonated: true,
  sugar, 40
*/

let drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

//new type alias for our drink tuple
type Drink = [string, boolean, number];


//the order in a tuple has a very specific meaning
const pepsi: [string, boolean, number] = ['brown', true, 40]
const sprite: Drink = ['brown', true, 40]