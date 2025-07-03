interface IUserAge {
  age: number;
}

interface IUser extends IUserAge {
  name: string;
  email: string;
}

type TypePerson = {
  age: number;
};

type TypeUser = {
  name: string;
  email: string;
} & TypePerson;

const userInfo: IUser = {
  email: "347835@gmail.com",
  name: "Max",
  age: 20,
};

const users: IUser[] = [
  {
    age: 10,
    email: "32424@gmail.com",
    name: "Den",
  },
];
