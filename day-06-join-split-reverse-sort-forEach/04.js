
/*
Zadanie 4
Napisz funkcję sortNumbersAsc(arr), która zwraca nową tablicę
z liczbami posortowanymi rosnąco.

Przykład:
sortNumbersAsc([10, 2, 30]);
// [2, 10, 30]

sortNumbersAsc([5, 1, 8]);
// [1, 5, 8]

Warunki:
- użyj sort
- nie zmieniaj oryginalnej tablicy
*/
function sortNumbersAsc(arr) {
  const newArr = [...arr];
  return newArr.sort((a, b) => a - b);
}

console.log(sortNumbersAsc([10, 2, 30]));
console.log(sortNumbersAsc([5, 1, 8]));


