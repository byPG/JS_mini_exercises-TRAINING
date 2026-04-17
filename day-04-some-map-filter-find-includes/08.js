/*
Powtórka Day 4 — Zadanie 2

Napisz funkcję getFirstThreeLetters(arr), która zwraca nową tablicę
z trzema pierwszymi literami każdego słowa.

Przykład:
getFirstThreeLetters(["Anna", "Kasia", "Piotr"]);
// ["Ann", "Kas", "Pio"]

Warunki:
- użyj map
- użyj slice
*/
function getFirstThreeLetters(arr) {
   return arr.map(item => item.slice(0, 3));
}

console.log(getFirstThreeLetters(["Anna", "Kasia", "Piotr"]));
console.log(getFirstThreeLetters(["JavaScript", "HTML", "CSS"]));