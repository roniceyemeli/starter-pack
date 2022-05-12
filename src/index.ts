//basic Types

let id: number = 5;
let company: string = 'Typescript';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let arr: any[] = [ 1, true, 'Hello' ];

//Tuple
let person: [number, string, boolean] = [ 1, 'Ronice', true ];
//TUple array
let employee: [number, string][];
employee = [ [ 1, 'Ronice' ], [ 2, 'John' ], [ 3, 'Doe' ] ];

//Union
let randonid: string | number;
randonid = 22;
randonid = '22';

//Enum

enum Direction1 {
	UP, //value of UP is set to 0 automatically
	DOWN,
	LEFT,
	RIGHT
}
// enum Direction1 {
//     UP = 1, // value of UP is set to 1 here we can use console.log(Direction1.UP) fro check up
//     DOWN,
//     LEFT,
//     RIGHT
// }
enum Direction2 {
	UP = 'UP',
	DOWN = 'DOWN',
	LEFT = 'LEFT',
	RIGHT = 'RIGHT'
}

//Objects

type User = {
	id: number;
	name: string;
	required: boolean;
};
const user: User = {
	id: 1,
	name: 'John',
	required: true
};

//Type Asssertion
let cid: any = 1;
//  let customerId = <number>cid
let customerId = cid as number;

//Functions

function AddNum(x: number, y: number): number {
	//if we don't want to specify the type of the paramaters we can turn on can 'noImplicitAny: true in the tsconfig file, so we will not have an error'
	return x + y;
}

function log(message: string | number): void {
	console.log(message);
}

// Interfaces
// we can't use interface with primitives or unions
type UserInterface = {
	readonly id: number; //readonly id: number => make sure that it's impossible to change the id value
	name: string;
	required: boolean;
	age?: number;
};
const user1: UserInterface = {
	id: 1,
	name: 'John',
	required: true
};

interface MathFunction {
	(x: number, y: number): number;
}
const add: MathFunction = (x, y): number => x + y;
const sub: MathFunction = (x, y): number => x - y;

//Classes

// class Person {
// 	id: number; //private id: number is making the proprety id just accessible within the class , protected id: number just accessible within the class or extended class, public is as default you can access and mofidy from everywhere
// 	name: string;
// 	constructor(id: number, name: string) {
// 		this.id = id;
// 		this.name = name;
// 	}
//     register() {
//         return `${this.name} is now registered`
//     }
// }
// const john = new Person(1, 'John Doe');
// const doe = new Person(1, 'doe ');
// console.log(john.register());

type PersonInterface = {
	id: number
	name: string
	register(): string
}
class Person implements PersonInterface {
	id: number; 
	name: string;
	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}
    register() {
        return `${this.name} is now registered`
    }
}
const john = new Person(1, 'John Doe');
const doe = new Person(1, 'doe ');

//Subclass
class Emplyeer extends Person{
    position: string

    constructor(id:number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

const empl = new Emplyeer(3, 'Ronice', 'Developer')
// console.log(empl.register())

//Generics
 function getArray<T>(items:T[]): T[] {
     return new Array().concat(items)
 }

 let numArr = getArray<number>([1,2,3,4,5])
 let strArr = getArray<string>(['luffy', 'zoro', 'namy', 'sanji'])

 strArr.push('chopper')