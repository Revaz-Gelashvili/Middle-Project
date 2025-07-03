class Car {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getInfo(): string {
    return `${this.name} - ${this.price}`;
  }
}

new Car("BMW", 100000).getInfo();

//! public = Default value of variable
//! private or # = Can call only in variable
//! protected = Similar like Private, but can call also in extend class
