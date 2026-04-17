/*
Zadanie 2
Napisz funkcję splitSentence(sentence), która zwraca tablicę słów z podanego zdania.

Przykład:
splitSentence("JavaScript is fun");
// ["JavaScript", "is", "fun"]

splitSentence("hello world");
// ["hello", "world"]

Warunki:
- użyj split
*/
function splitSentence(sentence) {
  return sentence.split(" ");
}

console.log(splitSentence("JavaScript is fun"));
console.log(splitSentence("hello world"));
