function promiseExecutor(resolve, reject) {
  setTimeout(() => {
    console.log(`Melakukan sesuatu sebelum promise diselesaikan.`);

    //penentu hasil dari proses asynchronous
    const number = Math.random();

    if (number > 0.5) {
      resolve("you did it!");
    } else {
      reject("Oppps, Something went wrong ");
    }
  }, 2000);
}

function dosomething() {
  return new Promise(promiseExecutor);
}

export { dosomething };
