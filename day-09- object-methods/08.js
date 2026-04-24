/*
Powtórka obiekty — Zadanie 2

Napisz funkcję getProductEntries(product), która zwraca tablicę par [klucz, wartość]
z obiektu produktu.

Przykład:
getProductEntries({ title: "Laptop", price: 3999 });
// [["title", "Laptop"], ["price", 3999]]

Warunki:
- użyj Object.entries()
*/
function getProductEntries(product) {
  // Twoje rozwiązanie
  return Object.entries(product);
}

console.log(getProductEntries({ title: "Laptop", price: 3999 }));
console.log(getProductEntries({ title: "Mouse", inStock: true }));