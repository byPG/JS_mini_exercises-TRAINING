/*
Powtórka Day 12 — Zadanie 1

Napisz funkcję getActiveUserNames(users), która zwraca tablicę imion
aktywnych użytkowników.

Przykład:
getActiveUserNames([
  { name: "Anna", isActive: true },
  { name: "Piotr", isActive: false },
  { name: "Ola", isActive: true }
]);
// ["Anna", "Ola"]

Wskazówka:
najpierw odfiltruj aktywnych, potem wyciągnij name
*/
function getActiveUserNames(users) {
  return users.filter(item => item.isActive).map(item => item.name);
}

console.log(
  getActiveUserNames([
    { name: "Anna", isActive: true },
    { name: "Piotr", isActive: false },
    { name: "Ola", isActive: true }
  ])
);