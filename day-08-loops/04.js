/*
Day 8 — Zadanie 4

Napisz funkcję hasNegativeNumberWithForOf(arr), która zwraca true,
jeśli w tablicy znajduje się chociaż jedna liczba ujemna.
W przeciwnym razie zwraca false.

Przykład:
hasNegativeNumberWithForOf([3, 7, -1, 9]);
// true

hasNegativeNumberWithForOf([1, 2, 3, 4]);
// false

Warunki:
- użyj for...of
- nie używaj some
*/
function hasNegativeNumberWithForOf(arr) {
  for ( const item of arr){
    if(item < 0){
        return true;
    } else {
        return false;
    }
  }
  return false;
  }

console.log(hasNegativeNumberWithForOf([3, 7, -1, 9]));
console.log(hasNegativeNumberWithForOf([1, 2, 3, 4]));