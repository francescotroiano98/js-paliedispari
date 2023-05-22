/*
// prendere l'input 
const myWord = prompt("Scrivi una parola e ti dirò se la parola scritta è palindroma");
    
const result = reverseString(myWord);
// programma per cambiare l'ordine alla stringa 

function reverseString() {

    // stringa vuota

    let myNewWord = "";

    for (let i = myWord.length - 1; i >= 0; i--) {

        myNewWord += myWord[i];
        
        console.log(myNewWord);
    }

    return myNewWord;
}


if (result === myWord) {
    alert("la parola inserita è PALINDROMA");

} else if (result != myWord){

    alert("Non è PALINDROMA");
}
*/
// PARI E DISPARI




let chooseEvenOdd = prompt("scrivi paro o disparo");
console.log(chooseEvenOdd);


const userNumber = parseInt(prompt("Scrivi un numero da 1 a 5"));
console.log(userNumber);

let computerNumber = Math.floor(Math.random() * 5) + 1;
console.log(computerNumber);

sum = parseInt(userNumber + computerNumber);
console.log(sum);

let result = 0;
function isItEvenOrOdd () {

    if ((sum % 2 === 0 && chooseEvenOdd === "paro") || (sum % 2 !== 0 && chooseEvenOdd === "disparo")) {
        alert("HAI VINTO");
        return true;
    } else {
        alert("HAI PERSO");
        return false;
    }
}
result = isItEvenOrOdd();
