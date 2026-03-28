/*
Powtórka 1
Napisz funkcję addTwoToEnd(arr, value1, value2), która dodaje dwa elementy
na koniec tablicy i zwraca nową tablicę.

Przykład:
addTwoToEnd([1, 2], 3, 4);
// [1, 2, 3, 4]

Warunki:
- użyj push
- nie zmieniaj oryginalnej tablicy
*/
function addTwoToEnd(arr, value1, value2) {
  const newArr = [...arr];
  newArr.push(value1, value2);
  return newArr;
}

console.log(addTwoToEnd([1, 2], 3, 4));
console.log(addTwoToEnd(["a"], "b", "c"));