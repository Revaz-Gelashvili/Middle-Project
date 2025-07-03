const inputElement = document.querySelector("input");
const value1 = (inputElement as HTMLInputElement).value;
const value2 = (<HTMLInputElement>inputElement).value;

const getLenght = (text: string | null) => {
  return text!.length;
};

getLenght(null);
