/*
Day 14 — Zadanie 1

Napisz funkcję sortUsersByAgeAsc(users), która zwraca nową tablicę
użytkowników posortowaną rosnąco po age.

Przykład:
sortUsersByAgeAsc([
  { name: "Anna", age: 31 },
  { name: "Piotr", age: 28 },
  { name: "Ola", age: 35 }
]);
// [
//   { name: "Piotr", age: 28 },
//   { name: "Anna", age: 31 },
//   { name: "Ola", age: 35 }
// ]

Warunki:
- użyj sort()
- nie zmieniaj oryginalnej tablicy
*/
function sortUsersByAgeAsc(users) {
  const sortAge = [...users];
  return sortAge.sort((a,b) => a.age - b.age);
}

console.log(
  sortUsersByAgeAsc([
    { name: "Anna", age: 31 },
    { name: "Piotr", age: 28 },
    { name: "Ola", age: 35 }
  ])
);