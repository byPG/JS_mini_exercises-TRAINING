/*
Day 9 — Zadanie 4

Napisz funkcję getUserKeys(user), która zwraca tablicę kluczy obiektu.

Przykład:
getUserKeys({ name: "Anna", age: 31 });
// ["name", "age"]

Warunki:
- użyj Object.keys()
*/
function getUserKeys(user) {
  return Object.keys(user);
}

console.log(getUserKeys({ name: "Anna", age: 31 }));
console.log(getUserKeys({ city: "Warsaw", country: "Poland" }));