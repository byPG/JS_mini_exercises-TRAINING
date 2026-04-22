/*
Day 8 — Zadanie 3

Napisz funkcję findFirstLongWordWithWhile(arr), która zwraca pierwsze słowo
dłuższe niż 4 znaki.

Przykład:
findFirstLongWordWithWhile(["cat", "house", "dog", "banana"]);
// "house"

Warunki:
- użyj while
- nie używaj find
*/
function findFirstLongWordWithWhile(arr) {
  let i = 0;

  while (i < arr.length) {
    if (arr[i].length > 4) {
      return arr[i];
    }

    i++;
  }

  return undefined;
}

console.log(findFirstLongWordWithWhile(["cat", "house", "dog", "banana"]));
console.log(findFirstLongWordWithWhile(["a", "to", "sun"]));