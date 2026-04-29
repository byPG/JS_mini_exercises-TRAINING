/*
Powtórka Day 11 — Zadanie 1

Napisz funkcję getAdminNames(users), która zwraca tablicę imion
użytkowników, którzy mają isAdmin ustawione na true.

Przykład:
getAdminNames([
  { name: "Anna", isAdmin: false },
  { name: "Piotr", isAdmin: true },
  { name: "Ola", isAdmin: true }
]);
// ["Piotr", "Ola"]
*/
function getAdminNames(users) {
  return users.filter(item => item.isAdmin === true).map(item => item.name);
}

console.log(
  getAdminNames([
    { name: "Anna", isAdmin: false },
    { name: "Piotr", isAdmin: true },
    { name: "Ola", isAdmin: true }
  ])
);