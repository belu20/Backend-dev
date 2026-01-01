import { makeCoffe } from "./kopi.js";

const kopi = "kopi Arabika";

console.log(`saya memesan ${kopi} di cafe`);

async function buatKopi(kopi) {
  try {
    const result = await makeCoffe(kopi);
    console.log(result);

    console.log(`saya menikmati ${kopi} ini `);
  } catch (error) {
    console.error(error.message);
  }
}

buatKopi("robusta");
