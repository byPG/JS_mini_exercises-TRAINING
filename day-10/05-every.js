/*
Day 10 — Zadanie 5

Napisz funkcję allUsersHaveAge(users), która sprawdza, czy każdy użytkownik
ma właściwość `age`.

Przykład:
allUsersHaveAge([
  { name: "Anna", age: 31 },
  { name: "Piotr", age: 28 }
]);
// true

allUsersHaveAge([
  { name: "Anna", age: 31 },
  { name: "Piotr" }
]);
// false

Warunki:
- użyj every()
*/
function allUsersHaveAge(users) {
  return users.every((item) => item.age !== undefined);
}

console.log(
  allUsersHaveAge([
    { name: "Anna", age: 31 },
    { name: "Piotr", age: 28 }
  ])
);

console.log(
  allUsersHaveAge([
    { name: "Anna", age: 31 },
    { name: "Piotr" }
  ])
);

// INFO
// jeśli obiekt nie ma pola age, to item.age będzie undefined