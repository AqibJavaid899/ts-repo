// Defining a simple greeting function
const greeting = (name: string): string => {
  return `Hey, ${name}! Good Morning to you!`;
};

console.log(greeting("Sam"));

// Array Mutata function
const mutateArray = (arr: number[]): number[] => {
  return arr.map((i) => i * 12);
};

console.log("\nMutated Array is : ", mutateArray([2, 4, 6, 8, 10]));

// Format Function

const format = (str: string, age: string | number): string => {
  return `\nUser Name is ${str} and Age is ${age}`;
};

const formatFunction = (str: string, age: string | number): void => {
  console.log(format(str, age));
};

formatFunction("Clarke", 30);

// Take user information and return the object

interface userObject {
  id: number;
  name: string;
  designation: string;
}

const convertInfoToObject = (
  id: number,
  name: string,
  designation: string
): userObject => {
  return {
    id,
    name,
    designation,
  };
};

console.log("\nUser Object is : ", convertInfoToObject(1, "prateek", "SWE"));
