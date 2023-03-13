function sum(a, b)
{
    return a + b;
}


calculateFoodTotal = (food, tip) => {
    tipPercentage = tip / 100;
    tipAmount = food * tipPercentage;
    total = sum(food, tipAmount);
    return total; 
}

sum = calculateFoodTotal(120, 30)
console.log(sum);