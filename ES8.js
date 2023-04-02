// // Solve the below problems:

// // #1) Line up the Turtle and the Rabbit at the start line:
// const startLine = "     ||<- Start line";
// let turtle = "🐢";
// let rabbit = "🐇";
// // it should look like this:
// ("     ||<- Start line");
// ("       🐢");
// ("       🐇");
// // when you do:
// console.log(startLine);
// console.log(turtle);
// console.log(rabbit);

// console.log(turtle.padStart(15));
// console.log(turtle, rabbit);
// console.log(rabbit.padEnd(10), turtle);

// // #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// // Read about what the second parameter does in padEnd and padStart
// turtle = turtle.trim().padEnd(3, "=");
// const str = "hello";
// console.log(str.padEnd(8, "*") + "there!".padStart(7, "^"));

// #3) Get the below object to go from:
let obj = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};
// to this:
("my name is Rudolf the raindeer");

const objModifying = (obj) => {
  return Object.entries(obj)
    .map((el) => el.join(" "))
    .join(" ");
};

console.log(objModifying(obj));
