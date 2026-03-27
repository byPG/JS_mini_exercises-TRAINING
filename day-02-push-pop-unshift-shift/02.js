/*
Zadanie 2
Napisz funkcję removeLast(arr), która usuwa ostatni element
i zwraca nową tablicę.

Przykład:
removeLast([1, 2, 3, 4]);
// [1, 2, 3]

Warunki:
- użyj pop
- nie zmieniaj oryginalnej tablicy
*/
function removeLast(arr) {
  const newArr = [...arr];
  newArr.pop();
  return newArr;
}

console.log(removeLast([1, 2, 3, 4]));
console.log(removeLast(["x", "y", "z"]));