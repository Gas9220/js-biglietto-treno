// 1. Chiedo all'utente tramite un prompt il numero dei chilometri che vuole percorrere e conservo il valore in una variabile
let kilometers = Number(prompt('Quanti km vuoi percorrere?'))

// - Mi assicuro che sia stato inserito un numero
// - Se il numero di chilometri è un numero vado avanti
// - Altrimenti ripropongo il prompt



// 2. Chiedo all'utente tramite un prompt la sua età e conservo il valore in una variabile
let yourAge = Number(prompt('Quanti anni hai?'))

//  - Mi assicuro che sia stato inserito un'età valida ( non negativa o superiore a 100 anni)
//   - Se età inserita > 0 || età inserita < 100 vado avanti
//   - Altrimenti ripropongo il prompt
if (yourAge < 0 || yourAge > 100) {
    yourAge = Number(prompt('Quanti anni hai?'))
}

