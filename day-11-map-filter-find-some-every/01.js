/*
Day 11 — Zadanie 1

Napisz funkcję getAdultUserNames(users), która zwraca tablicę imion
użytkowników mających 18 lat lub więcej.

Przykład:
getAdultUserNames([
  { name: "Ania", age: 17 },
  { name: "Piotr", age: 22 },
  { name: "Ola", age: 30 }
]);
// ["Piotr", "Ola"]

Wskazówka:
najpierw odfiltruj pełnoletnich, potem wyciągnij same imiona
*/
function getAdultUserNames(users) {
  // Twoje rozwiązanie
    const ageOfUsers = users.filter((item) => item.age >= 18);

  return ageOfUsers.map((item) => item.name);
}

console.log(
  getAdultUserNames([
    { name: "Ania", age: 17 },
    { name: "Piotr", age: 22 },
    { name: "Ola", age: 30 }
  ])
);