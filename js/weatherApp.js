const prompt = require("prompt-sync")({sigint: true});

let weather= prompt("What is the weather: ");

if(weather == 'rain')
    console.log("Grab your unbrella");
else
    console.log("Grab your sunglasses")