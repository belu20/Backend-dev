const user = {
  name: "Firdaus",
  "last name": "ihsan",
  age: 24,
};

const { name, ["last name"]: lastName, isMale = false } = user;
console.log(isMale);
