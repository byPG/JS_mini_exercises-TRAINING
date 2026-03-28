/*
Powtórka 2
Napisz funkcję removeFirstAndLast(arr), która usuwa pierwszy i ostatni element
i zwraca nową tablicę.

Przykład:
removeFirstAndLast([1, 2, 3, 4, 5]);
// [2, 3, 4]

Warunki:
- użyj shift i pop
- nie zmieniaj oryginalnej tablicy
*/
function removeFirstAndLast(arr) {
  const newArr = [...arr];
  newArr.shift();
  newArr.pop();
  return newArr
}

console.log(removeFirstAndLast([1, 2, 3, 4, 5]));
console.log(removeFirstAndLast(["a", "b", "c", "d"]));

//DO ZAPAMIĘTANIA -> shift() i pop() usuwają elementy ale zwracają je jako usunięte, nie zwracaja nowej tablicy