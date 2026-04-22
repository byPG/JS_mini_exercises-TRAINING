/*
Powtórka Day 7 — Zadanie 2

Napisz funkcję getFirstElement(arr), która zwraca pierwszy element tablicy.

Przykład:
getFirstElement(["a", "b", "c"]);
// "a"

getFirstElement([10, 20, 30]);
// 10

Warunki:
- użyj at
*/
function getFirstElement(arr) {
  return arr.at(0);
}

console.log(getFirstElement(["a", "b", "c"]));
console.log(getFirstElement([10, 20, 30]));