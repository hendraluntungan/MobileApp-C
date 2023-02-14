/* 

    Nama: Luntungan, Hendra Ucok
    Mobile Application Development - C
    Exercise #4

*/

// No 1. Promise                                        (Run with Browser)

const helloWorld = new Promise ((resolve) => {
    setTimeout(() => {
        console.log("Hello World!");
    }, 2000);
})

async function messages() {
    const msg = await helloWorld;
    console.log(msg);
}

messages();

// No 2. Fetch                                          (Run with Browser)    

const ambilDataUser = () => {
    fetch("https://reqres.in/api/users")
    .then(function(response) {
        return response.json();
    })
    .then(function(users){
        console.log(users);
    })
}

ambilDataUser();

// No 3. Async/Await                                    (Run with Browser)

async function ambilDataUserAsync() {
    let response = await fetch("https://reqres.in/api/users");
    let users = await response.json();
    console.log(users.data);
};

ambilDataUserAsync();

// No 4. Axios                                           (Run with Terminal)

// import axios from "axios";
const axios = require("axios");
async function ambilDataUserAxios() {
    let response = await axios.get("https://reqres.in/api/users");
    console.log(response.data.data);
    }
    
ambilDataUserAxios();

