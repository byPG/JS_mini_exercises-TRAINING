// Zadania powtórkowe — Day 1–5

/*
Napisz funkcję getLastTwo(arr), która zwraca nową tablicę
z dwoma ostatnimi elementami.

Przykład:
getLastTwo(["a", "b", "c", "d"]);
// ["c", "d"]

Warunki:
- użyj slice
*/
function getLastTwo(arr) {
 return arr.slice(-2);
}

console.log(getLastTwo(["a", "b", "c", "d"]));
console.log(getLastTwo([10, 20, 30, 40, 50]));

/*
Napisz funkcję replaceSecondElement(arr, newValue), która podmienia drugi element tablicy
na nową wartość i zwraca nową tablicę.

Przykład:
replaceSecondElement(["a", "b", "c"], "x");
// ["a", "x", "c"]

Warunki:
- użyj splice
- nie zmieniaj oryginalnej tablicy
*/
function replaceSecondElement(arr, newValue) {
  const newArr = [...arr];
  newArr.splice(1,1, newValue);
  return newArr;
}

console.log(replaceSecondElement(["a", "b", "c"], "x"));
console.log(replaceSecondElement([1, 2, 3], 99));


/*
Napisz funkcję removeFirstAddLast(arr, value), która usuwa pierwszy element
i dodaje nową wartość na koniec.

Przykład:
removeFirstAddLast([1, 2, 3], 4);
// [2, 3, 4]

Warunki:
- użyj shift i push
- nie zmieniaj oryginalnej tablicy
*/
function removeFirstAddLast(arr, value) {
   const newArr = [...arr];
  newArr.shift();
  newArr.push(value);
  return newArr;
}

console.log(removeFirstAddLast([1, 2, 3], 4));
console.log(removeFirstAddLast(["a", "b", "c"], "d"));

//Najwazniejsze//
// push()  // zmienia tablicę, ale zwraca długość
// pop()   // zmienia tablicę i zwraca usunięty element
// shift() // zmienia tablicę i zwraca usunięty element



/*
Napisz funkcję hasCss(arr), która zwraca true,
jeśli tablica zawiera słowo "CSS".

Przykład:
hasCss(["HTML", "CSS", "JS"]);
// true

hasCss(["HTML", "JS"]);
// false

Warunki:
- użyj includes
*/
function hasCss(arr) {
  return arr.includes("CSS");
}

console.log(hasCss(["HTML", "CSS", "JS"]));
console.log(hasCss(["HTML", "JS"]));


/*
Napisz funkcję findFirstWordLongerThanFour(arr), która zwraca pierwsze słowo
dłuższe niż 4 znaki.

Przykład:
findFirstWordLongerThanFour(["cat", "house", "elephant"]);
// "house"

Warunki:
- użyj find
*/
function findFirstWordLongerThanFour(arr) {
  return arr.find(word => word.length > 4);
}

console.log(findFirstWordLongerThanFour(["cat", "house", "elephant"]));
console.log(findFirstWordLongerThanFour(["a", "to", "sun"]));


/*
Napisz funkcję filterWordsStartingWithB(arr), która zwraca nową tablicę
tylko ze słowami zaczynającymi się na "b".

Przykład:
filterWordsStartingWithB(["banana", "cat", "book", "dog"]);
// ["banana", "book"]

Warunki:
- użyj filter
- możesz użyć startsWith
*/
function filterWordsStartingWithB(arr) {
  return arr.filter(item => item.startsWith("b"));
}

console.log(filterWordsStartingWithB(["banana", "cat", "book", "dog"]));
console.log(filterWordsStartingWithB(["apple", "bee", "ball"]));


/*
Napisz funkcję getLastLetters(arr), która zwraca nową tablicę
z ostatnimi literami każdego słowa.

Przykład:
getLastLetters(["dog", "banana", "sun"]);
// ["g", "a", "n"]

Warunki:
- użyj map
*/
function getLastLetters(arr) {
  return arr.map(item => item[item.length - 1]);

  //alternatywnie: return arr.map(item => item.slice(-1));
}

console.log(getLastLetters(["dog", "banana", "sun"]));
console.log(getLastLetters(["JavaScript", "HTML", "CSS"]));


/*
Napisz funkcję hasWordEndingWithA(arr), która zwraca true,
jeśli chociaż jedno słowo kończy się na "a".

Przykład:
hasWordEndingWithA(["dog", "banana", "sun"]);
// true

Warunki:
- użyj some
- możesz użyć endsWith
*/
function hasWordEndingWithA(arr) {
  return arr.some(item => item.endsWith("a"));
}

console.log(hasWordEndingWithA(["dog", "banana", "sun"]));
console.log(hasWordEndingWithA(["dog", "sun", "cat"]));


/*
Napisz funkcję areAllNumbersEven(arr), która zwraca true,
jeśli wszystkie liczby w tablicy są parzyste.

Przykład:
areAllNumbersEven([2, 4, 6]);
// true

areAllNumbersEven([2, 3, 6]);
// false

Warunki:
- użyj every
*/
function areAllNumbersEven(arr) {
  return arr.every(item => item % 2 === 0);
}

console.log(areAllNumbersEven([2, 4, 6]));
console.log(areAllNumbersEven([2, 3, 6]));


/*
Napisz funkcję getLengthsOfWordsWithA(arr), która:
- zostawia tylko słowa zawierające literę "a"
- zwraca tablicę długości tych słów

Przykład:
getLengthsOfWordsWithA(["dog", "cat", "banana", "sun"]);
// [3, 6]

Warunki:
- użyj filter
- użyj map
*/
function getLengthsOfWordsWithA(arr) {
   const newArr = arr.filter(item => item.includes("a"));
   return newArr.map(item => item.length);
}

console.log(getLengthsOfWordsWithA(["dog", "cat", "banana", "sun"]));
console.log(getLengthsOfWordsWithA(["apple", "kiwi", "grape"]));

// ----------------------------------------------------
//PODSUMOWANIE:
// Metody tylko dla tablic:
// map()
// filter()
// find()
// some()
// every()
// push()
// pop()
// shift()
// unshift()
// splice()

// Metody tylko dla stringów:
// startsWith()
// endsWith()

// Metody dla tablic i stringów:
// includes()
// slice()
// indexOf()