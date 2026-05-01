/*
Day 14 — Zadanie 5

Napisz funkcję getTopTwoExpensiveProductTitles(products), która zwraca tablicę
tytułów dwóch najdroższych produktów.

Przykład:
getTopTwoExpensiveProductTitles([
  { title: "Mouse", price: 100 },
  { title: "Laptop", price: 4000 },
  { title: "Keyboard", price: 200 },
  { title: "Monitor", price: 1500 }
]);
// ["Laptop", "Monitor"]

Wskazówka:
sort malejąco po price -> slice(0, 2) -> map(title)
*/
function getTopTwoExpensiveProductTitles(products) {
   return [...products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 2)
    .map(item => item.title);
}

console.log(
  getTopTwoExpensiveProductTitles([
    { title: "Mouse", price: 100 },
    { title: "Laptop", price: 4000 },
    { title: "Keyboard", price: 200 },
    { title: "Monitor", price: 1500 }
  ])
);