console.clear()
console.log('**********1***********')
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
console.log('**********2***********')

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
for (let i=1; i < 10; i++) {
  console.log(i)
}
console.log('***********3**********')

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
for (let i=0; i <= 10; i=i+2) {
   console.log(i)
  }
  console.log('**********4***********')

//   4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
function rand(x) {
    for (let i = 1; i <= x; i++) {
        console.log(Math.floor(Math.random() * 10 + 1))   
    }
}
console.log(rand(5));
console.log('***********5**********')
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

while (true) {
    x = Math.floor(Math.random() * (10 - 1)) + 1;
    console.log(x);
    if (x === 5) {
        break;
    }
}
console.log('**********6***********')
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

let masyvas1 = [];
const row = Math.floor(Math.random() * (30 - 10) + 10);
for (let i = 0; i < row; i++) {
    masyvas1.push(Math.floor(Math.random() * (30 - 10 + 1) + 10));
}

console.log(masyvas1);
console.log('***********7**********')
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

let arr7 = [];
for (let i=0; i<100; i++){


}


console.log('**********8***********')
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).

function sumEven(n, a) {
    if ((typeof n === 'number' && typeof a === "number") && ((n + a) % 2 === 0))
        return n + a; {
    } if (Array.isArray(n) === true && Array.isArray(a) === true && ((n.length + a.length) % 2 === 0)) {
        return (n.length + a.length)
    } else {
        return 'suma nelyginė';
    }
}

console.log(sumEven(4, 2));
console.log(sumEven([3, 1, 15], [2, 4, 2]));

console.log('**********9***********')
// 9. Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

function integer(num) {

    if (typeof num === 'number') {

        for (let i = 0; i < num; ++i) {
            if (num % 2 === 0) {
                return 'false';
            } else {
                return 'true'
            }
        }
    }
    else {
        return 'įveskite skaičių';
    }

}
console.log(integer(4));

console.log('**********10***********')
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

function pirminisSkaicius(){
   
}
console.log('*********************')
// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu
function telefonoNumeris(){

}