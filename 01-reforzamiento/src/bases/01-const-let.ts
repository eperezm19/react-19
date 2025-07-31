const firstName: string = "Juan";
const lastName: string = "Perez";
const age: number = 20;

const containsLetterJ: boolean = firstName.includes("J");

let dice: number = 1;
dice = 2;

const person = {
  firstName,
  lastName,
  age,
};

console.log({ person, dice, containsLetterJ });
