/*
Zadanie 4
Napisz funkcję replaceElements(arr, startIndex, deleteCount, ...newItems),
która usuwa określoną liczbę elementów i wstawia w to miejsce nowe.

Przykład:
replaceElements(["a", "b", "c", "d", "e"], 1, 2, "x", "y");
// ["a", "x", "y", "d", "e"]

Warunki:
- użyj splice
- nie zmieniaj oryginalnej tablicy
*/
function replaceElements(arr, startIndex, deleteCount, ...newItems) {
  // Twoje rozwiązanie
  const newArr = [...arr];
    newArr.splice(startIndex, deleteCount, ...newItems);
    return newArr;
}

console.log(replaceElements(["a", "b", "c", "d", "e"], 1, 2, "x", "y"));
console.log(replaceElements([1, 2, 3, 4], 2, 1, 99));