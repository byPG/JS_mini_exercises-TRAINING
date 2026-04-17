/*
Powtórka 1 — Day 5

Napisz funkcję areAllWordsEndingWithA(arr), która zwraca true,
jeśli wszystkie słowa w tablicy kończą się na literę "a".
W przeciwnym razie zwraca false.

Przykład:
areAllWordsEndingWithA(["kawa", "lama", "Java"]);
// true

areAllWordsEndingWithA(["kawa", "pies", "lama"]);
// false

Warunki:
- użyj every
- użyj endsWith
*/
function areAllWordsEndingWithA(arr) {
  return arr.every(item => item.endsWith("a"));
}

console.log(areAllWordsEndingWithA(["kawa", "lama", "Java"]));
console.log(areAllWordsEndingWithA(["kawa", "pies", "lama"]));