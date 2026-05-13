/*
Day 15 — Zadanie 4

Napisz funkcję hasAvailableExpensiveProduct(products), która sprawdza,
czy istnieje choć jeden produkt, który:
- jest dostępny
- i kosztuje więcej niż 2000

Przykład:
hasAvailableExpensiveProduct([
  { title: "Mouse", price: 100, inStock: true },
  { title: "Laptop", price: 4000, inStock: true }
]);
// true

hasAvailableExpensiveProduct([
  { title: "Mouse", price: 100, inStock: true },
  { title: "Keyboard", price: 200, inStock: false }
]);
// false

Warunki:
- użyj some()
*/
function hasAvailableExpensiveProduct(products) {
    return products.some((item) => item.inStock && item.price > 2000);
}