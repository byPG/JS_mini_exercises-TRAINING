/*
Zadanie 4
Napisz funkcję filterWordsWithLetterA(arr), która zwraca nową tablicę
tylko z tymi słowami, które zawierają literę "a".

Przykład:
filterWordsWithLetterA(["dog", "cat", "banana", "sun"]);
// ["cat", "banana"]

Warunki:
- użyj filter
- możesz użyć includes wewnątrz filter
*/
function filterWordsWithLetterA(arr) {
 return arr.filter(item => item.includes("a"));
}

console.log(filterWordsWithLetterA(["dog", "cat", "banana", "sun"]));
console.log(filterWordsWithLetterA(["apple", "kiwi", "grape"]));