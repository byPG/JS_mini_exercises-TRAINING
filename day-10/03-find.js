/*
Day 10 — Zadanie 3

Napisz funkcję findUserFromKrakow(users), która zwraca pierwszego użytkownika
z miasta "Krakow".

Przykład:
findUserFromKrakow([
  { name: "Anna", city: "Warsaw" },
  { name: "Piotr", city: "Krakow" },
  { name: "Ola", city: "Gdansk" }
]);
// { name: "Piotr", city: "Krakow" }

Warunki:
- użyj find()
*/
function findUserFromKrakow(users) {
const firstUser = users.find((item) => item.city === "Krakow");
  return firstUser;
}

console.log(
  findUserFromKrakow([
    { name: "Anna", city: "Warsaw" },
    { name: "Piotr", city: "Krakow" },
    { name: "Ola", city: "Gdansk" }
  ])
);