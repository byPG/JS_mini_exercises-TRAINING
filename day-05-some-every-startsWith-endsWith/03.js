/*
Zadanie 3
Napisz funkcję someWordsStartWithA(arr), która zwraca true,
jeśli chociaż jedno słowo zaczyna się na literę "a".

Przykład:
someWordsStartWithA(["dog", "apple", "banana"]); // true
someWordsStartWithA(["dog", "cat", "banana"]); // false

Warunki:
- użyj some
- możesz użyć startsWith
*/
function someWordsStartWithA(arr) {
  return arr.some(item => item.startsWith("a"));
}

console.log(someWordsStartWithA(["dog", "apple", "banana"]));
console.log(someWordsStartWithA(["dog", "cat", "banana"]));



/* INFO
startsWith() sprawdza, czy string zaczyna się od podanego znaku albo tekstu.

Zwraca:
true
false 

startsWith() rozróżnia wielkość liter:
"Apple".startsWith("a"); // false
"Apple".startsWith("A"); // true

*/