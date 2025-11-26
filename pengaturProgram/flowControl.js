/*
membuat program untuk mengetahui predikat berdasarkan nilai yang dimasukkan.
*/

function checkGrade(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (typeof grades[i] !== "number") {
      throw new Error("Inputan yang ada masukan salah");
    }

    const grade = grades[i];
    let predicate;

    if (grade >= 90) {
      predicate = "A";
    } else if (grade >= 80) {
      predicate = "B";
    } else if (grade >= 70) {
      predicate = "C";
    } else if (grade >= 60) {
      predicate = "D";
    } else {
      predicate = "E";
    }

    console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
  }
}

try {
  const studentGrade = [90, 78, 89, 56, "E"];
  checkGrade(studentGrade);
} catch (e) {
  console.error(e);
}
