/**
 * TODO:
 * 1. Impor fungsi unique dari utils.mjs secara default
 * 2. Impor fungsi splitString dari utils.mjs secara named
 *
 * Catatan.
 * Jangan ubah kode apa pun yang sudah tersedia sebelumnya
 */
import unique from "./utils.js";
import { splitString } from "./utils.js";

const string = "saippuakivikauppias";
const arra = splitString(string);
const uniqueArray = unique(arra);

console.log(string);
console.log(arra);
console.log(uniqueArray);
