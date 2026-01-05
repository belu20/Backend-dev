import { dosomething } from "./utils.js";

function onFulfilled(dosomethingData) {
  //Do your job when "FulFilled" happens ....
  console.log(dosomethingData);
}

function onRejected(dosomethingError) {
  //Do your job when "Rejected" happens ....

  console.log(dosomethingError);
}

dosomething().then(onFulfilled, onRejected);
