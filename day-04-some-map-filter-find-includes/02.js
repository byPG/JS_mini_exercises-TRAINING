/*
Zadanie 2
Napisz funkcję hasEmptyString(arr), która zwraca true,
jeśli w tablicy znajduje się przynajmniej jeden pusty string "".
W przeciwnym razie zwraca false.

Przykład:
hasEmptyString(["a", "", "cat"]);
// true

hasEmptyString(["dog", "cat", "banana"]);
// false

Warunki:
- użyj some
*/
function hasEmptyString(arr) {
  return arr.some(item => item === '')
}

console.log(hasEmptyString(["a", "", "cat"]));
console.log(hasEmptyString(["dog", "cat", "banana"]));