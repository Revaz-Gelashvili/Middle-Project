type typeUser = {
  name: string;
  lastName: string;
};

type typeAdress = {
  age: number;
  adress: string;
};

const user: typeUser = {
  name: "Revaz",
  lastName: "Gelashvili",
};

const adress: typeAdress = {
  age: 20,
  adress: "Tbilisi",
};

let common: typeUser & typeAdress;

common = {
  ...user,
  ...adress,
};
