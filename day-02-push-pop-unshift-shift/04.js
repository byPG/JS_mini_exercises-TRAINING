/*
Zadanie 4
Napisz funkcję removeFirst(arr), która usuwa pierwszy element
i zwraca nową tablicę.

Przykład:
removeFirst([1, 2, 3, 4]);
// [2, 3, 4]

Warunki:
- użyj shift
- nie zmieniaj oryginalnej tablicy
*/
function removeFirst(arr) {
  const newArr = [...arr];
  newArr.shift();
  return newArr;
}

console.log(removeFirst([1, 2, 3, 4]));
console.log(removeFirst(["a", "b", "c"]));