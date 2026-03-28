/*
Zadanie 5
Napisz funkcję mapToLengths(arr), która zwraca nową tablicę
z długościami słów.

Przykład:
mapToLengths(["dog", "banana", "hi"]);
// [3, 6, 2]

Warunki:
- użyj map
- nie zmieniaj oryginalnej tablicy
*/
function mapToLengths(arr) {
  return arr.map(item => item.length) }

console.log(mapToLengths(["dog", "banana", "hi"]));
console.log(mapToLengths(["JavaScript", "CSS", "HTML"]));