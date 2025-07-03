"use strict";
function getChannel(name) {
  return { name: "RED Group" };
}
const getChannelName = (name) => {
  return { name: "RED Group" };
};
const getNumbers = (...numbers) => {
  return numbers;
};
function getCar(name, price) {
  return price ? `Car Name: ${name}, Car Price: ${price}` : `Car Name: ${name}`;
}
const car1 = getCar("BMW");
const car2 = getCar("BMW", 500000);
// const car3 = getCar("BMW", 500000, "Mersedes");
