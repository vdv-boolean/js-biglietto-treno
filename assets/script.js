// Ask for train kilometers
const trainDistance = parseInt(prompt("Distanza da percorrere in treno?"));

console.log("Train distance: " + trainDistance);

// Ask for user age
const userAge = parseInt(prompt("Età passeggero?"));

console.log("Passenger age: " + userAge);

// Get ticket price (0.21 €/km)
const ticketPrice = trainDistance * 0.21;

console.log("Ticket price: " + ticketPrice);

// Get ticket sale (-20% for minors and -40% for over 65)
let ticketSale = 0;

if (userAge < 18) {
    ticketSale = ticketPrice / 5;
    console.log("Sale: -20% off. Savings: " + ticketSale);
}

else if (userAge > 65) {
    ticketSale = ticketPrice / 2.5;
    console.log("Sale: -40% off. Savings: " + ticketSale);
}

else  {
    console.log("Sale: none");
}

// Get final ticket price
let finalPrice = ticketPrice - ticketSale;
console.log("Final price: " + finalPrice);