/*
Zadanie 5
Napisz funkcję findFirstWordWithLetterE(arr), która zwraca pierwsze słowo
zawierające literę "e".

Przykład:
findFirstWordWithLetterE(["dog", "cat", "elephant", "tree"]);
// "elephant"

findFirstWordWithLetterE(["dog", "cat", "sun"]);
// undefined

Warunki:
- użyj find
- możesz użyć includes wewnątrz find
*/
function findFirstWordWithLetterE(arr) {
  return arr.find(item => item.includes('e'))
}

console.log(findFirstWordWithLetterE(["dog", "cat", "elephant", "tree"]));
console.log(findFirstWordWithLetterE(["dog", "cat", "sun"]));