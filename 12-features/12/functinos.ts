//functions need inputs annotating, return is inferenced (but we still annotate because not returning inside function needs an error)
const add = (a: number, b: number): number => {
  return a + b; 
}


function divide(a: number, b:number): number {
  return a/b;
}

const multiply = function (a:number,b:number):number {
  return a * b;
}

//void means function doesnt return anything (or null or undefined)
const logger = (message: string):void => {
  console.log(message);
}

//never actually return anything (because of throw) (very rare as usually still have return)
const throwError = (message: string): never => {
  throw new Error(message);
}


//destructuring
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = ({date, weather}: { date: Date, weather: string}):void => {
  // var { date, weather } = todaysWeather;
  console.log(date);
  console.log(weather)
}

logWeather(todaysWeather);