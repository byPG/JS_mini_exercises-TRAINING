/*
Powtórka pętle — Zadanie 1

Napisz funkcję getOddNumbersWithForOf(arr), która zwraca nową tablicę
tylko z liczbami nieparzystymi.

Przykład:
getOddNumbersWithForOf([1, 2, 3, 4, 5]);
// [1, 3, 5]

Warunki:
- użyj for...of
- nie używaj filter
*/
function getOddNumbersWithForOf(arr) {
  const newTab = [];

  for(const item of arr) {
    if( item % 2 !== 0) {
        newTab.push(item);
    }
  }
  return newTab;
}

console.log(getOddNumbersWithForOf([1, 2, 3, 4, 5]));
console.log(getOddNumbersWithForOf([10, 11, 12, 13]));