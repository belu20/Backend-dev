//FOR IN
const myOb = {
  nama: "Belu",
  namaBelakang: "septian",
  namatengah: "keren",
};

for (const property in myOb) {
  console.log(`${property} bernilai ${myOb[property]}`);
}

//for loop

for (let i = 0; i < 5; i++) {
  console.log(`nilai ${i} adalah ${i}`);
}

//for of

const names = ["ikan", "ayam", "telor", "tahu"];
for (const item of names) {
  console.log(item);
}

//while
/*
While statement akan mengeksekusi statement ketika kondisinya bernilai truthy
while (condition){
    statement
}
*/

let i = 0;
// while (i < 5) {
//   console.log(`Angka ke ${i} adalah ${i}`);
//   i++;
// }

/* DO WHILE

*/

do {
  console.log(`Angka ini ${i} adalah ${i}`);
  i++;
} while (i < 5);

//continue

for (let x = 0; x < 10; x++) {
  if (x === 5) {
    continue;
  }

  console.log(x);
}
