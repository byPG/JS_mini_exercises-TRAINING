/*
Powtórka 2
Napisz funkcję replaceOneElement(arr, index, newValue), która usuwa
1 element pod podanym indeksem i wstawia w jego miejsce nową wartość.

Przykład:
replaceOneElement(["a", "b", "c", "d"], 2, "x");
// ["a", "b", "x", "d"]

Warunki:
- użyj splice
- nie zmieniaj oryginalnej tablicy
- pamiętaj, że splice zmienia tablicę, więc najpierw zrób kopię
*/
function replaceOneElement(arr, index, newValue) {
  const newArr = [...arr];
  newArr.splice(index, 1, newValue);
  return newArr;
}

console.log(replaceOneElement(["a", "b", "c", "d"], 2, "x"));
console.log(replaceOneElement([10, 20, 30, 40], 1, 99));