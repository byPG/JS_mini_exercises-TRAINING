/*
Zadanie 1
Napisz funkcję addToEnd(arr, value), która dodaje element na koniec tablicy
i zwraca nową tablicę.

Przykład:
addToEnd([1, 2, 3], 4);
// [1, 2, 3, 4]

Warunki:
- użyj push
- nie zmieniaj oryginalnej tablicy
*/
function addToEnd(arr, value) {
  const newArr = [...arr];
  newArr.push(value);
  return newArr;
}

console.log(addToEnd([1, 2, 3], 4));
console.log(addToEnd(["a", "b"], "c"));

