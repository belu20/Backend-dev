const user = {
  name: "Firdaus",
  "last name": "ihsan",
  age: 24,
};

const { name, ["last name"]: lastName, isMale = false } = user;
console.log(isMale);

// Array

const myArray = ["firdaus", "ihsan", "septian"];
console.log(myArray);

// akses array

console.log(myArray[1]);

// manipulasi array

myArray[0] = "kim";
console.log(myArray);

//menambahkan data

myArray.push("tampan");
console.log(myArray);

//menghapus data
delete myArray[0];
console.log(myArray);

//delete elementnya dan datanya
myArray.splice(0, 1);
console.log(myArray);

//update array
myArray[2] = "firdaus";
console.log(myArray);

//ascending dan descending

myArray.reverse();
console.log(myArray);

myArray.sort();
console.log(myArray);

// array destructur

/**
 * Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari properti object ke dalam satuan yang lebih kecil (variabel)
 */
const [namaDepan, namaTengah, namaBelakang] = myArray;
console.log(namaBelakang);

//.pop .shift untuk menghapus
