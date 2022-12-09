interface Coordinates {
  x_axis: number;
  y_axis: number;
}

function convertToCoordinates(obj: Coordinates): Coordinates;
function convertToCoordinates(x: number, y: number): Coordinates;
function convertToCoordinates(x: string): Coordinates;

function convertToCoordinates(x: unknown, y?: unknown): Coordinates | void {
  let coordinates: Coordinates = {
    x_axis: 0,
    y_axis: 0,
  };

  if (typeof x === "object") {
    coordinates = {
      ...(x as Coordinates),
    };
  } else if (typeof x === "string") {
    (x as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coordinates[key as "x_axis" | "y_axis"] = parseInt(value, 10);
      console.log("Value is : ", value);
    });
  } else {
    coordinates = {
      x_axis: x as number,
      y_axis: y as number,
    };
  }

  return coordinates;
}

console.log(convertToCoordinates(12, 14));
console.log("\n\n", convertToCoordinates({ x_axis: 20, y_axis: 49 }));
console.log("\n\n", convertToCoordinates("x_axis: 20, y_axis: 49"));
