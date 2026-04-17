/*
Zadanie 5
Napisz funkcję getLastElement(arr), która zwraca ostatni element tablicy.

Przykład:
getLastElement(["a", "b", "c"]);
// "c"

getLastElement([10, 20, 30]);
// 30

Warunki:
- użyj at
*/
function getLastElement(arr) {
  return arr.at(-1);
}

console.log(getLastElement(["a", "b", "c"]));
console.log(getLastElement([10, 20, 30]));