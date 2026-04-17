/*
Zadanie 3
Napisz funkcję mergeArrays(arr1, arr2), która zwraca nową tablicę
powstałą z połączenia dwóch tablic.

Przykład:
mergeArrays([1, 2], [3, 4]);
// [1, 2, 3, 4]

mergeArrays(["a", "b"], ["c", "d"]);
// ["a", "b", "c", "d"]

Warunki:
- użyj concat
*/
function mergeArrays(arr1, arr2) {
  const combinedArr = arr1.concat(arr2);
  return combinedArr;
}

console.log(mergeArrays([1, 2], [3, 4]));
console.log(mergeArrays(["a", "b"], ["c", "d"]));