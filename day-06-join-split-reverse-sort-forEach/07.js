/*
Powtórka Day 6

Napisz funkcję reverseAndJoin(arr), która:
- odwraca kolejność elementów tablicy,
- łączy je w jeden string oddzielony myślnikiem "-".

Przykład:
reverseAndJoin(["a", "b", "c"]);
// "c-b-a"

Warunki:
- użyj reverse
- użyj join
- nie zmieniaj oryginalnej tablicy
*/
function reverseAndJoin(arr) {
const newArr = [...arr];
newArr.reverse();
return newArr.join("-");
}

console.log(reverseAndJoin(["a", "b", "c"]));
console.log(reverseAndJoin(["JS", "HTML", "CSS"]));