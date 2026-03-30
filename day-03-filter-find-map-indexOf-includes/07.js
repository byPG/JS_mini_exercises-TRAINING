/*
Powtórka 2
Napisz funkcję filterShortWords(arr), która zwraca nową tablicę
tylko ze słowami krótszymi niż 4 znaki.

Przykład:
filterShortWords(["cat", "house", "dog", "sun", "banana"]);
// ["cat", "dog", "sun"]

Warunki:
- użyj filter
- nie zmieniaj oryginalnej tablicy -- nie trzeba kopiowac bo filter nie zmienia tablicy
*/
function filterShortWords(arr) {
  const newTable = arr.filter(item => item.length < 4);
  return newTable;
}

console.log(filterShortWords(["cat", "house", "dog", "sun", "banana"]));
console.log(filterShortWords(["hi", "JavaScript", "CSS", "go"]));