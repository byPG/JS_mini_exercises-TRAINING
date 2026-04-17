/*
Powtórka Day 5

Napisz funkcję areAllWordsStartingWithA(arr), która zwraca true,
jeśli wszystkie słowa zaczynają się na literę "a".

Przykład:
areAllWordsStartingWithA(["apple", "anna", "animal"]);
// true

areAllWordsStartingWithA(["apple", "banana", "animal"]);
// false

Warunki:
- użyj every
- użyj startsWith
*/
function areAllWordsStartingWithA(arr) {
   return arr.every(item => item.startsWith("a"));
}

console.log(areAllWordsStartingWithA(["apple", "anna", "animal"]));
console.log(areAllWordsStartingWithA(["apple", "banana", "animal"]));