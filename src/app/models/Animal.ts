export class Animal {
  name: string;
  age: number;
  fly: boolean;
  softFood: boolean;
  isFed: boolean;
  constructor(
    name: string,
    age: number,
    fly: boolean,
    softFood: boolean,
    isFed: boolean
  ) {
    this.name = name;
    this.age = age;
    this.fly = fly;
    this.softFood = softFood;
    this.isFed = isFed;
  }
}
