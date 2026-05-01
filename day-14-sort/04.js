/*
Day 14 — Zadanie 4

Napisz funkcję getCheapestProduct(products), która zwraca najtańszy produkt.

Przykład:
getCheapestProduct([
  { title: "Mouse", price: 100 },
  { title: "Laptop", price: 4000 },
  { title: "Keyboard", price: 200 }
]);
// { title: "Mouse", price: 100 }

Wskazówka:
możesz posortować rosnąco po price i wziąć pierwszy element
*/
function getCheapestProduct(products) {
  const productsSorted = [...products];
  return productsSorted.sort((a, b) => a.price - b.price)[0];
}

console.log(
  getCheapestProduct([
    { title: "Mouse", price: 100 },
    { title: "Laptop", price: 4000 },
    { title: "Keyboard", price: 200 }
  ])
);