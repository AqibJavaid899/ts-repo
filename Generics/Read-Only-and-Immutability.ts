interface dogType {
  name: string;
  breed: string;
}

const returnDogType = (name: string, breed: string): Readonly<dogType> => {
  return {
    name,
    breed,
  };
};
const dogObject = returnDogType("caesar", "German Shepherd");
console.log(dogObject);

// dogObject.breed = "German" => Not Possible due to Readonly Type

// Immutable Variables
const object = {
  name: "John",
  dept: "SWE",
} as const;

// object.dept = "DE"; // Error because of the Readonly nature of the variable

// object.course = "course"; // Error because of the const nature of the variable
