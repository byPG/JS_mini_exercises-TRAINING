/*
Powtórka Day 8 — Zadanie 2

Napisz funkcję hasWordLongerThanFiveWithFor(arr), która zwraca true,
jeśli w tablicy znajduje się chociaż jedno słowo dłuższe niż 5 znaków.
W przeciwnym razie zwraca false.

Przykład:
hasWordLongerThanFiveWithFor(["cat", "banana", "dog"]);
// true

hasWordLongerThanFiveWithFor(["cat", "dog", "sun"]);
// false

Warunki:
- użyj klasycznej pętli for
- nie używaj some
*/
function hasWordLongerThanFiveWithFor(arr) {
  for (let i = 0; i < arr.length; i++){

    if(arr[i].length > 5){
        return true;
    }
  }
  return false;
}

console.log(hasWordLongerThanFiveWithFor(["cat", "banana", "dog"]));
console.log(hasWordLongerThanFiveWithFor(["cat", "dog", "sun"]));