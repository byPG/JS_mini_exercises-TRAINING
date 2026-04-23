/*
Powtórka Day 8 — Zadanie 1

Napisz funkcję getNumbersGreaterThanFiveWithForOf(arr), która zwraca nową tablicę
tylko z liczbami większymi niż 5.

Przykład:
getNumbersGreaterThanFiveWithForOf([2, 6, 3, 8, 1]);
// [6, 8]

Warunki:
- użyj for...of
- nie używaj filter
*/
function getNumbersGreaterThanFiveWithForOf(arr) {
  const result = [];

  for(const item of arr){
    if(item > 0 ){
        result.push(item);
    }
  }

  return result;
}

console.log(getNumbersGreaterThanFiveWithForOf([2, 6, 3, 8, 1]));
console.log(getNumbersGreaterThanFiveWithForOf([10, 2, 7]));