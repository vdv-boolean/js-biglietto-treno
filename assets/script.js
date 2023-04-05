/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

// Chiedere all'utente i km da percorrere
const trainDistance = prompt("Distanza da percorrere in treno?")

console.log("Train distance: " + trainDistance);

// Chiedere età dell'utente
const userAge = prompt("Età passeggero?")

console.log("Passenger age: " + userAge);

// Calcolare prezzo del biglietto (0.21 €/km)
const ticketPrice = trainDistance * 0.21

console.log("Ticket price: " + ticketPrice);
// Calcolare sconto in base all'età (20% per minorenni e 40% per over 65)
if (userAge < 18) {
    console.log("Sale: -20% off");
}

else if (userAge > 65) {
    console.log("Sale: -40% off");
}

else  {
    console.log("Sale: none");
}
// Calcolare prezzo finale