/*
    Nama: Luntungan, Hendra Ucok
    Mobile Application Development - C
    Exercise #03
*/

// NOMOR 2

let orang = {
    nama: "John Doe",
    tinggiBdn: 1.78,
    beratBdn: 71,
    
};

let BMI = (tinggiBdn, beratBdn) => {
    let bmi2 = beratBdn / (tinggiBdn * tinggiBdn);
    return bmi2;
};

export {orang};
export default BMI;
