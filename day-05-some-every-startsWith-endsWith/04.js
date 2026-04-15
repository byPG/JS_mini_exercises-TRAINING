/*
Zadanie 4
Napisz funkcję mapToFirstLetters(arr), która zwraca nową tablicę
z pierwszymi literami każdego słowa.

Przykład:
mapToFirstLetters(["dog", "banana", "sun"]);
// ["d", "b", "s"]

Warunki:
- użyj map
*/
function mapToFirstLetters(arr) {
  return arr.map(item => item[0]);
}

console.log(mapToFirstLetters(["dog", "banana", "sun"]));
console.log(mapToFirstLetters(["JavaScript", "HTML", "CSS"]));