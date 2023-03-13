const prompt = require("prompt-sync")({sigint: true});

let food, tipPercentage, tipAmount, total;

food = Number(prompt("How much is the food: "));
tip = Number(prompt("Enter your tip percentage: "));
tipPercentage = tip / 100;
tipAmount = food * tipPercentage;
total = food + tipAmount;


console.log("Food \t\t\t$" , food);
console.log("Tip\t\t\t" + tip+ "%");
console.log("Tip amount\t\t$", tipAmount);
console.log("Total \t\t\t$", total);
