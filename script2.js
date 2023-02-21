// 1. Chiedo all'utente tramite un prompt il numero dei chilometri che vuole percorrere e conservo il valore in una variabile
let kilometers = Number(prompt('Quanti km vuoi percorrere?'))

// - Mi assicuro che sia stato inserito un numero
// - Se il numero di chilometri è un numero vado avanti
// - Altrimenti ripropongo il prompt

while (isNaN(kilometers)) {
    kilometers = Number(prompt('Quanti km vuoi percorrere?'))
}

// // 2. Chiedo all'utente tramite un prompt la sua età e conservo il valore in una variabile
let yourAge = prompt('Quanti anni hai?')

//- Mi assicuro che sia stato inserito un'età valida ( non negativa o superiore a 100 anni)
//- Se età inserita > 0 || età inserita < 100 vado avanti
//- Altrimenti ripropongo il prompt

while (isNaN(yourAge) || yourAge < 0 || yourAge > 100) {
    yourAge = Number(prompt('Quanti anni hai?'))
}

// 3. Calcolo il potenziale prezzo del biglietto, numero di chilometri * 0,21€ ( costo al km).
const potentialPrice = kilometers * 0.21

// 4. Calcolo a quanto ammonta lo sconto
//  - Se eta inserita < 18 applico sconto del 20% con la seguente formula: prezzo finale = (prezzo potenziale * 20) / 100
//  - Se eta inserita > 65 applico sconto del 40% con la seguente formula: prezzo finale = (prezzo potenziale * 40) / 100
//  - Altrimenti il prezzo finale sarà uguale al prezzo potenziale

let message = ""
let discountAmount = calculateDiscount(yourAge)

function calculateDiscount(age) {
    const seniorDiscount = 40
    const youngDiscount = 20
    let discount = 0

    if (age < 18) {
        discount = (potentialPrice * youngDiscount) / 100
        message = `Hai ricevuto ${discount}€ perchè sei minore di 18 anni`
    } else if (age > 65) {
        discount = (potentialPrice * seniorDiscount) / 100
        message = `Hai ricevuto ${discount}€ perchè sei maggiore di 65 anni`
    } else {
        discount = 0
        message = `Non hai ricevuto alcuno sconto`
    }

    return discount
}

// Calcolo il prezzo finale
let finalPrice = potentialPrice - discountAmount



// // Stampo in console il prezzo finale
console.log(`In base ai ${kilometers}km che hai percorso e alla tua età ${yourAge} anni, il costo del biglietto è ${finalPrice.toFixed(2)}€. ${message}`)