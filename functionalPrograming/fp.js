const names = ["firdaus", "ihsan", "septian"];
//bersifat imperatif
const newNameWithExcMark = [];

for (let i = 0; i < names.length; i++) {
  newNameWithExcMark.push(`${names[i]} !`);
}

console.log(newNameWithExcMark);

// bersifat deklaratif
const namas = ["exa", "lauren", "ayuib"];
const newNameWithTanda = namas.map((name) => `${name}!`);

console.log(newNameWithTanda);
