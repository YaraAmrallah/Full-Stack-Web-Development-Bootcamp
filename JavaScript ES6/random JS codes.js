/*
var message = prompt("Enter your name: ");
var firstLetter = message.slice(0,1);
firstLetter = firstLetter.toUpperCase();
rest = message.slice(1);
var name = firstLetter + rest.toLowerCase();
alert("Hello, " + name);
*/

/*
dogAge = prompt("Please enter your dog's age: ");
humanAge = (dogAge-2)*4+21;

alert("Your human age is: " + humanAge);
*/


/*
function buyMilk (money)
{
   bottles = money/1.5;
   bottlesR = money % 1.5;
   bottles = bottles - bottlesR/1.5;
   console.log("Number of bottles is: " + bottles); 
}


buyMilk(5);
*/

/* 
function bmi (weight, height)
{
    return weight/(height)**2;
}


console.log(bmi(58,1.72)); 
*/


/*
function diceRoll () {
    n = Math.random();
    n = Math.ceil(n*6);
    return n;
}

console.log(diceRoll());
*/

/*
function loveCalculator () {
prompt("Enter the first name: ");
prompt("Enter the second name: ");

return Math.floor(Math.random()*100) + 1;
}

alert(loveCalculator() + " %");
*/

// Leap Year 
/*
function isLeap(year) {
    if(year%4 === 0 && year%100 != 0)
    console.log("Leap");

    else if(year%4 === 0 && year%100 === 0 && year%400 === 0)
    console.log("Leap")

    else console.log("not leap")
}
*/

/*
var guestList = ["May", "Maha", "Malak", "Menna", "Lara", "Mirka"];

var guestName = prompt("Enter your name: ");

if (guestList.includes(guestName))
{
    alert("Hello, " + guestName + "! Please, come in!");
}
else
{
    alert("Sorry! You ain't invited!");
}
*/

//Who's Buying the lunch
/*
var people = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying (names) {
    arrLength = names.length;
    index = Math.floor(arrLength*Math.random());
    console.log(names[index]);
}
*/

/*FizzBuzz*/

/*var output = [];
var count  = 1;

function fizzBuzz() {
    if(count%3 === 0 && count%5 === 0)
    {
        output.push("FizzBuzz");
    }
    else if (count%3 === 0)
    {
       output.push("Fizz");
    }
    else if (count%5 === 0)
    {
        output.push("Buzz");
    } else {
        output.push(count);
    }
   count++;
   console.log(output);
}
*/

/*
function beer() {
    beerCount = 99;
    while (beerCount >= 1) {
        console.log(beerCount + " bottles of beer on the wall, " + beerCount + " bottles of beer.");
        beerCount--;
        console.log ("Take one down and pass kt around, " +
         beerCount + " bottles of beer on the wall");
    }

    console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.")
}
*/

// Fibonacci Challenge
function fibonaccigenerator (n){
    var fib = [];

    for (var i = 0; i <= n; i++)
    {
        if(i <= 1) {
            fib.push(i);
        }
        else
        {
            fib.push(fib[i-1] + fib[i-2]);
        } 
    }

    console.log(fib);
}
