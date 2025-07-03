"use strict";
const user = {
    name: "Revaz",
    lastName: "Gelashvili",
};
const adress = {
    age: 20,
    adress: "Tbilisi",
};
let common;
common = {
    ...user,
    ...adress,
};
