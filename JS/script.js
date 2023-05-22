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

