/*
Day 14 — Zadanie 2

Napisz funkcję sortProductsByPriceDesc(products), która zwraca nową tablicę
produktów posortowaną malejąco po price.

Przykład:
sortProductsByPriceDesc([
  { title: "Mouse", price: 100 },
  { title: "Laptop", price: 4000 },
  { title: "Keyboard", price: 200 }
]);
// [
//   { title: "Laptop", price: 4000 },
//   { title: "Keyboard", price: 200 },
//   { title: "Mouse", price: 100 }
// ]

Warunki:
- użyj sort()
- nie zmieniaj oryginalnej tablicy
*/
function sortProductsByPriceDesc(products) {
 const priceSorted = [...products]; 
  return priceSorted.sort((a, b) => b.price - a.price);
}

console.log(  
  sortProductsByPriceDesc([
    { title: "Mouse", price: 100 },
    { title: "Laptop", price: 4000 },
    { title: "Keyboard", price: 200 }
  ])
);