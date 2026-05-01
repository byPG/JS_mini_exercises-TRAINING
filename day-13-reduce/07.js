/*
Powtórka Day 13 — Zadanie 2

Napisz funkcję getTotalInactiveProductPrice(products), która zwraca sumę cen
produktów niedostępnych w sprzedaży.

Przykład:
getTotalInactiveProductPrice([
  { title: "Laptop", price: 4000, inStock: false },
  { title: "Mouse", price: 100, inStock: true },
  { title: "Keyboard", price: 200, inStock: false }
]);
// 4200

Warunki:
- użyj reduce()
*/
function getTotalInactiveProductPrice(products) {
  return products.reduce((acc, item) => {
    if(!item.inStock) {
        return acc + item.price;
    }
    return acc;

  }, 0);
}

console.log(
  getTotalInactiveProductPrice([
    { title: "Laptop", price: 4000, inStock: false },
    { title: "Mouse", price: 100, inStock: true },
    { title: "Keyboard", price: 200, inStock: false }
  ])
);