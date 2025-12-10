/*
HOF digunakan untuk berbagai hal berikut.

Mengabstraksi fungsi aksi dari sebuah proses asynchronous (kita akan belajar asynchronous dalam modul selanjutnya) dalam bentuk callback.
Membuat utility function, yaitu fungsi Array.map, Array.filter, Array.reduce, dan sebagainya.
Menerapkan teknik matematika, seperti currying dan function composition.
*/
// menerima argumen sebuah fungsi
// function memoize(fn) {
//   const cache = new Map();

//   // mengembalikan nilai berupa fungsi
//   return function (...args) {
//     const key = JSON.stringify(args);

//     if (cache.has(key)) {
//       return cache.get(key);
//     }

//     const result = fn(...args);
//     cache.set(key, result);

//     return result;
//   };
// }

// function sumArray(arr) {
//   if (arr.length === 0) return 0;
//   return arr[0] + sumArray(arr.slice(1));
// }

// const memoizedSumArray = memoize(sumArray);
// const largeArray = Array.from({ length: 5000 }, (_, i) => i + 1);

// console.time("Memoized Sum First Call");
// console.log("Total:", memoizedSumArray(largeArray));
// console.timeEnd("Memoized Sum First Call");

// console.time("Memoized Sum Second Call (Cached)");
// console.log("Total:", memoizedSumArray(largeArray));
// console.timeEnd("Memoized Sum Second Call (Cached)");

function apply(operator, ...args) {
  //kode lain bisa ditambahkan sebelum dijalankan
  return operator(...args);
}

function sum(a, b, c) {
  return a + b + c;
}

function discount(disc, value) {
  return value - (disc / 100) * value;
}

const productPrice = apply(sum, 100, 200, 300);
const withDisc = apply(discount, 25, productPrice);

console.log(`Harga Awal ${productPrice}`);
console.log(withDisc);

//Teknik currying
function adjectify(adjectify) {
  return function (noun) {
    return `${noun} ${adjectify}`;
  };
}

function multipleBy(x) {
  return function (y) {
    return x * y;
  };
}

const coolifier = adjectify("keren");
const funnifer = adjectify("seru");

const multiplefive = multipleBy(5);

console.log(coolifier("dicoding"));
console.log(funnifer("ihsan"));
console.log(multiplefive(7));

//HOF juga bisa digunakan untuk komposisi fungsi

function addOne(x) {
  return x + 1;
}

function squre(x) {
  return x * x;
}

function compose(f, g) {
  return (x) => {
    return f(g(x));
  };
}

const addOneSquare = compose(squre, addOne);
console.log(addOneSquare(2));
