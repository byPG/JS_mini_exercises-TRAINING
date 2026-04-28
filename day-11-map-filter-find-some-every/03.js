/*
Day 11 — Zadanie 3

Napisz funkcję findFirstExpensiveProduct(products), która zwraca pierwszy produkt
droższy niż 1000.

Przykład:
findFirstExpensiveProduct([
  { title: "Mouse", price: 80 },
  { title: "Monitor", price: 900 },
  { title: "Laptop", price: 4000 }
]);
// { title: "Laptop", price: 4000 }

Warunki:
- użyj find()
*/
function findFirstExpensiveProduct(products) {
 return products.find((item) => item.price > 1000);
}

console.log(
  findFirstExpensiveProduct([
    { title: "Mouse", price: 80 },
    { title: "Monitor", price: 900 },
    { title: "Laptop", price: 4000 }
  ])
);