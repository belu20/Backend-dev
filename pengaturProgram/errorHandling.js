// price = 100;
// paid = 80;

// if (paid < price) {
//   throw new error("Pembayaran Kurang");
// }

/*
--try catch--

 Try merupakan blok kode yang akan menangani error, sedangkan catch merupakan blok kode yang dibangkitkan ketika terjadi error di dalam blok try
*/

try {
  console.log("memulai program");
  //jika ada error
  throw new error("program error");
  console.log("mengakhiri program");
} catch {
  console.log("program terhenti karena ada error");
}

//finally

try {
  console.log("ini vlock try");
  throw new error("program error");
} catch {
  console.log("ini block catch");
} finally {
  console.log("ini block finally");
}
