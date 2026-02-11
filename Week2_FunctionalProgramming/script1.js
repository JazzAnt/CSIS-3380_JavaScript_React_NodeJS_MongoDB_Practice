//Spread Operator Uses
//a. Clone an Array
let numbers = [1, 2, 3, 4, 5];
let numbersCopy = [...numbers]; //this is a hard copy, not soft copy (2 var pointing to the same object)
let numbersCopy2 = numbers.slice(); //this is also a hard copy

console.log("Original", numbers);
console.log("Copy1", numbersCopy);
console.log("Copy2", numbersCopy2);

//b. Concatenate two or more arrays
let values = [33, 44, 55];
let moreNumbers = [12, 24, 56];
let combined = [...numbers, ...values, ...moreNumbers];
console.log("Combined", combined);

//c. As rest parameters
let [first, , ...rest] = numbers; //remember that rest must be the last
console.log(`First = ${first}, Rest:`, rest);
