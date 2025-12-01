/*
konsep encapsulation, membatasi bagian kode yang dapat diakses. Secara default buatlah bagian kode menjadi tidak dapat diakses, jika tidak diperlukan.
*/

// class machineCoffe {
//   constructor(waterAmount) {
//     this.waterAmount = waterAmount;
//     this._temperature = 90; //nilai default
//   }

//   set temperature(temperature) {
//     console.log("you are not allowed to change the temperature");
//   }

//   get temperature() {
//     return this._temperature;
//   }
// }
/*
Penambahan underscore (_) di variable temperature untuk menandakan bahwa nilai temperature tidak dapat diubah. Namun, sebenarnya penggunaan tanda underscore tidak benar-benar membuat property temperature tidak dapat diubah, ia masih dapat diubah.
*/
class machineCoffe {
  #temperature = 90; //enclosing class
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.#temperature = this.#defaultTemperature();
  }

  set temperature(temperature) {
    console.log("you are not allowed to change the temperature");
  }

  get temperature() {
    return this.#temperature;
  }

  #defaultTemperature() {
    return 90;
  }
}
const coffe = new machineCoffe(90);
console.log(coffe.temperature); //Jika mencoba mengakses property yang bersifat private, Anda akan mendapatkan pesan error
coffe.temperature = 100; //temparature diubah
console.log(coffe.temperature);
