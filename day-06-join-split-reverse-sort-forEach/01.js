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

