// function conversiCelsiuFarenheit(temperature) {
//   const temperatureInFarenheit = (9 / 5) * temperature + 32;

//   console.log("Hasil Konversi :", temperatureInFarenheit);
// }

// const temperatureInCelsius = 90;

// conversiCelsiuFarenheit(temperatureInCelsius);

/*
RETURN VALUE
*/

function sumNumbers(a, b) {
  const result = a + b;
  return result;
}
const result = sumNumbers(2, 4);

console.log("2 + 4 =", result);

// convert

function convertCelsiustoFarenheit(temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
}

const temperatureInFarenheit = convertCelsiustoFarenheit(90);
// console.log("Hasil Konversi:", temperatureInFarenheit);

/*

FUNCTION EXPRESSION

Dapat disimpan sebagai nilai dalam variabel.
Dapat dikembalikan dari suatu function.
Dapat dikirimkan sebagai parameter bagi function lain.
Dapat disimpan dalam elemen array dan object literal.
Dapat memiliki method dan properties sendiri.

*/

function multiply(a, b) {
  return a * b;
}

function calculate(operation, numA, numB) {
  return operation(numA, numB);
}

const resulte = calculate(multiply, 2, 4);
console.log(resulte);
//

function multiplier(x) {
  return function (num) {
    return x * num;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(11));

// Arrow function =>
let x;

const minNumber = (paramet) => (9 / 5) * paramet + 32;

x = minNumber(90);
console.log("hasil x:", x);
