/*
Day 11 — Zadanie 4

Napisz funkcję hasAdminUser(users), która sprawdza, czy istnieje
choć jeden użytkownik z isAdmin ustawionym na true.

Przykład:
hasAdminUser([
  { name: "Anna", isAdmin: false },
  { name: "Piotr", isAdmin: true }
]);
// true

hasAdminUser([
  { name: "Anna", isAdmin: false },
  { name: "Ola", isAdmin: false }
]);
// false

Warunki:
- użyj some()
*/
function hasAdminUser(users) {
    return users.some((item) => item.isAdmin === true);
}

console.log(
  hasAdminUser([
    { name: "Anna", isAdmin: false },
    { name: "Piotr", isAdmin: true }
  ])
);

console.log(
  hasAdminUser([
    { name: "Anna", isAdmin: false },
    { name: "Ola", isAdmin: false }
  ])
);