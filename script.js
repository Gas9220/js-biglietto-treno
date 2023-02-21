// 1. Chiedo all'utente tramite un prompt il numero dei chilometri che vuole percorrere e conservo il valore in una variabile
let kilometers = Number(prompt('Quanti km vuoi percorrere?'))

// - Mi assicuro che sia stato inserito un numero
// - Se il numero di chilometri è un numero vado avanti
// - Altrimenti ripropongo il prompt

if (typeof kilometers !== 'number')  {
    kilometers = Number(prompt('Quanti km vuoi percorrere?'))
}