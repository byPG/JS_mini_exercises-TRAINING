/*
Powtórka pętle — Zadanie 2

Napisz funkcję findFirstNumberGreaterThanTenWithFor(arr), która zwraca
pierwszą liczbę większą niż 10.

Przykład:
findFirstNumberGreaterThanTenWithFor([2, 4, 11, 20]);
// 11

findFirstNumberGreaterThanTenWithFor([1, 2, 3]);
// undefined

Warunki:
- użyj klasycznej pętli for
- nie używaj find
*/
function findFirstNumberGreaterThanTenWithFor(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 10) {
            return arr[i];
        }   
    }
    return undefined;
}

console.log(findFirstNumberGreaterThanTenWithFor([2, 4, 11, 20]));
console.log(findFirstNumberGreaterThanTenWithFor([1, 2, 3]));