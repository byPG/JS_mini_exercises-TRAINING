/*
Powtórka obiekty — Zadanie 1

Napisz funkcję getProductPrice(product), która zwraca cenę produktu z obiektu.

Przykład:
getProductPrice({ title: "Laptop", price: 3999 });
// 3999

Warunki:
- użyj dot notation
*/
function getProductPrice(product) {
  // Twoje rozwiązanie
  return product.price;
}

console.log(getProductPrice({ title: "Laptop", price: 3999 }));
console.log(getProductPrice({ title: "Mouse", price: 99 }));