/*
Powtórka 1
Napisz funkcję getLastThreeElements(arr), która zwraca nową tablicę
z trzema ostatnimi elementami.

Przykład:
getLastThreeElements(["a", "b", "c", "d", "e"]);
// ["c", "d", "e"]

Warunki:
- użyj slice
- nie zmieniaj oryginalnej tablicy
*/
function getLastThreeElements(arr) {
  const newArr = arr.slice(-3); //weź trzy ostatnie elementy tablicy
    return newArr;
}

console.log(getLastThreeElements(["a", "b", "c", "d", "e"]));
console.log(getLastThreeElements([1, 2, 3, 4, 5, 6]));