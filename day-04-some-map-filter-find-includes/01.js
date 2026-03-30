// Day 004

/*
Zadanie 1
Napisz funkcję hasLongWord(arr), która zwraca true,
jeśli w tablicy znajduje się chociaż jedno słowo dłuższe niż 6 znaków.
W przeciwnym razie zwraca false.

Przykład:
hasLongWord(["cat", "banana", "dog"]);
// false

hasLongWord(["cat", "elephant", "dog"]);
// true

Warunki:
- użyj some
*/
function hasLongWord(arr) {
 return arr.some(item => item.length > 6);
}

console.log(hasLongWord(["cat", "banana", "dog"]));
console.log(hasLongWord(["cat", "elephant", "dog"]))