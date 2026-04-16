// Krótka powtórka  metod

// join() - Metoda tablicy. Zamienia tablicę w string. Nie zmienia oryginalnej tablicy.
// ["hello", "world"].join(" ")
// "hello world"


// split() - Metoda stringa. Zamienia stringa w tablicę. Nie zmienia oryginalnego stringa.
// "hello world".split(" ")
// ["hello", "world"]


// reverse() - Metoda tablicy. Odwraca kolejność elementów w tablicy. Zmienia oryginalną tablicę.
// const arr = [1, 2, 3];

// arr.reverse();

// console.log(arr);
// [3, 2, 1]


// sort() - Metoda tablicy. Sortuje elementy w tablicy. Zmienia oryginalną tablicę.
// const numbers = [10, 2, 30];

// numbers.sort((a, b) => a - b);

// console.log(numbers);
// [2, 10, 30]

//Dla liczb sortowanie jest domyślnie alfabetyczne, dlatego musimy podać funkcję porównującą, aby sortować liczby poprawnie.
// (a, b) => a - b
//Dla rosnąco: arr.sort((a, b) => a - b)
//Dla malejąco: arr.sort((a, b) => b - a)

// forEach() - Metoda tablicy. Wykonuje podaną funkcję dla każdego elementu w tablicy. Nie zmienia oryginalnej tablicy.
//["a", "b", "c"].forEach(item => {
//   console.log(item);
// });
//forEach() nie służy do tworzenia nowej tablicy.
// Do nowej tablicy używamy raczej map() albo filter()



/*
Zadanie 1
Napisz funkcję joinWords(arr), która zwraca string z połączonych słów,
oddzielonych spacją.

Przykład:
joinWords(["hello", "world"]);
// "hello world"

joinWords(["JavaScript", "is", "fun"]);
// "JavaScript is fun"

Warunki:
- użyj join
*/
function joinWords(arr) {
  return arr.join(" ");
}

console.log(joinWords(["hello", "world"]));
console.log(joinWords(["JavaScript", "is", "fun"]));


/*
Zadanie 2
Napisz funkcję splitSentence(sentence), która zwraca tablicę słów z podanego zdania.

Przykład:
splitSentence("JavaScript is fun");
// ["JavaScript", "is", "fun"]

splitSentence("hello world");
// ["hello", "world"]

Warunki:
- użyj split
*/
function splitSentence(sentence) {
  return sentence.split(" ");
}

console.log(splitSentence("JavaScript is fun"));
console.log(splitSentence("hello world"));

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



/*
Zadanie 4
Napisz funkcję sortNumbersAsc(arr), która zwraca nową tablicę
z liczbami posortowanymi rosnąco.

Przykład:
sortNumbersAsc([10, 2, 30]);
// [2, 10, 30]

sortNumbersAsc([5, 1, 8]);
// [1, 5, 8]

Warunki:
- użyj sort
- nie zmieniaj oryginalnej tablicy
*/
function sortNumbersAsc(arr) {
  const newArr = [...arr];
  return newArr.sort((a, b) => a - b);
}

console.log(sortNumbersAsc([10, 2, 30]));
console.log(sortNumbersAsc([5, 1, 8]));



/*
Zadanie 5
Napisz funkcję logWords(arr), która wypisuje każde słowo w konsoli.

Przykład:
logWords(["dog", "cat", "banana"]);

W konsoli:
dog
cat
banana

Warunki:
- użyj forEach
- funkcja nie musi nic zwracać
*/
function logWords(arr) {
  arr.forEach(item => console.log(item));
}

logWords(["dog", "cat", "banana"]);
logWords(["JS", "HTML", "CSS"]);

/*PODSUMOWANIE*/
// join()    -> tablica na string
// split()   -> string na tablicę
// reverse() -> odwraca tablicę, mutuje
// sort()    -> sortuje tablicę, mutuje
// forEach() -> wykonuje akcję dla każdego elementu