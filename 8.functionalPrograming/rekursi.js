function generateArray(n) {
  const result = [];
  for (let counter = 0; counter <= n; counter += 1) {
    result.push(counter);
  }
  return result;
}

console.log(generateArray(5));

//Dalam FP tidak ada memperbolehkan perubahan data sehingga kita tidak bisa mengubah nilai dari variabel counter

//sehingga di rekursi menjadi seperti ini

function generateArray1(n1) {
  if (n1 < 0) {
    return [];
  }

  return [...generateArray1(n1 - 1), n1];
}

console.log(generateArray1(5));

/*
JavaScript telah menyediakan banyak fungsi bawaan yang dapat digunakan untuk masalah iterasi data, seperti Array.map, Array.filter, atau Array.forEach
*/
