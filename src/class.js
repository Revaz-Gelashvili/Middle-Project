"use strict";
class Car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getInfo() {
        return `${this.name} - ${this.price}`;
    }
}
new Car("BMW", 100000).getInfo();
//! public = Default value of variable
//! private or # = Can call only in variable
//! protected = Similar like Private, but can call also in extend class
