/*
Powtórka Day 13 — Zadanie 1

Napisz funkcję countInactiveUsers(users), która zwraca liczbę
nieaktywnych użytkowników.

Przykład:
countInactiveUsers([
  { name: "Anna", isActive: true },
  { name: "Piotr", isActive: false },
  { name: "Ola", isActive: false }
]);
// 2

Warunki:
- użyj reduce()
*/
function countInactiveUsers(users) {
    return users.reduce((acc, item) => {
        if (!item.isActive){
            return acc + 1; }
            return acc;
        }, 0);
    }


console.log(
  countInactiveUsers([
    { name: "Anna", isActive: true },
    { name: "Piotr", isActive: false },
    { name: "Ola", isActive: false }
  ])
);