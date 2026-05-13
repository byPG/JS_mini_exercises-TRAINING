/*
Powtórka Day 14 — Zadanie 2

Napisz funkcję getTopTwoYoungestUserNames(users), która zwraca tablicę imion
dwóch najmłodszych użytkowników.

Przykład:
getTopTwoYoungestUserNames([
  { name: "Anna", age: 31 },
  { name: "Piotr", age: 22 },
  { name: "Ola", age: 27 },
  { name: "Marek", age: 19 }
]);
// ["Marek", "Piotr"]

Wskazówka:
sort rosnąco po age -> slice(0, 2) -> map(name)
*/
function getTopTwoYoungestUserNames(users) {
  const newTab = [...users];
  return newTab.sort((a,b) => a.age - b.age).slice(0,2).map(item => item.name);
}