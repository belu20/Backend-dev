function makeCoffe(nama) {
  return new Promise((resolve, reject) => {
    const estimationTime = 2000;

    setTimeout(() => {
      const number = Math.random();
      if (number < 0.3) {
        reject(new Error("Kopi anda gagal dibuat"));
        return;
      }
      console.log("kopi berhasil dibuat");
      resolve(`${nama} siap disajikan`);
    }, estimationTime);
  });
}

export { makeCoffe };
