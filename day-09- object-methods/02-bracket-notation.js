/*
Day 9 — Zadanie 2

Napisz funkcję getUserCity(user), która zwraca miasto użytkownika z obiektu.

Przykład:
getUserCity({ name: "Anna", city: "Warsaw" });
// "Warsaw"

getUserCity({ name: "Piotr", city: "Krakow" });
// "Krakow"

Warunki:
- użyj bracket notation
*/
function getUserCity(user) {
  return user["city"];
}

console.log(getUserCity({ name: "Anna", city: "Warsaw" }));
console.log(getUserCity({ name: "Piotr", city: "Krakow" }));