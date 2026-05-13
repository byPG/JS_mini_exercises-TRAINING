/*
Day 15 — Zadanie 3

Napisz funkcję getTotalAvailableCheapProductPrice(products), która zwraca sumę cen
produktów, które:
- są dostępne
- i kosztują mniej niż 500

Przykład:
getTotalAvailableCheapProductPrice([
  { title: "Laptop", price: 4000, inStock: true },
  { title: "Mouse", price: 100, inStock: true },
  { title: "Keyboard", price: 200, inStock: false },
  { title: "Cable", price: 50, inStock: true }
]);
// 150

Wskazówka:
filter -> reduce
*/
function getTotalAvailableCheapProductPrice(products) {
    const newTab = [...products];
    return newTab.filter((item) => item.inStock && item.price < 500).reduce((acc, item) => acc + item.price, 0);
}