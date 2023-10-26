// Practis problem 1

var fruits = ["Apple", "Bannana", "orange"]

console.log("Orginal array is", fruits);
console.log( "Index of Bannana is", fruits.indexOf("Bannana"));
console.log("Remove the ", fruits.pop(), fruits)
console.log("add The watermelon", fruits.push("watermelon"), fruits);


//                           pactis problem 2

var examTotalAvgMarkas = 80;

if(examTotalAvgMarkas >= 80){
console.log("Your Grade Is A+")
}
else if(examTotalAvgMarkas >= 70){
    console.log("Your Grade Is A")
    }
    else if(examTotalAvgMarkas >= 60){
        console.log("Your Grade Is B")
        }
        else if(examTotalAvgMarkas >= 50){
            console.log("Your Grade Is C")
            }

            else if(examTotalAvgMarkas >= 40){
                console.log("Your Grade Is D")
                }

                else{
                    console.log("Your Grade Is F")
                    }



// Pactis Problem 3

// 1. You are given three numbers 13, 79 and 45. write a program that will print teh largest number using if-else.



// Input three numbers
var num1 = 79;
var num2 = 79;
var num3 = 100;

let largest;

// Check which number is the largest
if(num1 >= num2 && num1 >= num3){
    largest = num1;
}
else if(num2 >= num1 && num2 >= num3){
    largest = num2
}
else{
    largest = num3
}

// Print the largest number
console.log("The largest number is: " + largest);



// 2. You are give a traiangle with the sides 9, 8,9. write a JavaScript program to check whether a triangle is Isosceles or not using if-else.

var side1 = 9;
var side2 = 8;
var side3 = 9;


if(side1 === side2 || side1 === side3 || side2 ==side3){
    console.log("It's an Isosceles triangle.");
} 
else {
    console.log("It's not an Isosceles triangle.");
}