// Typescript Function with Functions

const callbackFunc = (str: string, callback: (s: string) => void): void => {
  callback(str);
};

callbackFunc("Aqib Javaid", (s: string) => console.log("Hey Aqib!!"));

type ArrayMutator = (v: number) => number;

const arrayMutateFunc = (arr: number[], muatator: ArrayMutator): number[] => {
  return arr.map((num) => muatator(num));
};

console.log(arrayMutateFunc([1, 2, 3, 4], (v: number) => (v * 10) % 8));

// Function returning Function (JS Closure)
type adderFunction = (n: number) => number;

const adderFunction = (v: number): adderFunction => {
  return (n: number) => v + n;
};

const adder = adderFunction(12);

console.log(adder(39));
