/*
Day 12 — Zadanie 3

Napisz funkcję findFirstCheapAvailableProduct(products), która zwraca
pierwszy produkt, który:
- jest dostępny
- i kosztuje mniej niż 100

Przykład:
findFirstCheapAvailableProduct([
  { title: "Laptop", price: 4000, inStock: true },
  { title: "Mouse", price: 80, inStock: false },
  { title: "Cable", price: 50, inStock: true }
]);
// { title: "Cable", price: 50, inStock: true }
*/
function findFirstCheapAvailableProduct(products) {
  // Twoje rozwiązanie
  return products.find(item => item.inStock && item.price < 100);
}

console.log(
  findFirstCheapAvailableProduct([
    { title: "Laptop", price: 4000, inStock: true },
    { title: "Mouse", price: 80, inStock: false },
    { title: "Cable", price: 50, inStock: true }
  ])
);