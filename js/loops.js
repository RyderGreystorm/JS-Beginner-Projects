groceries = ['banana', 'apple', 'orange', 'pear'];

groceries.push('cookies');
groceries.push('berries');



let a = [];


//for (const i of groceries)
// console.log(i);

const numbers = [1, 2, 3, 4 ,5, 6];


 const double = (numbers) =>
{
    let a = [];
    for (const i of numbers)
    a.push(i * i);
return a; 

}
//    console.log(double([1, 2, 3, 4 ,5, 6]))

const letterCounter = () => {
    const phrase = 'hey, can you go to grocery store with me?'
    let sum =0;
    for (const i in phrase)
    {
        sum += 1;
    }
    return {sum};
}

// console.log(letterCounter()); 

const sumArray = (num) => {
    result = 0;
    for (const i of num)
        result +=i;
    return result;
}

//  console.log(sumArray([1, 2, 3, 4]));


//find largest number

const findMax = (num1) => {
    let result = num1[0];

    for (const i of num1)
    {
        if (result < i)
            result = i;
    }
    return result;
}

// console.log(findMax([1, 5, 6, 1, 9, 6, 87, 52, 24]))

const letterFrequency = (phrase) => {
    let object = {};
    for (const i of phrase)
    {
        if (i in object)
            object[i] += 1;
        else
            object[i] = 1;
    }
    return object;
}

console.log(letterFrequency("Hello my dear what is rocking"))