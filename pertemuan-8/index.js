// Asynchronus JS (non-blocking)
// Membuat lebih efisien dalam waktu, melakukan proses lain sambil menunggu proses lain dijalankan.

console.log("Synchronus");
console.log("Baris 1");     // Synchronus
console.log("Baris 2");     // Synchronus
console.log("Baris 3");     // Synchronus


console.log("Asynchronus");
// 2 proses yang berjalan pada Asynchronus

// 1. Parallel  (berjalan sama-sama)

// cons: akan muncul satu kondisi yang bernama rest condition
// rest condition: ketika proses 1 membutuhkan data dari proses 2, sehingga akan terjadi masalah disitu

// setTimeout(() =>{
//     console.log("Proses 1");
// }, 3000);
// setTimeout(() =>{
//     console.log("Proses 2");
// }, 5000);
// console.log("Proses 3");
// console.log("Proses 4");

// 2. Concurent     (recommended to use in MAD)

// Cons: muncul callback hell (muncul tanda kurung yang muncul)
// setTimeout(() =>{
//     console.log("Proses 1");
//     setTimeout(() => {
//         console.log("Proses 2");
//         setTimeout(() =>{
//             console.log("Proses 3");
//         }, 6000);
//     }, 5000);
// }, 3000);

// 3. Promise 
// Fitur baru dalam ES6 untuk atasi masalah Callback Hell
// Objek/Class dalam JavaScirpt, ada 3 jalan yang akan menghasilkan output: pending, Fulfilled, Rejected, juga Settled

let condition = true;
let newPromise = new Promise((resolve, reject) =>{
    if(condition){
        resolve('Berhasil');
    } else{
        reject('Gagal');
    }
})

// cara gunakan promise:
// 1. then-catch

newPromise
    .then((result) => console.log `${result}!!!`)
    .then((result2) => console.log(result2))
    .catch((error) => console.log(error));

// // 2. Async-await

// const getData = async () => {
//     let output = await newPromise;
//     console.log(output);
// };

// getData;

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

const getJSONPlaceHolder = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/");
    const json = await response.json();
    console.log(json);
}

getJSONPlaceHolder();