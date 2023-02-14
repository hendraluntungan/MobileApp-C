// array = variabel yang dapat simpan banyak data. deklarasi array dengan kurung siku atau kata 'new'
// tipe data yang bisa di simpan array macam-macam
// Data yang diberikan API itu dalam bentuk array

let john = ['john', 'doe', 35, true, [80, 85, 100]];

console.log(john.length);       // untuk ketahui panjang array
console.log(john[2]);
john[2] = 25;           // akses data dalam array lewat index
console.log(john[2]);
console.log(john[john.length - 1]);

let arr = [1,2,3, "halo", false, true];
console.log(arr.toString());
console.log(arr.join(",,,"));
arr.push("Selamat Pagi");
console.log(arr);


let buah= ['pisang', 'kiwi', 'semangka'];
buah.splice(2,1,"Lemon", "Apel");
console.log(buah);


//object ada properties dan value

let johny = {
    fName : 'John',
    lName : 'Doe',
    age : 35,
    isMarried: true,
    grade: [80, 90, 100],
    greetings: function() {
        console.log("Good Morning", this.greetings);
    }
};

// cara display object

console.log(johny.age);      // dot notation
console.log(johny["grade"]);    // bracket

johny.job = "lecturer";
console.log(johny);

// di object juga bisa kasi masuk fungsi
johny.greetings;

// array built-in method

let angka = [1,2,3,4,5];

for(let i=0; i<=angka.length - 1; i++){
    console.log(angka[i]);
}

// array forEach

angka.forEach(function(value, index){
    console.log(value + ' index: ' + index);
})

let students = [
    {
        fName: 'John',
        age: 25,
        address: 'Manado'
    },
    {
        fName: 'Bob',
        age: 30,
        address: 'Minut',
    },
    {
        fName: 'Mike',
        age: 29,
        address: 'Bitung'
    },
]

// students.forEach(function(value){
//     console.log(value.fName);
// })

// array map
// beda map dengan forEach, kalo forEach tidak mengembalikan array baru, kalo map mengembalikan array baru
// for each khusus untuk looping, tidak bisa return value di array baru
// console.log("..\n");
// students.map(function(value){
//     console.log(value.fName);
// })

// let studentsName = students.map(function(value){
//     return value.fName;
// })

// console.log(studentsName);

// filter
console.log("\n\n\n\n\n");
let students2 = students.filter(function(value){
    return value.age >= 27
});

console.log(students2);