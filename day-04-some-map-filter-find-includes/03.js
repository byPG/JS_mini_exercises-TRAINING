/*
Zadanie 3
Napisz funkcję mapToBooleans(arr), która zwraca nową tablicę,
w której każda liczba zostaje zamieniona na:
- true, jeśli jest większa od 10
- false, jeśli jest mniejsza lub równa 10

Przykład:
mapToBooleans([4, 11, 7, 25]);
// [false, true, false, true]

Warunki:
- użyj map
*/
function mapToBooleans(arr) {
  return arr.map(item => item > 10);
}

console.log(mapToBooleans([4, 11, 7, 25]));
console.log(mapToBooleans([10, 20, 5]));