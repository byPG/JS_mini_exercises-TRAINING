/*
Zadanie 5
Napisz funkcję copyArray(arr), która zwraca kopię tablicy.

Przykład:
copyArray([1, 2, 3]);
// [1, 2, 3]

Warunki:
- zrób 2 wersje:
  1. użyj spread operator [...arr]
  2. użyj slice
- nie zmieniaj oryginalnej tablicy
*/
function copyArraySpread(arr) {
    const newArr = [...arr];
    return newArr;
}

function copyArraySlice(arr) {
    const newArr = arr.slice();
    return newArr;
}

console.log(copyArraySpread([1, 2, 3]));
console.log(copyArraySlice(["a", "b", "c"]));