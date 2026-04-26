/*
Day 10 — powtórka — Zadanie 1

Napisz funkcję getCourseNames(courses), która zwraca tablicę nazw kursów
z tablicy obiektów.

Przykład:
getCourseNames([
  { name: "JavaScript", level: "basic" },
  { name: "React", level: "junior" }
]);
// ["JavaScript", "React"]

Warunki:
- użyj map()
*/
function getCourseNames(courses) {
  // Twoje rozwiązanie
  return courses.map(course => course.name);
}

console.log(
  getCourseNames([
    { name: "JavaScript", level: "basic" },
    { name: "React", level: "junior" }
  ])
);