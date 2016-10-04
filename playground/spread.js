// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Bob', 'Jim'];
// var groupB = ['Vikran'];
// var final = [3, ...groupA, ...group];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function hello (name, age) {
   console.log('Hi'  + name + ', you are ' + age)
}

hello(...person);
hello(...personTwo)

var names  ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.ForEach(function (name) {
  console.log('Hi' + name);
});
