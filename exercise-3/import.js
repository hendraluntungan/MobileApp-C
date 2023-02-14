/*
    Nama: Luntungan, Hendra Ucok
    Mobile Application Development - C
    Exercise #03
*/

// IMPORT NOMOR 1

import { fahrenheit as fahren, celcius as clcs, formula} from './export.js';

console.log("--Nomor 1----------------------------");
console.log(`F = ${fahren}`);
console.log(`C = ${clcs}`);
console.log(`${fahren} Fahrenheit = ${formula(fahren).toFixed(2)} Celcius`);
console.log()


// IMPORT NOMOR 2

import {orang} from './exportDefault.js';
import BMI from './exportDefault.js';

console.log("--Nomor 2----------------------------");
console.log(`Tinggi Badan = ${orang.tinggiBdn} m`);
console.log(`Berat Badan  = ${orang.beratBdn} kg`);


console.log(`BMI : ${BMI(orang.tinggiBdn, orang.beratBdn).toFixed(2)}`);

if ( BMI(orang.tinggiBdn, orang.beratBdn) < 18.50) {
    console.log(`Kategori: Kekurangan Berat Badan`);
} 
else if (BMI(orang.tinggiBdn, orang.beratBdn) >= 18.50 && BMI(orang.tinggiBdn, orang.beratBdn) < 22.90) {
    console.log(`Kategori: Normal`)
} 
else if (BMI(orang.tinggiBdn, orang.beratBdn) > 22.90 && BMI(orang.tinggiBdn, orang.beratBdn) <= 24.90) {
    console.log(`Kategori: Beresiko`)
} 
else if (BMI(orang.tinggiBdn, orang.beratBdn) >= 25.00 && BMI(orang.tinggiBdn, orang.beratBdn) <= 29.90) {
    console.log(`Kategori: Obesitas tingkat 1`)
} 
else if (BMI(orang.tinggiBdn, orang.beratBdn) > 30.00) {
    console.log(`Kategori: Obesitas tingkat 2`)
}




