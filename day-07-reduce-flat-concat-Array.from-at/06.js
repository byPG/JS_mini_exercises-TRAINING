/*
Powtórka Day 7 — Zadanie 1

Napisz funkcję sumOddNumbers(arr), która zwraca sumę
wszystkich liczb nieparzystych w tablicy.

Przykład:
sumOddNumbers([1, 2, 3, 4, 5]);
// 9

sumOddNumbers([10, 11, 12, 13]);
// 24

Warunki:
- użyj reduce
*/
function sumOddNumbers(arr) {
  return arr.reduce ((acc, item) => {
    if(item % 2 !==0) {
      return acc + item;
    }else{
        return acc;
    }

  }, 0);
}


// krótsza wersja
function sumOddNumbers(arr) {
  return arr.reduce((acc, item) => item % 2 !== 0 ? acc + item : acc, 0);
}


console.log(sumOddNumbers([1, 2, 3, 4, 5]));
console.log(sumOddNumbers([10, 11, 12, 13]));