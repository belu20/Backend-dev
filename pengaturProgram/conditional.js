// -- IF STATEMENT --

/*
if (condisional)
    statement

JavaScript menyediakan sintaksis yang lebih ringkas yaitu menggunakan ternary operator. Ternary operator atau nama lainnya conditional operator direpresentasikan menggunakan tanda tanya (?). 

Kondisi yang ingin diperiksa ditulis sebelum tanda tanya (?)
Ekspresi yang dieksekusi jika kondisinya benar.
Ekspresi yang dieksekusi jika kondisi salah.

let result = condition ? value1 : value2;
*/

const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);

/*
Switch Case

switch (expresion)
    statement

 Switch sangat bagus digunakan ketika banyak kondisi yang perlu dicek (misalnya pada contoh di atas), jika kondisi yang akan dicek masih sedikit misalnya hanya dua kondisi, gunakanlah if/else.

*/

const day = new Date().getDay();

switch (day) {
  case 0:
    console.log("Minggu");
    break;
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  case 6:
    console.log("Sabtu");
    break;
  default:
    console.log("Hari tidak valid");
}

// jika menggunakan if

if (day === 0) {
  console.log("Minggu");
} else if (day === 1) {
  console.log("Senin");
} else if (day === 2) {
  console.log("Selasa");
} else {
  console.log("Hari Tidak Valid");
}
