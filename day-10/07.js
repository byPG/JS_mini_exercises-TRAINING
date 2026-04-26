/*
Day 10 — powtórka — Zadanie 2

Napisz funkcję hasLongCourse(courses), która sprawdza, czy istnieje
choć jeden kurs z duration większym niż 20.

Przykład:
hasLongCourse([
  { name: "JavaScript", duration: 15 },
  { name: "React", duration: 25 }
]);
// true

hasLongCourse([
  { name: "HTML", duration: 10 },
  { name: "CSS", duration: 12 }
]);
// false

Warunki:
- użyj some()
*/
function hasLongCourse(courses) {
  // Twoje rozwiązanie
  return courses.some( (item) => item.duration > 20)
}

console.log(
  hasLongCourse([
    { name: "JavaScript", duration: 15 },
    { name: "React", duration: 25 }
  ])
);

console.log(
  hasLongCourse([
    { name: "HTML", duration: 10 },
    { name: "CSS", duration: 12 }
  ])
);