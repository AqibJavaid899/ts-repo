const printIngredient = (
  item1: string,
  item2: string,
  restOfItems?: string
): string => {
  return `${item1} | ${item2} ${restOfItems ? `| ${restOfItems}` : ""} `;
};
console.log("\n");
console.log(printIngredient("Flour", "Margarine"));

// User Object with Possible Null Values
interface userObject {
  id: number;
  name: string;
  additionalInfo?: {
    email?: string;
  };
}

const printUserAdditionalInfo = (obj: userObject): string => {
  return obj?.additionalInfo?.email ?? "Data is Missing";
};

const userInfo: userObject = {
  id: 1234,
  name: "John Doe",
  additionalInfo: {
    email: "john.doe@gmail.com",
  },
};

console.log(printUserAdditionalInfo(userInfo));

// Optional Callback Function
const optionalCallBackFunction = (str: string, callback?: () => void): void => {
  let value = str;
  callback?.();
};

optionalCallBackFunction("data");
