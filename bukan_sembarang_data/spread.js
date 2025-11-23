const original = ["apple", "anggur", "alpikat"];
const copy = [...original];

console.log(copy);

/*
Spread, memiliki arti sesuai dengan namanya, yaitu menyebarkan. Spread operator digunakan untuk menyebarkan nilai yang ada pada object dan array. Spread operator yang ditandai dengan sintaks tiga titik  (...) adalah fitur yang menarik dan membantu dalam pengelolaan object dan array. Dengan menggunakan spread operator, nilai object dan array dapat di-iterable menjadi beberapa element. 
*/

//--REST OPERATOR ---

/*
Ketika bekerja dengan function, sering kali function menerima argument yang kemudian menjadi parameter. Ketika argument-nya masih sedikit, seperti satu atau dua belum menimbulkan masalah. Masalah terjadi ketika argument-nya sudah melebihi dua karena terlalu banyak argument pada function membuat kode menjadi tidak bersih (tidak sesuai prinsip clean code) sehingga sulit untuk dibaca dan di-maintenance.

Solusinya adalah menggunakan rest operator. Rest operator memungkinkan function untuk menerima argument dalam bentuk array. Rest operator yang digunakan pada parameter fungsi sering disebut sebagai Rest Parameter. Cara menggunakan rest parameter adalah dengan menambahkan tiga titik (...) sebelum parameter terakhir. 
*/

function myFunc(...name) {
  return name;
}

const resluti = myFunc("firdaus", "ihsan", "septian");

console.log("name :", resluti);
