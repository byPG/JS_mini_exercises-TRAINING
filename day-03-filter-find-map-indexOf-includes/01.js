/*
Zadanie 1
Napisz funkcję hasWord(arr, word), która zwraca true,
jeśli tablica zawiera podane słowo, a jeśli nie — false.

Przykład:
hasWord(["apple", "banana", "kiwi"], "banana");
// true

hasWord(["apple", "banana", "kiwi"], "orange");
// false

Warunki:
- użyj includes
*/
function hasWord(arr, word) {
  return arr.includes(word);
}

console.log(hasWord(["apple", "banana", "kiwi"], "banana"));
console.log(hasWord(["apple", "banana", "kiwi"], "orange"));