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
  return products.filter(item => item.inStock === true).map(item => item.title);
}

console.log(
  getAvailableProductTitles([
    { title: "Laptop", inStock: true },
    { title: "Mouse", inStock: false },
    { title: "Keyboard", inStock: true }
  ])
);