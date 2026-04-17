/*
Zadanie 4
Napisz funkcję stringToLetters(str), która zwraca tablicę liter z podanego stringa.

Przykład:
stringToLetters("hello");
// ["h", "e", "l", "l", "o"]

stringToLetters("JS");
// ["J", "S"]

Warunki:
- użyj Array.from
*/
function stringToLetters(str) {
  return Array.from(str);
}

console.log(stringToLetters("hello"));
console.log(stringToLetters("JS"));