/*
Zadanie 3
Napisz funkcję removeOneElement(arr, index), która usuwa 1 element
od podanego indeksu i zwraca nową tablicę po zmianie.

Przykład:
removeOneElement(["dog", "cat", "apple", "banana"], 1);
// ["dog", "apple", "banana"]

Warunki:
- użyj splice
- nie zmieniaj oryginalnej tablicy
- pamiętaj, że splice zmienia tablicę, więc najpierw zrób kopię
*/
function removeOneElement(arr, index) {
    const copyArr = [...arr];
    copyArr.splice(index, 1);
    console.log(copyArr);
    return copyArr;
}

console.log(removeOneElement(["dog", "cat", "apple", "banana"], 1));
console.log(removeOneElement(["x", "y", "z"], 0));

//Najkrócej do zapamiętania:
// slice(start, end)   // bierze fragment
// splice(index, 1)    // usuwa element