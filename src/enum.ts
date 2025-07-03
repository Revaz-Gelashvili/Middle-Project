enum EnumRoles {
  ADMIN,
  GUEST,
  USER,
}

const enum EnumColors {
  black,
  pink,
  green,
}

interface IUser2 {
  role: EnumRoles;
  color: EnumColors;
}

const person: IUser2 = {
  role: EnumRoles.ADMIN,
  color: EnumColors.black,
};
