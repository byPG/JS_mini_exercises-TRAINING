/*
Zadanie 1
Napisz funkcję areAllPositive(arr), która zwraca true,
jeśli wszystkie liczby w tablicy są większe od 0.
W przeciwnym razie zwraca false.

Przykład:
areAllPositive([1, 2, 3]); // true
areAllPositive([1, -2, 3]); // false

Warunki:
- użyj every
*/
function areAllPositive(arr) {
 return arr.every(item => item > 0);
}

console.log(areAllPositive([1, 2, 3]));
console.log(areAllPositive([1, -2, 3]));