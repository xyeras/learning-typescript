console.log('Hello Typescript!');

// async function helloWorld () {
//     return 'Hello World';
// }

// implicitly define type
let implicitString = 'this is a string';
implicitString = '100';

let implicitNum = 1000;
implicitNum = 0;

let implicitBool = false;
implicitBool = true;

// explicitly define types
let explicitString: string;
explicitString = 'this is a string with 100 inside';

let explicitNum: number;
explicitNum = 10;

let explicitBool: boolean;
explicitBool = true;

// any keyword
let anyType: any;
anyType = 'a string';
anyType = 200;
anyType = false;

// creating a type
type Color = 'red' | 'green' | 100;
let shirtColor: Color;
shirtColor = 100;

type Style = 'bold' | 'italic';
let font: Style;
font = 'bold';

// interface
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    over21: boolean;
    [key:string]: any;
}

const youngPerson:Person = {
    firstName: 'Liz',
    lastName: 'Gaw',
    age: 24,
    over21: true
}

const middlePerson:Person = {
    firstName: 'Liz',
    lastName: 'Gaw',
    age: 31,
    over21: true,
    occupation: 'Wizard'
}

// arrays
// let arr: Array <number | string> = [];
let arr:(number | string) [] = [];
arr.push(1);
arr.push(5);
arr.push('100');
// arr.push(true);      // arr only takes strings or numbers


const people: Person[] = [];
people.push(middlePerson);
people.push({
        firstName: 'Elizabeth',
        lastName: 'Gaw',
        age: 41,
        over21: true
})

const getPerson = (personName: string):(Person | undefined) => {
    let found = people.find((p) => p.name === personName);
    // console.log(found);
    return found;
}

// typescript functionality

// const calcSum = (first:number, second:number):number => {
//     return first + second;
// }

const calcSum = (first:number, second:number, third?:number) => {
    return third ? first + second + third: first + second;
}

calcSum(1, 2); // 3
// calcSum("1", 2); // "12"

const helloWorld = () => {
    console.log('Hello World');
}

helloWorld();