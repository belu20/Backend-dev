// yang sudah tercipta tidak bisa diubah lagi

function max(arrayOfnumber) {
  return arrayOfnumber.sort((a, b) => a - b).pop();
}

const numbers = [24, 42, 17, 7, 10];
const largest = max(numbers);
console.log(numbers);
console.log(largest);

/*
dari kode di atas memang seperti functional programming namun lihat pada nilai array numbers ikut berubah yang seharusnya tidak berubah 
* ini juga sering terjadi dalam object 


*/

function regisEmail(person, email) {
  return Object.assign(person, { email });
}

const person = {
  name: "jhone",
  username: "jhonejon",
};

const personWithMail = regisEmail(person, "jhonejon@gmail.com");

console.log(personWithMail);
console.log(person);

//Anda bisa lihat bahwa fungsi registerEmail menambahkan properti email, baik pada personWithEmail maupun person. untuk mengatasi tersebut menggunakan duplikasi

function max1(arrayOfnumber1) {
  // menggunakan spread operator untuk menduplikasi nilai arrayOfNumbers
  return [...arrayOfnumber1].sort((a, b) => a - b).pop(); //memanfaat kan spread
}

function daftarEmail(orang, mail) {
  // menggunakan spread operator untuk menduplikasi nilai
  return { ...orang, mail };
}

const num = [24, 42, 17, 7, 10];
const larges = max1(num);

const orang = {
  nama: "dina",
  usernama: "dinaanid",
};

const orangDenganEmail = daftarEmail(orang, "dinaanid@gmail.com");

console.log(num);
console.log(larges);

console.log(orang);
console.log(orangDenganEmail);
