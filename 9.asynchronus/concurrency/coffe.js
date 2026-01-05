function makeCoffe(name) {
  return new Promise((resolve, reject) => {
    const estimationTime = 2000;
    let isSucces = false;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(
      `Pesanan Anda sedang dibuat dalam ${inSecond} detik, mohon ditunggu`
    );

    setTimeout(() => {
      const number = Math.random();
      if (number < 0.3) {
        isSucces = true;
      }
      if (!isSucces) {
        reject(new Error("Ooops, Sorry Something wrong"));
        return;
      }

      console.log("Pramuji Selesai membuat kopi");
      resolve(name);
    }, estimationTime);
  });
}

function sendCoffe(name) {
  return new Promise((resolve, reject) => {
    const estimationTime = 2000;
    let isSucces = false;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Pesanan Anda sedang dbuat dalam ${inSecond}, mohon ditunggu`);

    setTimeout(() => {
      const number = Math.random();
      if (number < 0.3) {
        isSucces = true;
      }
      if (!isSucces) {
        reject(new Error("Ooops, gagal mengantarkan"));
        return;
      }

      console.log("Pramuji Mengatarkan Coffe");
      resolve(name);
    }, estimationTime);
  });
}

export { makeCoffe, sendCoffe };
