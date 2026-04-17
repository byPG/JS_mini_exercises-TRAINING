/*
Zadanie 2
Napisz funkcję flattenArray(arr), która zwraca spłaszczoną tablicę.

Przykład:
flattenArray([1, [2, 3], [4, 5]]);
// [1, 2, 3, 4, 5]

Warunki:
- użyj flat
*/
function flattenArray(arr) {
return arr.flat();
}

console.log(flattenArray([1, [2, 3], [4, 5]]));
console.log(flattenArray(["a", ["b", "c"], ["d"]]));