"use strict";
//basic Types
let id = 5;
let company = 'Typescript';
let isPublished = true;
let x = 'Hello';
let ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr = [1, true, 'Hello'];
//Tuple
let person = [1, 'Ronice', true];
//TUple array
let employee;
employee = [[1, 'Ronice'], [2, 'John'], [3, 'Doe']];
//Union
let randonid;
randonid = 22;
randonid = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["UP"] = 0] = "UP";
    Direction1[Direction1["DOWN"] = 1] = "DOWN";
    Direction1[Direction1["LEFT"] = 2] = "LEFT";
    Direction1[Direction1["RIGHT"] = 3] = "RIGHT";
})(Direction1 || (Direction1 = {}));
// enum Direction1 {
//     UP = 1, // value of UP is set to 1 here we can use console.log(Direction1.UP) fro check up
//     DOWN,
//     LEFT,
//     RIGHT
// }
var Direction2;
(function (Direction2) {
    Direction2["UP"] = "UP";
    Direction2["DOWN"] = "DOWN";
    Direction2["LEFT"] = "LEFT";
    Direction2["RIGHT"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
    required: true
};
//Type Asssertion
let cid = 1;
//  let customerId = <number>cid
let customerId = cid;
//Functions
function AddNum(x, y) {
    //if we don't want to specify the type of the paramaters we can turn on can 'noImplicitAny: true in the tsconfig file, so we will not have an error'
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
    required: true
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const john = new Person(1, 'John Doe');
const doe = new Person(1, 'doe ');
//Subclass
class Emplyeer extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const empl = new Emplyeer(3, 'Ronice', 'Developer');
// console.log(empl.register())
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4, 5]);
let strArr = getArray(['luffy', 'zoro', 'namy', 'sanji']);
strArr.push('chopper');
