/*
Day 14 — Zadanie 3

Napisz funkcję getUserNamesSortedByAge(users), która zwraca tablicę imion
użytkowników posortowanych rosnąco po age.

Przykład:
getUserNamesSortedByAge([
  { name: "Anna", age: 31 },
  { name: "Piotr", age: 28 },
  { name: "Ola", age: 35 }
]);
// ["Piotr", "Anna", "Ola"]

Wskazówka:
najpierw sort(), potem map()
*/
function getUserNamesSortedByAge(users) {
  return [...users].sort((a,b) => a.age - b.age).map(item => item.name);
}

console.log(
  getUserNamesSortedByAge([
    { name: "Anna", age: 31 },
    { name: "Piotr", age: 28 },
    { name: "Ola", age: 35 }
  ])
);