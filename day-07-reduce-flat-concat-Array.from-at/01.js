///Wszystkie metody NIE ZMIENIAJĄ oryginalnej tablicy. Zawsze zwracają nową wartość.


// reduce() służy do sprowadzania tablicy do jednej wartości.

// Może zwrócić:

// liczbę,
// string,
// obiekt,
// tablicę,
// cokolwiek.

// Najprostszy przykład: suma liczb.

// const numbers = [1, 2, 3, 4];

// const sum = numbers.reduce((acc, item) => acc + item, 0);

// console.log(sum); // 10


//---------------------------
// flat()
// flat() spłaszcza zagnieżdżone tablice.

// const arr = [1, [2, 3], [4, 5]];

// console.log(arr.flat());
// // [1, 2, 3, 4, 5]

// Jeśli zagnieżdżenie jest głębsze:
// const arr = [1, [2, [3, 4]]];

// console.log(arr.flat(2));
// // [1, 2, 3, 4]


//---------------------------
// concat()
// concat() łączy tablice i zwraca nową tablicę.

// const arr1 = [1, 2];
// const arr2 = [3, 4];

// console.log(arr1.concat(arr2));
// // [1, 2, 3, 4]

// Nie zmienia oryginałów.

// Alternatywa, którą często zobaczysz:

// const result = [...arr1, ...arr2];


//---------------------------
// Array.from()
// Array.from() tworzy tablicę z czegoś tablicopodobnego albo iterowalnego.

// Najprostszy przykład: string na tablicę znaków.

// Array.from("hello");
// // ["h", "e", "l", "l", "o"]

//---------------------------
// at()
// at() pobiera element z tablicy po indeksie.
// const arr = ["a", "b", "c"];

// arr.at(0); // "a"
// arr.at(1); // "b"

// Najfajniejsze: działa z ujemnymi indeksami.
// arr.at(-1); // "c"
// arr.at(-2); // "b"

/*
Zadanie 1
Napisz funkcję sumNumbers(arr), która zwraca sumę wszystkich liczb w tablicy.

Przykład:
sumNumbers([1, 2, 3, 4]);
// 10

sumNumbers([10, 20, 30]);
// 60

Warunki:
- użyj reduce
*/
function sumNumbers(arr) {
  return arr.reduce((acc, item) => acc + item, 0);
}

console.log(sumNumbers([1, 2, 3, 4]));
console.log(sumNumbers([10, 20, 30]));