/*
Zadanie 2
Napisz funkcję areAllWordsLongerThanTwo(arr), która zwraca true,
jeśli wszystkie słowa mają więcej niż 2 znaki.

Przykład:
areAllWordsLongerThanTwo(["dog", "cat", "banana"]); // true
areAllWordsLongerThanTwo(["a", "cat", "banana"]); // false

Warunki:
- użyj every
*/
function areAllWordsLongerThanTwo(arr) {
  return arr.every(item => item.length > 2);
}

console.log(areAllWordsLongerThanTwo(["dog", "cat", "banana"]));
console.log(areAllWordsLongerThanTwo(["a", "cat", "banana"]));