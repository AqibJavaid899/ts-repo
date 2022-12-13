interface userType {
  id: number;
  name: string;
  email?: string;
}

// Partial and Required Utility Types
type optionalUserType = Partial<userType>;
type requiredUserType = Required<userType>;

const overrideUserType = (
  originalUser: userType,
  replacingUser: optionalUserType
): userType => {
  return {
    ...originalUser,
    ...replacingUser,
  };
};

console.log(
  overrideUserType({ id: 101, name: "John" }, { email: "jdoe123@gmail.com" })
);

// Picking different fields using Pick Utility Type
type userWithoutId = Pick<userType, "name" | "email">;

// Extracting User Object using Record Type
const mapById = (
  userObject: userType[]
): Record<userType["id"], Omit<userType, "id">> => {
  return userObject.reduce((acc, obj) => {
    const { id, ...rest } = obj;
    return {
      ...acc,
      [id]: rest,
    };
  }, {});
};

console.log(
  "\n",
  mapById([
    { id: 101, name: "John" },
    { id: 102, name: "Geroge" },
  ])
);
