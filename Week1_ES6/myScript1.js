"use strict";

const x = 10;
console.log(x);

//Objects
let chair = {
  type: "reclining chair",
  color: "brown",
  recline: function () {
    console.log(`This ${this.type} reclined!`);
  },
  changeColor: function (newColor) {
    this.color = newColor;
  },
};

//Copying in-object functions to outside functions
let outsideFunc = chair.recline.bind(chair);
outsideFunc();
//this binds the chair object as the 'this' variable. Otherwise the 'this.type' in the recline function will fail as the 'this' will refer to the window instead

/**
 * Function Definition
 */
//1.Func definition
function sayGreeting(name, message) {
  console.log(`Hello ${name}, ${message}`);
}

sayGreeting("Jason", "Hi!");

//2. Func Expression
const sayGreeting2 = function (name, message) {
  console.log(`Hello ${name}, ${message}`);
};

//3. Arrow Function
const sayGreeting3 = (name, message) => {
  console.log(`Hello ${name}, ${message}`);
};

//for arrow function, if you don't use brackets it will auto return the value
const addition = (x = 1, y = 1) => x + y;

//if you use brackets, you must explicitly return the value if you want it to be returned
const sum = (x = 1, y = 1) => {
  return x + y;
};

//Arrow Function Doesn't Create It's Own Scope
const myObj = {
  myFunc: () => {
    //Arrow func doesn't create a scope, thus 'this' does not belong to myObj but rather the scope outside of it which is Window
    console.log(this); //this=>window
    const foo = () => {
      //foo does not have it's own scope, thus it calls the parent's scope. But myFunc also doesn't have it's own scope so it goes above again and return window
      console.log(`this is inside foo ${this}`);
    };
    foo();
  },
};
myObj.myFunc();

//On the other hand, function expression creates it's own scope
const myObj2 = {
  myFunc2: function () {
    console.log(this);
    const foo2 = function () {
      //foo here is undefined
      console.log(`this is inside foo ${this}`);
    };
    foo2();
  },
};
myObj2.myFunc2();

console.log("END OF MYSCRIPT 1")
