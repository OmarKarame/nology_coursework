//1. Write a function that takes a number and returns true
// if it is a positive number and false if it is a negative
// number.

let isPositive = false;

function checkNumber(number){
    if (number > 0){
        isPositive = true;
    }
    else if (number == 0){
        console.log("please put a number that is greater than or less than 0");
    }
    else {
        isPositive;
    }
    if (number != 0){
        return isPositive;
    }
}

let number = checkNumber(10);
if (number != undefined){
    console.log(number)
}

//2. Write a function that takes a number of days and 
// converts it into an age.

let years = 0;

function daysToYears(days){
    while (days >= 365){
        years = years + 1;
        days = days - 365;
    }
    console.log("You are " + years + " years and " + days + " days old!")
}

daysToYears(150)

//3. Write a function that takes three numbers and returns
// the largest of the three numbers.

function largestNumber(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return num1;
    }
    else if (num1 < num2 && num2 > num3){
        return num2;
    }
    else if (num2 > num1 && num2 < num3){
        return num3;
    }
}

console.log("The largest of the three numbers is: " + largestNumber(10,100,30))

//4. Write a function that takes an array of names and
// returns the last name from the array of names.

function printLastName(names){

    let arrayLength = names.length;
    arrayLength = arrayLength - 1;
    console.log("The last name is: " + names[arrayLength])

}

printLastName(["Omar", "Tamer", "Yasmina", "Mariam"])

//5. Write a function that takes an array of numbers and 
//returns true if all of the numbers are positive. It 
//should return false if there are one or more negative
// numbers in the array.

function areNumbersPositive(numbers){
    let arePositive = true;
    for (let index = 0; index < numbers.length - 1; index++){
        if (numbers[index] < 0) {
            arePositive = false;
            break;
        }
        else {
            arePositive = true;
        }
    }
    return arePositive;
}

console.log("It is: " + areNumbersPositive([10, 20, 7, 28, 2108, 20]))