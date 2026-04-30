/*
Day 13 — Zadanie 4

Napisz funkcję getTotalAvailableProductPrice(products), która zwraca sumę cen
tylko tych produktów, które są dostępne.

Przykład:
getTotalAvailableProductPrice([
  { title: "Laptop", price: 4000, inStock: true },
  { title: "Mouse", price: 100, inStock: false },
  { title: "Keyboard", price: 200, inStock: true }
]);
// 4200

Warunki:
- użyj reduce()
*/
function getTotalAvailableProductPrice(products) {
  return products.reduce((acc, item) => {
    if(item.inStock) {
        return acc + item.price;
    }

    return acc;
  }, 0);
}

console.log(
  getTotalAvailableProductPrice([
    { title: "Laptop", price: 4000, inStock: true },
    { title: "Mouse", price: 100, inStock: false },
    { title: "Keyboard", price: 200, inStock: true }
  ])
);