export {};

//old way is long
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
}

const printVehicle = (vehicle: { name: string; year: number; broken: boolean}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);

//new way with interfaces, always use capital letter 
//Create functions that accept arguments that are typed with interfaces
//the interfaces act as gatekeepers to that function
interface Reportable {
  summary(): string;
}

const newCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Honda ${this.name} is a nice car`
  }
}

let drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Honda ${this.name} is a nice car`
  }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(newCivic);
printSummary(drink);