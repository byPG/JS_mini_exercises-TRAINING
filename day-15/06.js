/*
Powtórka Day 15 — Zadanie 1

Napisz funkcję getActiveAdminNames(users), która zwraca tablicę imion
użytkowników, którzy:
- są aktywni
- i są adminami

Przykład:
getActiveAdminNames([
  { name: "Anna", isAdmin: false, isActive: true },
  { name: "Piotr", isAdmin: true, isActive: true },
  { name: "Ola", isAdmin: true, isActive: false }
]);
// ["Piotr"]

Wskazówka:
filter -> map
*/
function getActiveAdminNames(users) {
  return users.filter(user => user.isAdmin && user.isActive)
              .map(user => user.name);
}