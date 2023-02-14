// Spread Operator
// Memecah elemen-elemen dalam array


let numbers = [1,2,3,4,5];

console.log(numbers);
console.log(...numbers);            // spread operator

// fungsi spread: untuk menduplicate array

let numbers2 = [...numbers];
console.log(`numbers2 = ${numbers2}`);
numbers.push(6);
console.log(`numbers = ${numbers}`);

// fungsi spread: untuk menggabungkan array

let nomor1 = [1, 2, 3];
let nomor2 = [5, 6, 7];
let nomor3 = [8, 9, 10];

let combineNombor5 = nomor1.concat(4, nomor2, nomor3);
let combineNombor6 = [...nomor1,  4, ...nomor2, ...nomor3];
console.log(combineNombor5);
console.log(...combineNombor6);

let john = {
    fullName: "John Doe",
    age: 35,
    address: "Manado",
};

john = {...john, job: "teacher"};
console.log(john);

// Destructuring
// a. ARRAY

let num = [1, 2, 3, 4, 5, 6];

// let a = num[0];
// let b = num[1];
// console.log(a, b);
// console.log(num);

let [a, b, c, d, e, f] = num;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// b. OBJECT

let orang = {
    fullName: "John Doe",
    age: 35,
    address: "Manado",
};

let {fullName: nama, age, address } = john;
console.log(nama);
