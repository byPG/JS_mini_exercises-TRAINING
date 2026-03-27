/*
Zadanie 3
Napisz funkcję addToStart(arr, value), która dodaje element na początek tablicy
i zwraca nową tablicę.

Przykład:
addToStart([2, 3, 4], 1);
// [1, 2, 3, 4]

Warunki:
- użyj unshift
- nie zmieniaj oryginalnej tablicy
*/
function addToStart(arr, value) {
  const newArr = [...arr];
    newArr.unshift(value);
    return newArr;
}

console.log(addToStart([2, 3, 4], 1));
console.log(addToStart(["b", "c"], "a"));

// Good to remember:
// push    -> dodaje na koniec
// pop     -> usuwa z końca
// unshift -> dodaje na początek
// shift   -> usuwa z początku

// I ważne:
// push, pop, shift, unshift zmieniają tablicę
// więc do zadań najpierw rób kopię tablicy, a potem używaj tych metod na kopii.