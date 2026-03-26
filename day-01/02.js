/*
Zadanie 2
Napisz funkcję getBetweenIndexes(arr, startIndex, endIndex), która zwraca
nową tablicę z elementami od startIndex do endIndex, ale bez elementu o indeksie endIndex.

Przykład:
getBetweenIndexes(["a", "b", "c", "d", "e"], 1, 4);
// ["b", "c", "d"]

Warunki:
- użyj slice
- nie zmieniaj oryginalnej tablicy
*/
function getBetweenIndexes(arr, startIndex, endIndex) {
  const newArr= arr.slice(startIndex, endIndex);
    console.log(newArr);    
    return newArr;
}

console.log(getBetweenIndexes(["a", "b", "c", "d", "e"], 1, 4));
console.log(getBetweenIndexes([10, 20, 30, 40, 50], 0, 3));

