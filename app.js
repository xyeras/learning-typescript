console.log('Hello Typescript!');
// async function helloWorld () {
//     return 'Hello World';
// }
// implicitly define type
var implicitString = 'this is a string';
implicitString = '100';
var implicitNum = 1000;
implicitNum = 0;
var implicitBool = false;
implicitBool = true;
// explicitly define types
var explicitString;
explicitString = 'this is a string with 100 inside';
var explicitNum;
explicitNum = 10;
var explicitBool;
explicitBool = true;
// any keyword
var anyType;
anyType = 'a string';
anyType = 200;
anyType = false;
var shirtColor;
shirtColor = 100;
var font;
font = 'bold';
var youngPerson = {
    firstName: 'Liz',
    lastName: 'Gaw',
    age: 24,
    over21: true
};
var middlePerson = {
    firstName: 'Liz',
    lastName: 'Gaw',
    age: 31,
    over21: true,
    occupation: 'Wizard'
};
// arrays
// let arr: Array <number | string> = [];
var arr = [];
arr.push(1);
arr.push(5);
arr.push('100');
// arr.push(true);      // arr only takes strings or numbers
var people = [];
people.push(middlePerson);
people.push({
    firstName: 'Elizabeth',
    lastName: 'Gaw',
    age: 41,
    over21: true
});
// typescript functionality
// const calcSum = (first:number, second:number):number => {
//     return first + second;
// }
var calcSum = function (first, second, third) {
    return third ? first + second + third : first + second;
};
calcSum(1, 2); // 3
// calcSum("1", 2); // "12"
var helloWorld = function () {
    console.log('Hello World');
};
helloWorld();
