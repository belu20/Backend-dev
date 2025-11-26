/**
 * Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
 *  1. Jika nilai score lebih atau sama dengan 90
 *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
 *  2. Jika nilai score ada di antara 80 hingga 89
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
 *  3. Jika nilai score ada di antara 70 hingga 79
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
 *  4. Jika nilai score ada di antara 60 hingga 69:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
 *  5. Jika nilai score di bawah 60:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'
 *
 *
 *  Note: - Mohon untuk tidak menghapus kode yang sudah ada sebelumnya.
 *        - Anda tidak perlu membuat variabel result dan score secara manual.
 *          Gunakan variabel yang sudah disediakan.
 *
 */
function jombloGrade(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (typeof grades[i] !== "number") {
      throw new Error("Masukan jumlah tahun anda jomblo jing");
    }
    const grade = grades[i];
    let result;

    if (grade >= 10) {
      result = "jomblo AKUT";
    } else if (grade >= 5) {
      result = "Mendekati AKUT";
    } else if (grade >= 2) {
      result = "masih sebentar";
    } else {
      result = "apakah anda mempunyai pacar ?";
    }

    console.log(`Jomblo Rate ${i + 1}: ${grade} ${result}`);
  }
}

try {
  const gradeJomblo = [1, 24, 5, 7];
  jombloGrade(gradeJomblo);
} catch (e) {
  console.error(e);
}
