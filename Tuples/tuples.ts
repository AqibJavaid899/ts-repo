type ThreeDCoordinates = [p1: number, p2: number, p3: number];

const addCoordinates = (
  c1: ThreeDCoordinates,
  c2: ThreeDCoordinates
): ThreeDCoordinates => {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
};

console.log(
  "\nFinal Coordinates are : ",
  addCoordinates([12, 14, 16], [23, 21, 19])
);

// Setter and Getter functions
const useStateFunction = (
  str: string
): [() => string, (str: string) => void] => {
  let value = str;

  return [() => value, (data: string) => (value = data)];
};

const [getter1, setter1] = useStateFunction("initial");
const [getter2, setter2] = useStateFunction("jack");

console.log(getter1());
console.log(getter2());

setter1("modified");
console.log("\n");

console.log(getter1());
console.log(getter2());
