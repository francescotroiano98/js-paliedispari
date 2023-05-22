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


const listEvenNumbers = [2, 4, 6, 8, 10];

const listOddNumbers = [3, 5, 7, 9];

const askEvenOddnumber = parseInt(prompt("Scegli, scrivi paro o disparo"));

const userNumber = parseInt(prompt("Scrvi un numero da 1 a 5"));

console.log(userNumber);

const computerNumber = Math.floor(Math.random() * 5 + 1);

console.log(computerNumber);

let sum = 0;

if (askEvenOddnumber % 2 === 0){
    askEvenOddnumber = listEvenNumbers;
    console.log(askEvenOddnumber)
}

function isItEvenOrOdd (){
    
    sum = userNumber + computerNumber;
    console.log(userNumber);
    console.log(computerNumber);

    if (sum % 2 === 0 && sum === listEvenNumbers);
        alert("Hai vinto");
        console.log(sum);
       
}

