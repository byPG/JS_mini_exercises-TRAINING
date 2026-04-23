/*
Zadanie 6
Napisz funkcję getUserEntries(user), która zwraca tablicę par [klucz, wartość]
z obiektu.

Przykład:
getUserEntries({ name: "Anna", age: 31 });
// [["name", "Anna"], ["age", 31]]

Warunki:
- użyj Object.entries()
*/
function getUserEntries(user) {
  return Object.entries(user);
}

console.log(getUserEntries({ name: "Anna", age: 31 }));
console.log(getUserEntries({ city: "Warsaw", country: "Poland" }));