import { doSomething } from "./utils.js";

// console.log("start");

// doSomething().then((value) => {
//   console.log(value);
// });

// console.log("End");
// agar program berjalan secara squential maka menggunakan async-wait

async function promiseWithAsyncwait() {
  console.log("start");

  const result = await doSomething();
  console.log(result);

  console.log("End");
}

promiseWithAsyncwait();

//penanganan error menggunakan try-cath

async function promiseTry() {
  try {
    console.log("start");

    const resulte = await doSomething();
    console.log(resulte);

    console.log("End");
  } catch (error) {
    console.error(error.mesage);
  }
}

promiseTry();
