/* ------------------------------------------------------------

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

------------------------------------------------------------- */

let km = Number(prompt("Quanti chilometri vuoi percorrere?"));
let age = Number(prompt("Quanti anni hai?"));
let ticketPrice;
const kmCost = 0.21;

// console.log(km, age);

document.writeln(
    `
    Vuoi percorrere ${km} chilometri <br>
    L'età inserita è: ${age} <br>
    `
);

if ( age < 18 ) {
    ticketPrice = ((km * kmCost) - ((km * kmCost) * 20) / 100);
    document.writeln(`Il costo del biglietto è: € ${ticketPrice.toFixed(2)}`);
} else if (age >= 65) {
    ticketPrice = ((km * kmCost) - ((km * kmCost) * 40) / 100);
    document.writeln(`Il costo del biglietto è: € ${ticketPrice.toFixed(2)}`);
} else {
    ticketPrice = (km * kmCost);
    document.writeln(`Il costo del biglietto è: € ${ticketPrice.toFixed(2)}`);
}

console.log(`Il costo del biglietto è: ${ticketPrice.toFixed(2)}`);

