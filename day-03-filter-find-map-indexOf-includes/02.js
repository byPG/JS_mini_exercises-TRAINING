/*
Zadanie 2
Napisz funkcję getWordIndex(arr, word), która zwraca indeks
podanego słowa w tablicy.

Jeśli słowa nie ma, zwróć -1.

Przykład:
getWordIndex(["apple", "banana", "kiwi"], "kiwi");
// 2

getWordIndex(["apple", "banana", "kiwi"], "orange");
// -1

Warunki:
- użyj indexOf
*/
function getWordIndex(arr, word) {
 const newArr = arr.indexOf(word);}

console.log(getWordIndex(["apple", "banana", "kiwi"], "kiwi"));
console.log(getWordIndex(["apple", "banana", "kiwi"], "orange"));