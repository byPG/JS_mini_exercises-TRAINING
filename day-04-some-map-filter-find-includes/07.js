
/*
Powtórka Day 4 — Zadanie 1

Napisz funkcję hasWordWithLetterO(arr), która zwraca true,
jeśli w tablicy znajduje się chociaż jedno słowo zawierające literę "o".

Przykład:
hasWordWithLetterO(["cat", "dog", "sun"]);
// true

hasWordWithLetterO(["cat", "sun", "sky"]);
// false

Warunki:
- użyj some
- użyj includes
*/
function hasWordWithLetterO(arr) {
  return arr.some(item => item.includes("o"));
}

console.log(hasWordWithLetterO(["cat", "dog", "sun"]));
console.log(hasWordWithLetterO(["cat", "sun", "sky"]));