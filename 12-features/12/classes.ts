export {};

//Blueprint to create an object with some fields (values) and methods (functions) to represent a 'think'

//1111111 How Classes work with methods (functions) to reprsent a thing.

// super/parent class
class Vehicle {

  //initialise a variable inside a class (can be empty) THEN
  color: string = 'red';
  //initialise a variable inside the constructor (class will expect an argument)
  //the constructor is always instantly executed when we create an instance of a class
  constructor(color: string) {
    this.color = color;
  }

  //a quicker way of doing the above is simply:
  /*
  constructor(public color: string) {}
  */
  
  drive(): void {
    console.log('chugga chugga');
  }

  protected beep(): void {
    console.log('beep')
  }

  private honk(): void {
    console.log('honk')
  }

  startDrivingProcess(): void {
    this.honk();
  }
}

//inheritance.. child class
class Car extends Vehicle {
  //no public b4 color as we do not want to reassign it again.
  constructor(public wheels: number, color: string) {
    //super('red') OR
    //pass the color from during instantiation to the super
    super(color);
  }

  drive(): void {
    console.log('chugga chugga2')
  }

  beep(): void {
    console.log('beep2')
  }
}

const car = new Car(4, 'red');
car.drive();
car.beep();
//car.honk();
car.startDrivingProcess();

const vehicle = new Vehicle('orange');
console.log(vehicle.color)

//MODIFIERS: not for security// its to restrict other developers.
// Public: This method can be called anywhere
// Protected: This method can be called by other methods in `this` class, or by other methods in child classes (but not instances of the class)
// Private: This method can only be called by other methods in `this` class



//2222222 Define a set of fileds (values) and methods (functions) to represent a thing

