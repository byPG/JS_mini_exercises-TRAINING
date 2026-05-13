/*
Day 15 — Zadanie 5

Napisz funkcję allActiveUsersHaveEmail(users), która sprawdza,
czy wszyscy aktywni użytkownicy mają właściwość email.

Przykład:
allActiveUsersHaveEmail([
  { name: "Anna", isActive: true, email: "anna@test.com" },
  { name: "Piotr", isActive: false },
  { name: "Ola", isActive: true, email: "ola@test.com" }
]);
// true

allActiveUsersHaveEmail([
  { name: "Anna", isActive: true, email: "anna@test.com" },
  { name: "Ola", isActive: true }
]);
// false

Wskazówka:
najpierw odfiltruj aktywnych, potem sprawdź every()
*/
function allActiveUsersHaveEmail(users) {
 return users.filter((item) => item.isActive).
 every((item) => item.email !== undefined);
}