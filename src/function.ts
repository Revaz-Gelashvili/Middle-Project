type TypeChannelReturn = {
  name: string;
};

function getChannel(name: string): TypeChannelReturn {
  return { name: "RED Group" };
}

type TypeChannelFunction = (name: string) => TypeChannelReturn;

const getChannelName: TypeChannelFunction = (name) => {
  return { name: "RED Group" };
};

const getNumbers = (...numbers: number[]) => {
  return numbers;
};

// overload

function getCar(name: string): string;
function getCar(name: string, price?: number): string;

function getCar(name: string, price: number): string {
  return price ? `Car Name: ${name}, Car Price: ${price}` : `Car Name: ${name}`;
}

const car1 = getCar("BMW");
const car2 = getCar("BMW", 500000);
// const car3 = getCar("BMW", 500000, "Mersedes");
