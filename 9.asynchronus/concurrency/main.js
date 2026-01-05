/*
 Promise.all akan memasuki kondisi rejected jika salah satu Promise saja terjadi kegagalan. Namun, ini tidak berlaku dengan Promise.allSettled.
*/

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("Ups")), 2000)
);
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3])
  .then((value) => {
    console.log("success");
    console.log(value);
  })
  .catch((error) => {
    console.log("failed");
    console.log(error.message);
  });

/* Output:
Failed
Ups!
*/

//promise.allsettled

const promise4 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise5 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("Ups")), 2000)
);
const promise6 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([promise4, promise5, promise6])
  .then((value) => {
    console.log("success");
    console.log(value);
  })
  .catch((error) => {
    console.log("failed");
    console.log(error.message);
  });
