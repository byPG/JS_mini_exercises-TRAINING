// day 06 - join, split, reverse, sort, forEach

// join() - łączy elementy tablicy w jeden string, używając separatora; zwraca string; nie mutuje oryginalnej tablicy
//Example:
["Ala", "ma", "kota"].join(" ")
// "Ala ma kota"


// split() - dzieli string na tablice, używając separatora; zwraca nową tablicę; nie mutuje oryginalnego stringa
//Example:
"Ala ma kota".split(" ")
// ["Ala", "ma", "kota"]

// reverse() - odwraca kolejność elementów w tablicy; zwraca odwróconą, nową tablicę; mutuje oryginalną tablicę
//Example:
[1, 2, 3].reverse()
// [3, 2, 1]   

//sort() - sortuje elementy tablicy; zwraca posortowaną, nową tablicę; mutuje oryginalną tablicę
//Example:
[3, 1, 2].sort()
// [1, 2, 3]   

//Rosnąco (a,b) => a - b
//Malejąco (a,b) => b - a

// forEach() - wykonuje podaną funkcję dla każdego elementu tablicy; zwraca undefined; nie mutuje oryginalnej tablicy; nie tworzy nowej tablicy
//Example:
[1, 2, 3].forEach(num => console.log(num))
// 1
// 2
// 3

// day 7 - reduce, flat, concat, Array.from, at

// reduce() - sprowadza tablice do jednej wartości, wykonując funkcję dla każdego elementu tablicy; zwraca pojedynczą wartość; nie mutuje oryginalnej tablicy
//Example:
[1, 2, 3].reduce((acc, num) => acc + num, 0)
// 6

// flat() - spłaszcza zagnieżdżone tablice do określonego poziomu; zwraca nową, spłaszczoną tablicę; nie mutuje oryginalnej tablicy
//Example:
[1, [2, [3]]].flat(2)
// [1, 2, 3]

// concat() - łączy dwie lub więcej tablic; zwraca nową tablicę; nie mutuje oryginalnych tablic
//Example:
[1, 2].concat([3, 4])
// [1, 2, 3, 4]

// Array.from() - tworzy nową tablicę z iterowalnego lub podobnego do tablicy obiektu; zwraca nową tablicę; nie mutuje oryginalnego obiektu
//Example:
Array.from("Hello")
// ["H", "e", "l", "l", "o"]    

// at() - zwraca element tablicy na podstawie podanego indeksu albo undefined; zwraca pojedynczą wartość; nie mutuje oryginalnej tablicy
//Example:
[1, 2, 3].at(1)
// 2

// day 8 - for, for ... of, while
// for - wykonuje blok kodu określoną liczbę razy; nie zwraca wartości; nie mutuje oryginalnej tablicy
//Example:
for (let i = 0; i < 5; i++) {}

// for ... of - iteruje po elementach iterowalnego obiektu; nie zwraca wartości; nie mutuje oryginalnej tablicy
//Example:
for (const num of [1, 2, 3]) {
  console.log(num);
}

// while - wykonuje blok kodu, dopóki warunek jest prawdziwy; nie zwraca wartości; nie mutuje oryginalnej tablicy
//Example:
let i = 0;
while (i < 5) {
  i++;
}

//day 9 - obiekty - Object.keys(), Object.values(), Object.entries()
//day 10 - tablice obiektów - tablice, obiekty, metody tablicowe
