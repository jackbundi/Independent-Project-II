console.log("hey you");

//alert (hello jack)

//variables
var b = 'smoothie'
console.log (b);

var someNumber = 45;
console.log(someNumber);


// document.getElementById('onaMbele').innerHTML ="am learning Javascript";

// var age = prompt ('whats your age');

// document.getElementById('onaMbele').innerHTML = age;

//numbers in javascript
var num1 = 4.3
console.log(5*7);

//increment num2 by 1
num2 = 24;

num2++;
console.log(num2);

//decrement num2
num2 --;


//function
/*
1. create  a function
2. call your function
*/
//create
// function fun(){
//     alert('this is a function');
// }

//call
// fun();

// function greeting(){
// var name = prompt('whats your name?');
// var result = 'hello' + '' + name;
// console.log( result)
// }

// greeting();

// //functions with arguments
// function sumNumbers(num1,num2){
//     var sum = num1 + num2;
//     console.log();

// }
// sumNumbers(10, 12)

//while loops
var num = 0;
 while(num<100){
     num +=10;
     console.log(num);
 }

 //data types
 let yourAge = 29;
 let Yourname = 'Bob'
 let name = {first:'jack', last:'bundi'};

 //strings in javascript
 let fruit = 'nyanya';
 let moreFruits = 'nyanya\nbanana';

 console.log(moreFruits);
 console.log(fruit.indexOf('any'));       //search for a certain thing
console.log(fruit.replace('ny', 'mw'));

//array
let fruits = [ 'banana', 'melons', 'pears', 'tomatoes'];
 //fruits = new Array('banana', 'melons', 'pearls', 'tomatoes');

 fruits[1]= 'dawn';
console.log(fruits[1]);

for(let i = 0;i < fruits.length; i++){
console.log(fruits[i]);
}

//array common methods
console.log('to strings', fruits.toString());
console.log('to join', fruits.join( ' * '));

let vegetables = ['tomatoes','onions', 'kales','ginger'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
