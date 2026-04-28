/*
Day 11 — Zadanie 5

Napisz funkcję allProductsHavePrice(products), która sprawdza,
czy każdy produkt ma właściwość price.

Przykład:
allProductsHavePrice([
  { title: "Laptop", price: 4000 },
  { title: "Mouse", price: 100 }
]);
// true

allProductsHavePrice([
  { title: "Laptop", price: 4000 },
  { title: "Mouse" }
]);
// false

Warunki:
- użyj every()
*/
function allProductsHavePrice(products) {
    return products.every((item) => item.price !== undefined);
}

console.log(
  allProductsHavePrice([
    { title: "Laptop", price: 4000 },
    { title: "Mouse", price: 100 }
  ])
);

console.log(
  allProductsHavePrice([
    { title: "Laptop", price: 4000 },
    { title: "Mouse" }
  ])
);