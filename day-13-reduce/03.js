/*
Day 13 — Zadanie 3

Napisz funkcję countAvailableProducts(products), która zwraca liczbę
produktów dostępnych w sprzedaży.

Przykład:
countAvailableProducts([
  { title: "Laptop", inStock: true },
  { title: "Mouse", inStock: false },
  { title: "Keyboard", inStock: true }
]);
// 2

Warunki:
- użyj reduce()
*/
function countAvailableProducts(products) {
  return products.reduce((acc,item) => item.inStock ? acc + 1 : acc, 0);
}

console.log(
  countAvailableProducts([
    { title: "Laptop", inStock: true },
    { title: "Mouse", inStock: false },
    { title: "Keyboard", inStock: true }
  ])
);