/*
Powtórka Day 15 — Zadanie 2

Napisz funkcję getTopTwoAvailableCheapProductTitles(products), która zwraca tablicę tytułów
dwóch najtańszych dostępnych produktów.

Przykład:
getTopTwoAvailableCheapProductTitles([
  { title: "Laptop", price: 4000, inStock: true },
  { title: "Mouse", price: 100, inStock: true },
  { title: "Keyboard", price: 200, inStock: false },
  { title: "Cable", price: 50, inStock: true },
  { title: "Pad", price: 80, inStock: true }
]);
// ["Cable", "Pad"]

Wskazówka:
filter -> sort rosnąco po price -> slice(0, 2) -> map(title)
*/
function getTopTwoAvailableCheapProductTitles(products) {
  return products.filter(item => item.inStock).sort((a,b) => a.price - b.price).slice(0, 2).map(item => item.title);
}