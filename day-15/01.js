/*
Day 15 — Zadanie 1

Napisz funkcję getAvailableProductNamesSortedByPrice(products), która zwraca tablicę tytułów
produktów dostępnych w sprzedaży, posortowanych rosnąco po price.

Przykład:
getAvailableProductNamesSortedByPrice([
  { title: "Laptop", price: 4000, inStock: true },
  { title: "Mouse", price: 100, inStock: false },
  { title: "Keyboard", price: 200, inStock: true }
]);
// ["Keyboard", "Laptop"]

Wskazówka:
filter -> sort -> map
*/
function getAvailableProductNamesSortedByPrice(products) {
  const newTab = [...products];
  return newTab.filter((item) => item.inStock).sort((a,b) => a.price - b.price).map(item => item.title);
}