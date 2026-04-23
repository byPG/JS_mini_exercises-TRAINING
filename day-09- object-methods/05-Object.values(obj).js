/*
Day 9 — Zadanie 5

Napisz funkcję getUserValues(user), która zwraca tablicę wartości obiektu.

Przykład:
getUserValues({ name: "Anna", age: 31 });
// ["Anna", 31]

Warunki:
- użyj Object.values()
*/
function getUserValues(user) {
 return Object.values(user);
}

console.log(getUserValues({ name: "Anna", age: 31 }));
console.log(getUserValues({ city: "Warsaw", country: "Poland" }));