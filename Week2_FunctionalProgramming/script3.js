//DATA TRANSFORMATIONS =========================================================================
//HIGHER ORDER FUNCTIONS ============================================
let numbers = [6, 5, 4, 3, 2, 1];
let fruits = ["apple", "banana", "mango", "orange", "lemon", "kiwi"];
//a. ForEach ##############################################################################################################
/**
 * iterate through array, receiving a callback function to manipulate it
 * the arguments of said functions is (value, index, array) in that order
 * value and index are self explanatory
 * array is the entire array that the forEach is applied to
 */
fruits.forEach((value, index, array) => {
  console.log(`Index ${index} : ${value}`);
  console.log(array);
});
/**
 * the callback function cannot skip arguments
 * say you only need index: you cannot skip the value argument and need to put a dummy argument in
 * but you can omit array since it occurs after the index
 * numbers.forEach((_,index) => console.log(`index * 10 = ${index * 10}`))
 */

//b. Map ##################################################################################################################
/**
 * forEach is like visiting each element once and doing a function
 * Map is more like copying and transforming the values in an array to another array
 * Syntax and callback is the same as forEach (but different function)
 */
const modifiedNumbers = numbers.map((num) => num * 2); //the function must have a return value
const modifiedFruits = fruits.map((fruit) => fruit.length); //as the return is used as the new array value
/**
 * so Map copies the value, applys a transformation if needed (e.g. here *2), and insert to new array
 * note that the original array is unchanged
 */
console.log(modifiedFruits);
console.log(modifiedNumbers);

const vowels = ["a", "i", "u", "e", "o"];
const fruitVowels = fruits.map((fruit) => {
  let vowelCount = 0;
  for (let letter of fruit) {
    if (vowels.includes(letter)) vowelCount++;
  }
  return vowelCount;
});
console.log(fruitVowels);

//c. Filter ###############################################################################################################
//returns a new array, but usually not all the elements of the original array (unlike Map)
//similar syntax to map, but the return value is BOOLEAN, and the element is added only if true
const numbersBiggerThan3 = numbers.filter((number) => number > 3);
console.log(numbersBiggerThan3);

const citrusFruits = ["orange", "lime", "lemon"];
const citruses = fruits.filter((fruit) => citrusFruits.includes(fruit));
console.log(citruses);

//tenary operator a ? b : c
//if a is true, return b, else return c
const evenNums = numbers.filter((number) => (number % 2 == 0 ? true : false));
console.log(evenNums);

//d. Reduce ###############################################################################################################
/**
 * Reduces an array to a single value
 * Here there's an additional argument: previous value
 * Reduce performs an operation to each element like map and filter
 * pValue is the return value of the previous operation, passed to the next operation
 * the final value is the return value of the last operation
 * Note that the first element is not operated on, and instead becomes the first previousValue
 * e.g. with a numbers array [6,5,4,3,2,1]
 * The first operation is on index 1, with pValue=6 and cValue=5
 */
const sum = numbers.reduce((previousValue, currentValue, index, array) => {
  console.log(`
    Index\t= ${index}
    Previous\t= ${previousValue}
    Current\t= ${currentValue}`);
  return previousValue + currentValue;
});
console.log("Final Value\t=", sum);

//If you want operation to be performed on index 0, you need to provide an initial value
//This initial value will be used as the pValue of index0 operation
const sumWith100InitialValue = numbers.reduce((previousValue, currentValue, index, array) => {
  console.log(`
    Index\t= ${index}
    Previous\t= ${previousValue}
    Current\t= ${currentValue}`);
  return previousValue + currentValue;
}, 100); //Here is the initial value, defined after the callback func
console.log("Final Value\t=", sumWith100InitialValue);

//e. Find, FindIndex ######################################################################################################
//Find returns undefined if no match
//FindIndex returns -1 if no match
//use a callback function that returns true or false, similar to Filter

//f. FindLast, FindLastIndex ##############################################################################################
//Same as Find and FindIndex but from behind

//g. Some and Every #######################################################################################################
//Some returns true if at least 1 of the element matches the callback (return true)
let someFruits = fruits.some(fruit=>fruit.length>5);
console.log(someFruits); //return true since some fruits are longer than 5

//Every returns true of ALL of the elements matches the callback (return true)
let everyFruits = fruits.every(fruit=>fruit.length>5);
console.log(everyFruits); //return false since not all fruits are longer than 5

//h. toSpliced, with, toSorted, toReversed ################################################################################
//Learn by yourself lol