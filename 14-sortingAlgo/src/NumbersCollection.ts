import { Sorter } from './Sorter'

export class NumbersCollection extends Sorter {
  // data: number[];
  // constructor(data: number[]){
  //     this.data = data;
  // }     //EQUIVALENT TO://
  
  constructor(public data: number[]){
    super();
  }

  //getter to not have to call the function, can use as a property
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = leftHand;
  }
}
