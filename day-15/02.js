/*
Day 15 — Zadanie 2

Napisz funkcję getTopTwoAdultUserNamesByAge(users), która zwraca tablicę imion
dwóch najstarszych pełnoletnich użytkowników.

Przykład:
getTopTwoAdultUserNamesByAge([
  { name: "Ania", age: 17 },
  { name: "Piotr", age: 25 },
  { name: "Ola", age: 31 },
  { name: "Marek", age: 45 }
]);
// ["Marek", "Ola"]

Wskazówka:
filter pełnoletnich -> sort malejąco po age -> slice(0, 2) -> map(name)
*/
function getTopTwoAdultUserNamesByAge(users) {
    const newTab = [...users];
    return newTab.filter((item) => item.age >= 18).sort((a, b) => b.age - a.age).slice(0, 2).map((item) => item.name);
}