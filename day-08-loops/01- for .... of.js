/*
Day 8 — Zadanie 1

Napisz funkcję doubleNumbersWithForOf(arr), która zwraca nową tablicę,
w której każda liczba jest pomnożona razy 2.

Przykład:
doubleNumbersWithForOf([1, 2, 3]);
// [2, 4, 6]

doubleNumbersWithForOf([5, 10, 15]);
// [10, 20, 30]

Warunki:
- użyj pętli for...of
- nie używaj map
*/
function doubleNumbersWithForOf(arr) {
  const result = [];

  for ( item of arr){
    result.push(item * 2);
  }

  return result;
}

console.log(doubleNumbersWithForOf([1, 2, 3]));
console.log(doubleNumbersWithForOf([5, 10, 15]));