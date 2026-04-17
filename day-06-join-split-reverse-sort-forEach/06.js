/*
Powtórka 2 — Day 6

Napisz funkcję sortAndJoinWords(arr), która:
- sortuje słowa alfabetycznie,
- łączy je w jeden string oddzielony przecinkiem i spacją.

Przykład:
sortAndJoinWords(["banana", "apple", "cat"]);
// "apple, banana, cat"

Warunki:
- użyj sort
- użyj join
- nie zmieniaj oryginalnej tablicy
*/
function sortAndJoinWords(arr) {
  const newArr = [...arr];
  newArr.sort();
  return newArr.join(", ");
}

console.log(sortAndJoinWords(["banana", "apple", "cat"]));
console.log(sortAndJoinWords(["JS", "HTML", "CSS"]));