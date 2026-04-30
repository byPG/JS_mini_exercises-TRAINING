/*
Day 13 — Zadanie 1

Napisz funkcję getTotalUserAge(users), która zwraca sumę wieku
wszystkich użytkowników.

Przykład:
getTotalUserAge([
  { name: "Anna", age: 20 },
  { name: "Piotr", age: 30 },
  { name: "Ola", age: 25 }
]);
// 75

Warunki:
- użyj reduce()
*/
function getTotalUserAge(users) {
  return users.reduce((acc, item) => acc + item.age, 0);
}

console.log(
  getTotalUserAge([
    { name: "Anna", age: 20 },
    { name: "Piotr", age: 30 },
    { name: "Ola", age: 25 }
  ])
);