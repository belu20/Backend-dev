const complexUser = {
  name: "ihsan",
  email: "isan@gmail.com",
  preference: {
    newsletter: true,
    notification: "Weekly",
    address: {
      city: "New York",
      zip: "10001",
    },
  },
};

//object frezee
Object.freeze(complexUser);

complexUser.email = "isa@gmail.com";
// complexUser.preference.notification = "Every Day"; //jika tidak menggunakan rekursi frezee hanya berlaku di tingkat pertama
console.log(complexUser);
// console.log(complexUser.preference.notification);

//rekursi object frezee

function deepFrezee(objects) {
  Object.keys(objects).forEach((name) => {
    const prop = objects[name];
    if (typeof prop == "object" && prop !== null) {
      deepFrezee(prop);
    }
  });

  return Object.freeze(objects);
}

deepFrezee(complexUser);
complexUser.preference.notification = "Every Day";
console.log(complexUser.preference.notification);
