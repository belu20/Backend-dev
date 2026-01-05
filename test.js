i = 100;
while (i <= 200) {
  console.log(i);
  i += 20;
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(3));

console.log("Start");
setTimeout(() => {
  console.log("Middle");
}, 1000);
console.log("End");
