/*
Powtórka Day 14 — Zadanie 1

Napisz funkcję sortCoursesByDurationAsc(courses), która zwraca nową tablicę
kursów posortowaną rosnąco po duration.

Przykład:
sortCoursesByDurationAsc([
  { name: "React", duration: 20 },
  { name: "HTML", duration: 8 },
  { name: "JavaScript", duration: 15 }
]);
// [
//   { name: "HTML", duration: 8 },
//   { name: "JavaScript", duration: 15 },
//   { name: "React", duration: 20 }
// ]

Warunki:
- użyj sort()
- nie zmieniaj oryginalnej tablicy
*/
function sortCoursesByDurationAsc(courses) {
  const newTab = [...courses];
  newTab.sort((a, b) => a.duration - b.duration);
  return newTab;
}
