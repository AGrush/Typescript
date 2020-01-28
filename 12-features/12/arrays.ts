export {};

const carMakers = ['ford', 'toyota', 'chevy'];

//must add type annotation to emptty arrays to avoid any()
const carMakersInferred = [];
const carMakersAnnotated: string[] = [];

//complex array
const dates = [new Date(), new Date()]

//type annotation for two dimensional array (only nexessary when empty)
const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

// Help with inference when extracting values
const car2 = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible numbers
//carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// Flexible types
const importantDatesInferred = [new Date(), '2030-10-10']
const importantDatesAnnotated: (Date | string)[] = [new Date()]