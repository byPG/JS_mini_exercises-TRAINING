/*
Day 8 — Zadanie 2

Napisz funkcję getEvenNumbersWithFor(arr), która zwraca nową tablicę
tylko z liczbami parzystymi.

Przykład:
getEvenNumbersWithFor([1, 2, 3, 4, 5, 6]);
// [2, 4, 6]

Warunki:
- użyj klasycznej pętli for
- nie używaj filter
*/
function getEvenNumbersWithFor(arr) {
    let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(getEvenNumbersWithFor([1, 2, 3, 4, 5, 6]));
console.log(getEvenNumbersWithFor([10, 11, 12]));