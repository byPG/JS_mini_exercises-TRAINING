/*
Zadanie 4
Napisz funkcję filterEvenNumbers(arr), która zwraca nową tablicę
tylko z liczbami parzystymi.

Przykład:
filterEvenNumbers([1, 2, 3, 4, 5, 6]);
// [2, 4, 6]

Warunki:
- użyj filter
- nie zmieniaj oryginalnej tablicy
*/
function filterEvenNumbers(arr) {
 return arr.filter(item => item % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(filterEvenNumbers([11, 13, 15, 20]));

// Co warto zapamiętać
// filter() zawsze zwraca nową tablicę
// nie zmienia oryginału
// używasz go, gdy chcesz zostawić tylko wybrane elementy