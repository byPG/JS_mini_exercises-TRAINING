
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