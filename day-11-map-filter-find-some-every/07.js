/*
Powtórka Day 11 — Zadanie 2

Napisz funkcję hasUnavailableProduct(products), która sprawdza,
czy istnieje choć jeden produkt z inStock ustawionym na false.

Przykład:
hasUnavailableProduct([
  { title: "Laptop", inStock: true },
  { title: "Mouse", inStock: false }
]);
// true

hasUnavailableProduct([
  { title: "Laptop", inStock: true },
  { title: "Keyboard", inStock: true }
]);
// false
*/
function hasUnavailableProduct(products) {
  return products.some(item => item.inStock === false);
}

console.log(
  hasUnavailableProduct([
    { title: "Laptop", inStock: true },
    { title: "Mouse", inStock: false }
  ])
);

console.log(
  hasUnavailableProduct([
    { title: "Laptop", inStock: true },
    { title: "Keyboard", inStock: true }
  ])
);