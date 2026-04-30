/*
Day 13 — Zadanie 5

Napisz funkcję countAdminUsers(users), która zwraca liczbę użytkowników,
którzy mają isAdmin ustawione na true.

Przykład:
countAdminUsers([
  { name: "Anna", isAdmin: false },
  { name: "Piotr", isAdmin: true },
  { name: "Ola", isAdmin: true }
]);
// 2

Warunki:
- użyj reduce()
*/
function countAdminUsers(users) {
  return users.reduce((acc, item) => {
    if(item.isAdmin){
        return acc +1;
    }

    return acc;
  }, 0);
}

console.log(
  countAdminUsers([
    { name: "Anna", isAdmin: false },
    { name: "Piotr", isAdmin: true },
    { name: "Ola", isAdmin: true }
  ])
);