/*
Day 12 — Zadanie 1

Napisz funkcję getAvailableProductTitles(products), która zwraca tablicę tytułów
produktów dostępnych w sprzedaży.

Przykład:
getAvailableProductTitles([
  { title: "Laptop", inStock: true },
  { title: "Mouse", inStock: false },
  { title: "Keyboard", inStock: true }
]);
// ["Laptop", "Keyboard"]

Wskazówka:
najpierw odfiltruj dostępne produkty, potem wyciągnij ich title
*/
function getAvailableProductTitles(products) {
  // Twoje rozwiązanie
    return users
    .filter(item => item.age >= 18)
    .map(item => item.email);
}

console.log(
  getAvailableProductTitles([
    { title: "Laptop", inStock: true },
    { title: "Mouse", inStock: false },
    { title: "Keyboard", inStock: true }
  ])
);