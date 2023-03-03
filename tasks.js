console.clear()
// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
let a = 0;
let b = 0;

function palyginimas(a, b) {
 if (a > b) {
   console.log('Didesnis: ' + a)
} else if (a < b) {
    console.log('Didesnis: ' + b)
} else if(a == b) {
    console.log('skaiciau yra lygus')
} 
}
console.log(palyginimas(7, 5));
console.log(palyginimas(2, 1));
console.log(palyginimas(1, 1));
console.log('*********************')

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
for (let i=1; i < 10; i++) {
  console.log(i)
}
console.log('*********************')

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
for (let i=0; i <= 10; i=i+2) {
   console.log(i)
  }
  console.log('*********************')

//   4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

const arr = [...Array(5)].map(_ => Math.floor(Math.random() * 10 + 1));
console.log(arr)

console.log('*********************')
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

while (x < 5)