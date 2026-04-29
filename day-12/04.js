/*
Day 12 — Zadanie 4

Napisz funkcję hasActiveAdmin(users), która sprawdza, czy istnieje
choć jeden użytkownik, który:
- ma isAdmin ustawione na true
- i ma isActive ustawione na true

Przykład:
hasActiveAdmin([
  { name: "Anna", isAdmin: false, isActive: true },
  { name: "Piotr", isAdmin: true, isActive: true }
]);
// true

hasActiveAdmin([
  { name: "Anna", isAdmin: true, isActive: false },
  { name: "Ola", isAdmin: false, isActive: true }
]);
// false
*/
function hasActiveAdmin(users) {
  // Twoje rozwiązanie
  return users.some(item => item.isAdmin === true && item.isActive === true);
}

console.log(
  hasActiveAdmin([
    { name: "Anna", isAdmin: false, isActive: true },
    { name: "Piotr", isAdmin: true, isActive: true }
  ])
);

console.log(
  hasActiveAdmin([
    { name: "Anna", isAdmin: true, isActive: false },
    { name: "Ola", isAdmin: false, isActive: true }
  ])
);