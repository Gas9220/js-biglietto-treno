'use strict';

// 1. Chiedo all'utente tramite un prompt il numero dei chilometri che vuole percorrere e conservo il valore in una variabile
let kilometers = Number(prompt('Quanti km vuoi percorrere?'));

document.getElementById('kilometers').innerHTML = "Percorrerai " + kilometers + "km";

// - Mi assicuro che sia stato inserito un numero
// - Se il numero di chilometri è un numero vado avanti
// - Altrimenti ripropongo il prompt

// 2. Chiedo all'utente tramite un prompt la sua età e conservo il valore in una variabile
let yourAge = Number(prompt('Quanti anni hai?'));

//  - Mi assicuro che sia stato inserito un'età valida ( non negativa o superiore a 100 anni)
//   - Se età inserita > 0 || età inserita < 100 vado avanti
//   - Altrimenti ripropongo il prompt

if (yourAge < 0 || yourAge > 100) {
    yourAge = Number(prompt('Quanti anni hai?'));
}

document.getElementById('age').innerHTML = "Hai un età di " + yourAge + " anni";

// 3. Calcolo il potenziale prezzo del biglietto, numero di chilometri * 0,21€ ( costo al km).
const potentialPrice =  kilometers * 0.21;

document.getElementById('potentialPrice').innerHTML = "Il prezzo originale è di " + potentialPrice.toFixed(2) + "€";

// 4. Calcolo il prezzo finale (formattato con massimo 2 decimali) il base alle regole stabilite
let finalPrice = 0;

//  - Se eta inserita < 18 applico sconto del 20% con la seguente formula: prezzo finale = (prezzo potenziale * 20) / 100
//  - Se eta inserita > 65 applico sconto del 40% con la seguente formula: prezzo finale = (prezzo potenziale * 40) / 100
//  - Altrimenti il prezzo finale sarà uguale al prezzo potenziale

if (yourAge < 18) {
    const discountAmount = (potentialPrice * 20) / 100;
    finalPrice = potentialPrice - discountAmount;
} else if (yourAge > 65) {
    const discountAmount = (potentialPrice * 40) / 100;
    finalPrice = potentialPrice - discountAmount;
} else {
    finalPrice = potentialPrice;
}

document.getElementById('finalPrice').innerHTML = "Il prezzo finale è di " + finalPrice.toFixed(2) + "€";

// Stampo in console il prezzo finale
console.log(`In base ai ${kilometers}km che hai percorso e alla tua età ${yourAge} anni, il costo del biglietto è ${finalPrice.toFixed(2)}€`);