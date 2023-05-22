// prendere l'input 
const myWord = prompt("Scrivi una parola e ti dirò se la parola scritta è palindroma");
    
const result = reverseString(myWord);
// programma per cambiare l'ordine alla stringa 

function reverseString(str) {

    // stringa vuota
    
    let newString = "";

    for (let i = str.length - 1; i >= 0; i--) {

        newString += str[i];
        
        console.log(newString);
    }

    return newString;
}


if (result === myWord) {
    alert("la parola inserita è PALINDROMA");

} else if (result != myWord){

    alert("Non è PALINDROMA");
}

