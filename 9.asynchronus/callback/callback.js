function makeCoffe(name, callback) {
  //1000 milidetik = 1 detik
  const estimationTime = 5000;
  let isSuccess = false; // default

  const inSecond = Math.ceil(estimationTime / 1000);
  console.log(`Mohon Menunggu Coffe sedang disiapkan dalam ${inSecond} detik`);

  setTimeout(() => {
    //Do some tasks to make coffe
    const number = Math.random();

    // Penanganan Error
    if (number > 0.3) {
      isSuccess = true;
    }
    if (!isSuccess) {
      callback(new Error("Gagal Membuat Kopi"), null);

      return;
    }

    console.log("Pramuji selesai membuat kopi");

    callback(null, name);
  }, estimationTime);
}

function sendCoffe(name, callback) {
  const estimationTime = 2000;
  console.log("Pramuji sedang mengantarkan coffe");

  let isSuccess = false;
  setTimeout(() => {
    const number = Math.random();
    //Penanganan Error
    if (number < 0.3) {
      isSuccess = true;
    }

    if (!isSuccess) {
      callback(new Error("Gagal Mengantarkan Pesananan"), null);
    }
    console.log("pramuji memberikan pesanan");

    callback(null, name);
  }, estimationTime);
}

export { makeCoffe, sendCoffe };
