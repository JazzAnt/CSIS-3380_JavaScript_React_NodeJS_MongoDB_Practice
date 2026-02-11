/**
 * 1. Object Destructuring
 */
const address = {
  street: "Royal Street",
  city: "New Westminster",
  province: "BC",
};
//destructuring means copying a variable that is part of an object
//this creates variables named street and city that copies the values based on the corresponding keys on the address object
let {city, street} = address;
console.log(`this is destructured: ${street} and ${city}`);
//this new var is now independent from the address object, you can change it if needed and the address object is unchanged
city = "Vancouver";
console.log(`object value: ${address.city} | destructured value: ${city}`);
//you can also rename the variable name when destructuring
//here I copied the province object and renaming it as prov
let {province: prov} = address;
console.log("prov object = " + prov);

/**
 * 2. Destructuring incoming function arguments
 */
const displayInfo = (addr) => {
  console.log(`
            street is ${addr.street}
            city is ${addr.city}
            province is ${addr.province}
        `);
};
displayInfo(address);
//you can destructure the incoming arguments using curly brackets,
//and you can also rename them like province here
//helps shorten the code, useful when you don't need all the keys of an object
const displayInfo2 = ({street, province: prov}) => {
  console.log(`DESTRUCTURED ARGUMENT :
            street is ${street}
            province is ${prov}
        `);
};
displayInfo2(address);

/**
 * 3. Object Literal Enhancement / Restructuring (opposite of destructuring)
 */
let firstname = "John";
let age = 20;
//you can create an object using variables like so, without needing to redeclare vars
let person = {
  firstname,
  age,
};

/**
 * 4. Array Destructuring
 */
//similar to object destructuring, but arrays are indexed so order matters here
const colors = ["red", "blue", "green", "black", "purple"];

//here the destructuring is based on order
//firstVal will be red, secondVal will be blue
//leave the comma empty if you don't want that index like here where third and fourth are skipped
let [firstVal, secondVal, , , fifthVal] = colors;
console.log(`destructured colors: ${firstVal}, ${secondVal}, ${fifthVal}`);

//using the spread syntax '...' here, you can collect the rest of the elements as another array
//note that the rest operator here can only be the last operator
const numbers = [1, 2, 3, 44, 55, 66, 77];
let [a, b, , ...remainingElements] = numbers;
console.log(remainingElements);

//you can also declare default values in case the destructured object/array lacks said value
//here since the array doesn't have enough elements to fulfill the destructuring, the default value is used for fruit3
//but fruit1 and 2 are redeclared as apple and pear as intended
const fruits = ["apple", "pear"];
let [fruit1 = "grape", fruit2 = "grape", fruit3 = "grape"] = fruits;
console.log(`${fruit1}, ${fruit2}, ${fruit3}`);

/**
 * Rest parameter
 */
//rest param can also be used for varags
function findSum(...rest) {
  let sum = 0;
  //This is the conventional loop, we'll show you alternatives
  // for (let i = 0; i < rest.length; i++) {
  //   sum += rest[i];
  // }

  //let x of array is kinda like foreach, when the index is not needed
  for (let num of rest){
    sum += num
  }
  
  return sum;
}
console.log(findSum(12, 34, 53, 23));
