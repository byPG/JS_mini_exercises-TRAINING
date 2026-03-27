/*
Zadanie 5
Napisz funkcję insertWithoutRemoving(arr, index, newValue), która wstawia
nowy element pod podany indeks i niczego nie usuwa.

Przykład:
insertWithoutRemoving(["a", "b", "d"], 2, "c");
// ["a", "b", "c", "d"]

Warunki:
- użyj splice
- ustaw deleteCount na 0
- nie zmieniaj oryginalnej tablicy
*/
function insertWithoutRemoving(arr, index, newValue) {
    const newArr = [...arr];
    newArr.splice(index, 0, newValue);
    return newArr;
}

console.log(insertWithoutRemoving(["a", "b", "d"], 2, "c"));
console.log(insertWithoutRemoving([10, 20, 40], 2, 30));