import { error } from "console";
import { makeCoffe, sendCoffe } from "./callback.js";
import { readFile } from "fs";

// console.log("Saya Memesan Coffe");

// makeCoffe(() => {
//   sendCoffe((beans) => {
//     console.log("saya menerima coffe", beans);
//     console.log("saya menghabiskan coffe");
//   });
// });

const order = "Kopi Expresso";

console.log(`saya memesan ${order} 1 gelas`);
makeCoffe(order, (makeCoffeError, makeCoffeData) => {
  if (makeCoffeError) {
    //do something with error
    console.error(makeCoffeError);
    return;
  }

  sendCoffe(makeCoffeData, (sendCoffeError, sendCoffeData) => {
    if (sendCoffeError) {
      console.error(sendCoffeError);
      return;
    }

    console.log(`Pramuji Memberikan ${sendCoffeData} pesanan`);
    console.log(`saya mendapatkan ${sendCoffeData} dan menghabiskannya`);
  });
});

//penerapan callback pada proses asynchronous dengan memanfaatkan salah satu Node.js API, yaitu fs untuk membaca file system.

readFile("./asynchronus/callback/readme.txt", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  const greeting = data
    .toString()
    .replace("%nama%", "Ihsan")
    .replace("%orang%", "orang-orang");

  console.log(greeting);
});
