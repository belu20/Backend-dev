//Array map

const listItem = ["sepatu", "celana", "kaos kaki"];

const itemList = listItem.map((name) => `${name} !`); //Fungsi map akan mengembalikan array baru. Nilai tiap item pada array yang dikembalikan dihasilkan dari kembalian callback function-nya

console.log(itemList);
console.log(listItem);

//array filter

//menyaring array dari object siswa yang layak dapat beasiswa

const student = [
  {
    nama: "Ihsan",
    nilai: 76,
  },
  {
    nama: "septian",
    nilai: 86,
  },
  {
    nama: "firdaus",
    nilai: 90,
  },
  {
    nama: "dinaa",
    nilai: 40,
  },
];

const beasiswa = student.filter((siswa) => siswa.nilai > 80);
console.log(beasiswa);

//Array reduce

/*
Array.reduce digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja. Berikut adalah struktur dari penggunaan fungsi Array.reduce
array.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
 
// [...] adalah opsional parameter

*/

const totalScore = student.reduce((acc, student) => acc + student.nilai, 0);

console.log(totalScore);
