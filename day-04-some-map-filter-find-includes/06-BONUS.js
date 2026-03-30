////1
function getFirstThreeLetters(arr) {
  return arr.map(name => name.slice(0, 3));
}

console.log(getFirstThreeLetters(["Anna", "Kasia", "Piotr", "Ola"]));
// ["Ann", "Kas", "Pio", "Ola"]

////2
const names = ["Anna", "Kasia", "Piotr", "Ola"];

const lastThree = names.map(name => name.slice(-3)); // ujemny indeks w slice liczy od konca

console.log(lastThree);
// ["nna", "sia", "otr", "Ola"]