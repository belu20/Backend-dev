//membuat map contructor
const myMap = new Map();
const productMap = new Map([
  ["shoes", 500],
  ["jeans", 350],
]);
console.log(productMap);

// menyimpan nilai di map dengan set
myMap.set("name", "ihsan");
console.log(myMap);

//akses map

console.log(myMap.get("name"));

//hapus map
myMap.set("namaBelakang", "septian");
myMap.delete("namaBelakang");
console.log(myMap);
