/*
Zadanie 3
Napisz funkcję findFirstLongWord(arr), która zwraca pierwsze słowo
dłuższe niż 5 znaków.

Przykład:
findFirstLongWord(["cat", "house", "elephant", "dog"]);
//"elephant"

Warunki:
- użyj find
- jeśli nie ma pasującego słowa, funkcja ma zwrócić undefined
*/
function findFirstLongWord(arr) {
  return arr.find(item => item.length > 5);
}

console.log(findFirstLongWord(["cat", "house", "elephant", "dog"]));
console.log(findFirstLongWord(["a", "be", "sun"]));