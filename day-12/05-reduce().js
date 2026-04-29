/*
Day 12 — Zadanie 5

Napisz funkcję getTotalProductPrice(products), która zwraca sumę cen
wszystkich produktów.

Przykład:
getTotalProductPrice([
  { title: "Laptop", price: 4000 },
  { title: "Mouse", price: 100 },
  { title: "Keyboard", price: 200 }
]);
// 4300

Warunki:
- użyj reduce()
*/
function getTotalProductPrice(products) {
  return products.reduce((acc, item) => acc + item.price, 0);
}

console.log(
  getTotalProductPrice([
    { title: "Laptop", price: 4000 },
    { title: "Mouse", price: 100 },
    { title: "Keyboard", price: 200 }
  ])
);