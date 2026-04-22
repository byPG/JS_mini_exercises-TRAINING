/*
Day 8 — Zadanie 5

Napisz funkcję areAllWordsShorterThanSixWithFor(arr), która zwraca true,
jeśli wszystkie słowa mają mniej niż 6 znaków.
W przeciwnym razie zwraca false.

Przykład:
areAllWordsShorterThanSixWithFor(["cat", "dog", "apple"]);
// true

areAllWordsShorterThanSixWithFor(["cat", "elephant", "dog"]);
// false

Warunki:
- użyj klasycznej pętli for
- nie używaj every
*/
function areAllWordsShorterThanSixWithFor(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 6) {
      return false;
    }
  }
  return true;
}

console.log(areAllWordsShorterThanSixWithFor(["cat", "dog", "apple"]));
console.log(areAllWordsShorterThanSixWithFor(["cat", "elephant", "dog"]));