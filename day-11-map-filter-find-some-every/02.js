/*
Day 11 — Zadanie 2

Napisz funkcję getAvailableProducts(products), która zwraca tylko te produkty,
które mają inStock ustawione na true.

Przykład:
getAvailableProducts([
  { title: "Laptop", inStock: true },
  { title: "Mouse", inStock: false },
  { title: "Keyboard", inStock: true }
]);
// [
//   { title: "Laptop", inStock: true },
//   { title: "Keyboard", inStock: true }
// ]

Warunki:
- użyj filter()
*/
function getAvailableProducts(products) {
  return products.filter((item) => item.inStock === true);
}

console.log(
  getAvailableProducts([
    { title: "Laptop", inStock: true },
    { title: "Mouse", inStock: false },
    { title: "Keyboard", inStock: true }
  ])
);