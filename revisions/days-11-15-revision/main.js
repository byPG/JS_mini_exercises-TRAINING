/*
Revision 11–15 — Zadanie 1

Napisz funkcję getUserNamesFromWarsaw(users), która zwraca tablicę imion
użytkowników z miasta "Warsaw".

Przykład:
getUserNamesFromWarsaw([
  { name: "Anna", city: "Warsaw" },
  { name: "Piotr", city: "Krakow" },
  { name: "Ola", city: "Warsaw" }
]);
// ["Anna", "Ola"]
*/
function getUserNamesFromWarsaw(users) {
  return users.filter(user => user.city === "Warsaw").map(user => user.name);
}

/*
Revision 11–15 — Zadanie 2

Napisz funkcję findFirstActiveAdmin(users), która zwraca pierwszego użytkownika,
który:
- jest adminem
- i jest aktywny

Przykład:
findFirstActiveAdmin([
  { name: "Anna", isAdmin: false, isActive: true },
  { name: "Piotr", isAdmin: true, isActive: false },
  { name: "Ola", isAdmin: true, isActive: true }
]);
// { name: "Ola", isAdmin: true, isActive: true }
*/
function findFirstActiveAdmin(users) {
  return users.find(user => user.isAdmin && user.isActive);
}

/*
Revision 11–15 — Zadanie 3

Napisz funkcję hasProductWithoutPrice(products), która sprawdza,
czy istnieje choć jeden produkt bez właściwości `price`.

Przykład:
hasProductWithoutPrice([
  { title: "Laptop", price: 4000 },
  { title: "Mouse" }
]);
// true

hasProductWithoutPrice([
  { title: "Laptop", price: 4000 },
  { title: "Mouse", price: 100 }
]);
// false
*/
function hasProductWithoutPrice(products) {
  return products.some(product => product.price === undefined);
}


/*
Revision 11–15 — Zadanie 4

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
  // Twoje rozwiązanie
  return users.filter(item => !item.isActive).reduce((acc, item) => acc + 1, 0);
}

// ALBO:

function countInactiveUsers(users) {
  return users.reduce((acc, item) => !item.isActive ? acc + 1 : acc, 0);
}



/*
Revision 11–15 — Zadanie 5

Napisz funkcję getSortedAvailableProductTitles(products), która zwraca tablicę tytułów
dostępnych produktów posortowanych malejąco po price.

Przykład:
getSortedAvailableProductTitles([
  { title: "Laptop", price: 4000, inStock: true },
  { title: "Mouse", price: 100, inStock: false },
  { title: "Keyboard", price: 200, inStock: true }
]);
// ["Laptop", "Keyboard"]
*/
function getSortedAvailableProductTitles(products) {
  return products.filter(item => item.inStock).sort((a,b) => b.price - a.price).map(item => item.title);
}