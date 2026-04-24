/*
Day 10 — Zadanie 4

Napisz funkcję hasUserFromWarsaw(users), która sprawdza, czy w tablicy
jest chociaż jeden użytkownik z miasta "Warsaw".

Przykład:
hasUserFromWarsaw([
  { name: "Anna", city: "Gdansk" },
  { name: "Piotr", city: "Warsaw" }
]);
// true

hasUserFromWarsaw([
  { name: "Anna", city: "Gdansk" },
  { name: "Piotr", city: "Krakow" }
]);
// false

Warunki:
- użyj some()
*/
function hasUserFromWarsaw(users) {
   return users.some((item) => item.city === "Warsaw");
}

console.log(
  hasUserFromWarsaw([
    { name: "Anna", city: "Gdansk" },
    { name: "Piotr", city: "Warsaw" }
  ])
);

console.log(
  hasUserFromWarsaw([
    { name: "Anna", city: "Gdansk" },
    { name: "Piotr", city: "Krakow" }
  ])
);