import { error, log } from "console";
import { makeCoffe, sendCoffe } from "./coffe.js";

const order = "Kopi Ekpresso";

console.log(`saya memesan ${order} di kafe`);

// makeCoffe(order)
//   .then(
//     (value) => {
//       return sendCoffe(value);
//     },
//     (error) => {
//       console.error(error.message);
//       throw error;
//     }
//   )
//   .then(
//     (value) => {
//       console.log(`Pramuji Memberikan ${value} pesanan`);
//       console.log(`saya mendapatkan ${value} dan menghabiskannya,`);
//     },
//     (error) => {
//       console.error(error.message);
//       throw error;
//     }
//   );

// Menggunakan Catch jika penanganan error nya sama

makeCoffe(order)
  .then((value) => {
    return sendCoffe(value);
  })
  .then((value) => {
    console.log(`Pramuji Memberikan ${value} pesanan`);
    console.log(`saya mendapatkan ${value} dan menghabiskannya,`);
  })
  .catch((error) => {
    console.log(error.message);
  });

/*
  Berapa pun banyaknya proses asinkron yang perlu dilakukan untuk mencapai suatu hasil, kita dapat memanfaatkan method then.
  // makeCoffee(order)
  // .then((value) => { /* Do your jobs... */
// .then((value) => { /* Do your jobs... */ })
// .then((value) => { /* Do your jobs... */ })
// .then((value) => { /* Do your jobs... */ })
// .then((value) => { /* Do your jobs... */ })
// .then((value) => { /* Do your jobs... */ })
// .catch((error) => console.log(error.message));
