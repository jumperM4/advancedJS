//ternary operator

// function isUserValid(bool) {
//   return bool;
// }

// var answer = isUserValid(true) ? "Access Granted" : "Access Denied";

// console.log(answer);

// let automatedAnswer =
//   "Your account # is " + (isUserValid(true) ? "1234" : "not available");

// console.log(automatedAnswer);

//switch
// function moveCommand(direction) {
//   let whatHappens;
//   switch (direction) {
//     case "forward":
//       whatHappens = "you encounter a monster";
//       break;
//     case "back":
//       whatHappens = "you arrived home";
//       break;
//     case "right":
//       whatHappens = "you found a river";
//       break;
//     case "left":
//       whatHappens = "you run into a troll";
//       break;
//     default:
//       whatHappens = "please enter a valid direction";
//   }
//   return whatHappens;
// }

// console.log(moveCommand("rightt"));

// let experiencePoints = winBattle(true) ? 10 : 1;

// function simpleGame(string) {
//   let a;
//   switch (string) {
//     case 1:
//       a = 'one';
//       break;
//     case 3:
//       a = "уруруру";
//       break;
//     case "5":
//       a = "puzzle";
//       break;
//     case "spider-man":
//       a = "cool guy";
//       break;
//     default:
//       a = "Spider-man is still a cool guy!";
//     }
//     return a;
// }

// console.log(simpleGame('spider-mann'));

// change everything below to the newer Javascript!

// Destructuring
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };
// let { person, firstName, lastName, age, eyeColor } = person;

// // Object properties
// const a = "test";
// const b = true;
// const c = 789;

// const okObj = {
//   a,
//   b,
//   c,
// };

// // Template strings
// const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no?`;

// // default arguments
// // default age to 10;
// function isValidAge(age = 10) {
//   return age;
// }

// // Symbol
// // Create a symbol: "This is my first Symbol"
// const sym = Symbol("This is my first Symbol");

// // Arrow functions
// const whereAmI = (username, location) => {
//   if (username && location) {
//     return "I am not lost";
//   } else {
//     return "I am totally lost!";
//   }
// }

//Solve these problems: Advanced Function:
//#1 Create a one line function that adds adds two parameters
// const sum = (a, b) => a + b;

//Closure: What does the last line return?
// const addTo = x => y => x + y
// var addToTen = addTo(10)
// addToTen(3)
// const add = (n) => {
//   let sum = 0;
//   return function addTo(num) {
//     return (sum = num + n);
//   };
// };
// const sum = add(10);
// console.log(sum(10));
// console.log(sum(5));

// //Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1) - 31
// //Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12) - 17
// const currying = (a) => {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// };
// const curriedSum = currying(5);
// console.log(curriedSum(5)(5));

//Composing: What does the last line return?
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// console.log(compose(add1, add5)(10))

// //What are the two elements of a pure function?
