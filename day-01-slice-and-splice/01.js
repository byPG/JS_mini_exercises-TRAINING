/*
Zadanie 1
Napisz funkcję wordsFromIndex(arr, startIndex), która zwraca nową tablicę
z elementami od podanego indeksu do końca.

Przykład:
wordsFromIndex(["dog", "cat", "apple", "banana", "kiwi"], 2);
// ["apple", "banana", "kiwi"]

Warunki:
- użyj metody slice
- nie zmieniaj oryginalnej tablicy
*/
function wordsFromIndex(arr, startIndex) {
 const newArr = arr.slice(startIndex);
  console.log(newArr);
  return newArr;
}

console.log(wordsFromIndex(["dog", "cat", "apple", "banana", "kiwi"], 2));
console.log(wordsFromIndex(["a", "b", "c", "d"], 1));

//Good to remember:
//* SLICE - slect - służy do pobrania/stworzenia nowej tablicy z fragmentu istniejącej; nie zmienia oryfinalnej tablicy
// bierze fragment
// zwraca nową tablicę
// nie rusza oryginału

// Szybka ściąga:
// slice(start, end)
// bierze od start
// kończy przed end
// nie zmienia oryginału

//* SPLICE - surgery - służy do ZMIANY tablicy, dodaje, usuwa lub podmienia elementy w tablicy; metoda ta zmienia oryginalną tablicę
// wycina / dodaje / podmienia
// zmienia oryginalną tablic

// Szybka ściąga:
// splice(start, deleteCount, ...items)
// zaczyna od start
// usuwa deleteCount
// opcjonalnie dodaje nowe elementy
//zmienia oryginał