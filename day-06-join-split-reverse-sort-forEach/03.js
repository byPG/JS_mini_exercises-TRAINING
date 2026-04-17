
/*
Zadanie 3
Napisz funkcję reverseArray(arr), która zwraca nową tablicę
z elementami w odwróconej kolejności.

Przykład:
reverseArray([1, 2, 3]);
// [3, 2, 1]

reverseArray(["a", "b", "c"]);
// ["c", "b", "a"]

Warunki:
- użyj reverse
- nie zmieniaj oryginalnej tablicy
*/
function reverseArray(arr) {
    const newArr = [...arr];
    return newArr.reverse();
}

console.log(reverseArray([1, 2, 3]));
console.log(reverseArray(["a", "b", "c"]));
