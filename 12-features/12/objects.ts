const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

//with destructuring you have to write out the expected structure again 
const { age }: { age: number } = profile;
export {};


//nested object destructuring
const { coords: {lat, lng} }: { coords: { lat: number, lng: number}} = profile;