/*
Zadanie 5
Napisz funkcję filterWordsEndingWithA(arr), która zwraca nową tablicę
tylko z tymi słowami, które kończą się na literę "a".

Przykład:
filterWordsEndingWithA(["kot", "kawa", "lama", "pies"]);
// ["kawa", "lama"]

Warunki:
- użyj filter
- możesz użyć endsWith
*/
function filterWordsEndingWithA(arr) {
  return arr.filter(item => item.endsWith("a"));
}

console.log(filterWordsEndingWithA(["kot", "kawa", "lama", "pies"]));
console.log(filterWordsEndingWithA(["Java", "Python", "Scala"]));


/* INFO
endsWith() sprawdza, czy string kończy się od podanego znaku albo tekstu.

Zwraca:
true
false 

endsWith() rozróżnia wielkość liter:
"Apple".endsWith("a"); // true
"Apple".endsWith("A"); // false

*/