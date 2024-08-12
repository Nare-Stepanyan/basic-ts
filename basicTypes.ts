/*
### Exercise 1: Basic Types and Functions
Task: Define variables of different basic types (number, string, boolean) and write functions that take these types as parameters and return a value.
*/

const firstName: string = "Nare";
const age: number = 99;
const female: boolean = true;

const addLastname = (firstName: string): string => {
  return `${firstName} Doe`;
};

const multiplyByTwo = (num: number): number => {
  return num * 2;
};

const defineGender = (isFemale: boolean): string => {
  return isFemale ? `Gender is female` : `Gender is male`;
};