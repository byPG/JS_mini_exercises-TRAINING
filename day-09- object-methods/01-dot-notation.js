/*
Day 9 — Zadanie 1

Napisz funkcję getUserAge(user), która zwraca wiek użytkownika z obiektu.

Przykład:
getUserAge({ name: "Anna", age: 31 });
// 31

getUserAge({ name: "Piotr", age: 28 });
// 28

Warunki:
- użyj dot notation
*/
function getUserAge(user) {
  return user.age;
}

console.log(getUserAge({ name: "Anna", age: 31 }));
console.log(getUserAge({ name: "Piotr", age: 28 }));