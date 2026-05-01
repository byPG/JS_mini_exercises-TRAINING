/*
Powtórka Day 12 — Zadanie 2

Napisz funkcję getTotalOrderPrice(orders), która zwraca sumę cen
wszystkich zamówień.

Przykład:
getTotalOrderPrice([
  { id: 1, price: 120 },
  { id: 2, price: 80 },
  { id: 3, price: 50 }
]);
// 250

Warunki:
- użyj reduce()
*/
function getTotalOrderPrice(orders) {
  return orders.reduce((acc, item) => acc + item.price, 0);
}

console.log(
  getTotalOrderPrice([
    { id: 1, price: 120 },
    { id: 2, price: 80 },
    { id: 3, price: 50 }
  ])
);