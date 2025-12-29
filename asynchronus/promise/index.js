import { error, log } from "console";
import { makeCoffe, sendCoffe } from "./coffe.js";

const order = "Kopi Ekpresso";

console.log(`saya memesan ${order} di kafe`);

makeCoffe(order)
  .then(
    (value) => {
      return sendCoffe(value);
    },
    (error) => {
      console.error(error.message);
      throw error;
    }
  )
  .then(
    (value) => {
      console.log(`Pramuji Memberikan ${value} pesanan`);
      console.log(`saya mendapatkan ${value} dan menghabiskannya,`);
    },
    (error) => {
      console.error(error.message);
      throw error;
    }
  );
