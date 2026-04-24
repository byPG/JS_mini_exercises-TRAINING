/*
Day 10 — Zadanie 1

Napisz funkcję getUserNames(users), która zwraca tablicę samych imion
z tablicy obiektów.

Przykład:
getUserNames([
  { name: "Anna", age: 31 },
  { name: "Piotr", age: 28 },
  { name: "Ola", age: 35 }
]);
// ["Anna", "Piotr", "Ola"]

Warunki:
- użyj map()
*/
function getUserNames(users) {
  const usersName = users.map((item) => item.name);
  return usersName;
}

console.log(
  getUserNames([
    { name: "Anna", age: 31 },
    { name: "Piotr", age: 28 },
    { name: "Ola", age: 35 }
  ])
);