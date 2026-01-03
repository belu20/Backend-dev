import { makeCoffe, sendCoffe } from "./coffe.js";
console.log("saya memesan kopi");

Promise.allSettled([makeCoffe("Americano"), sendCoffe("Americano")]).then(
  (results) => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`Proses ${index + 1} sukses:`, result.value);
      } else {
        console.error(`Proses ${index + 1} gagal:`, result.reason.message);
      }
    });
  }
);
