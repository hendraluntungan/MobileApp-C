// STRING LITERAL

let john = {
    fullN: "John Doe",
    age: 20,
    address: "bitung",
};

// dengan operator concat
let kalimat1 = "Halo, nama saya" + john.fullN + ", umur " + john.age + ", tahun, tinggal di " + john.address;
// dengan string literal
let kalimat2 = `Halo nama saya ${john.fullN}, umur ${john.age}, tinggal di ${john.address}`;

console.log(kalimat1);          // dengan operator concat
console.log(kalimat2);          // dengan string literal


// ARROW FUNCTION
// Hanya ubah bentuk penulisan fungsi

function greetings() {              
    console.log("Hello World! dengan function biasa");
}

greetings();                // function biasa


const greetings2 = (fullN) => {
    return `Hello ${fullN}`;
};

let result = greetings2(john.fullN);               // Arrow function
console.log(result);


// const greetings3 = (fullN) => `Hello ${fullN}`;     // implicit return value

// let result = greetings3(john.fullN);               
// console.log(result);

let numbers = [1,2,3,4,5];
let result3 = numbers.map((value) => value);
console.log(result3);

// DEFAULT PARAMETER

const login = (username, password = "12345") =>
    `Username = ${username}, Password = ${password}`;

console.log(login("john doe", "mypass"));


// REST PARAMETER
// 

const func = (a =20, b, ...params) => {
    params.forEach((value) => console.log(value))
};

func(1, 2, 3, 4, 5, 6, 7);


