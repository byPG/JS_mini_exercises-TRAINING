/*
Powtórka 1
Napisz funkcję findFirstNegative(arr), która zwraca pierwszą liczbę ujemną
znajdującą się w tablicy.

Przykład:
findFirstNegative([4, 7, -2, -5, 10]);
// -2

findFirstNegative([1, 2, 3]);
// undefined

Warunki:
- użyj find
*/
function findFirstNegative(arr) {
  const arr1 = arr.find(item => item < 0);
  return arr1;
}

console.log(findFirstNegative([4, 7, -2, -5, 10]));
console.log(findFirstNegative([1, 2, 3]));