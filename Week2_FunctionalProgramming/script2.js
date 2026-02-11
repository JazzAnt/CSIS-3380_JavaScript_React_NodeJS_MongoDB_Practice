//2. IMMUTABILITY ======================================================================================
// (data is permanent, if need to be changed: instead make a copy and change the copy)
const fruitColor = {
  title: "Strawberry Red",
  color: "#ff1100",
  rating: 1,
};

/**
 * This is BAD because it changes the values of the original object.
 * If the function is called several times, it can be unclear what the rating value will become.
 */
const changeRatingMutable = (object, newRating) => {
  object.rating = newRating;
};

/**
 * This is BETTER, because the original object is unchanged.
 * No matter how many times the function is called, the original object is unchanged and consistent.
 */
const changeRatingImmutable = (object, newRating) => {
  //...object = copy the object
  //rating:newRating = set the rating property of object to newRating (replace if existing)
  return { ...object, rating: newRating };
};

/**
 * If your arrow function has only 1 expression, it will default return that expression.
 * Can make it more concise.
 * Also you can name the new value the same as the key to make that shorter too
 * Like rating here
 */
const changeRating = (object, rating) => ({ ...object, rating });

const newObject = changeRating(fruitColor, 2);
console.log("New object:", newObject);
console.log("Original:", fruitColor);

//2. PURE FUNCTIONS ==================================================================================
// Functions that are consistent (same input results in same output always)
// The function shouldn't have any external variables besides the arguments
const squareRoot = (number) => Math.sqrt(number);
console.log(squareRoot(3));

//3. FIRST CLASS FUNCTIONS ============================================================================
//3a. You can assign functions to variables (as shown by squareRoot above)
//3b. You can pass functions as arguments

//This functions receives a function as an argument and calls it inside
const outsideFunc = (argumentFunc) => {
  const message = "Hello, World";
  argumentFunc(message);
};

//Here we define the function as an argument
outsideFunc((msg) => console.log(msg.toUpperCase()));

//3c. Making functions members of arrays
//Here the array contain both strings and functions
const arr = [
  "Hello",
  (message1, message2) => console.log(`${message1} ${message2}`),
  "World",
  outsideFunc,
];
console.log(arr);

//and you can call the func like this
arr[1](arr[0], arr[2]);

//where is this useful? Say you have to perform several operations on a set of data
//you can loop them in an array
let numbers = [12,34,56,78]
let operations = [
    (num)=>num*2,
    (num)=>Math.sqrt(num),
    (radius)=>Math.PI*radius*radius
]

for (let num of numbers){
    console.log("For number:", num);
    for (let operation of operations){
        console.log(operation(num));
    }
}

//3d. Assign function as value of an object's key (seen this in week 1)