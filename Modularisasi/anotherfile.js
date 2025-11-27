// export default

export default function myFunc() {
  console.log("Hallo gaes");
}

// named export

/*
Ketika menggunakan named import, selain memastikan nama function sesuai, kita juga akan menuliskan nama function yang diimpor dalam kurung kurawal {}.
*/

const obj = {
  name: "belu",
  namaTengah: "ihsan",
  namaBelakang: "Septian",
};

export { obj };

/*
---Named Export---

export class user {...}
import {user} from

---Default Export---

export default user{...}
import user from ....
*/
