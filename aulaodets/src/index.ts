/* let x: number = 10;
x = 16;
console.log(x);


// Inferência x annotation

const y = 12


// tipos básicos
let firstName: string = "Matheus";
let age: number = 30;
const isAdmin: boolean = true;

// String != string

console.log(typeof firstName);

firstName = "João"

console.log(firstName);

// Object
const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5)
console.log(myNumbers);


// tuplas

let myTuple: [number, string, string[]]
myTuple = [5, "teste", ["a", "b"]]

// Object literals -> {prop: value}
const user: { name: string, age: number } = {
    name: "Pedro",
    age: 18,
    
};
console.log(user)
console.log(user.name)
console.log(user.age)


// any

let a: any = 0 
a = "a"

// union type

let id: string | number = "10"
id = 200



// type alias

type myIdType = number | string

let userId: myIdType

userId = 10
userId = "aaaa"

// enum
// tamanho de roupas (size: Médio, size: Pequeno)

enum Size{
    P = 'pequeno',
    M = 'Médio',
    G = 'grande'
}
const camisa={
    name: "camisa Polo",
    size: Size.G
}
console.log(camisa)

// literal types
let teste: "algumvalor" | null
teste = "algumvalor"
teste = null

function sum(a: number, b: number){
    return a + b
}
console.log(sum(12, 12));

function sayHelloTo(name: string): string{
    return `Hello ${name}`
}
console.log(sayHelloTo('Zenati'))


function logger (msg: string): void {
    console.log(msg)
}
console.log(logger('hello'))


function greeting(name: string, greet?: string) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`)
    }else{
        console.log(`Olá ${name}`)
    }
}

greeting("Vitor", 'Sir')

// Interfaces

interface MathFunctionParams {
    n1: number,
    n2: number
}



function sumNumber(nums: MathFunctionParams) {
    
    return nums.n1 + nums.n2
}
console.log(sumNumber({n1: 2, n2: 3}))

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 - nums.n2
}
console.log(multiplyNumbers({ n1: 5, n2: 2 }))


// Narrowing
// checagem de  tipos

function doSomething(info: number| boolean){
    if(typeof info ==="number"){
        console.log(`O número é ${info}`)
        return
    }
    console.log("Não foi passado um número!")

}

doSomething(1)

// generics
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1, 2, 3]
const a2 = ["a", "b", "c"]

showArraysItems(a1)
showArraysItems(a2)

 */
// classes

class User {
    name
    role
    isApproved
    constructor(name: String, role: String, isApproved: Boolean) {
        
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`)
    }
}


const Zeca = new User("Zéca", "Admin", true);

console.log(Zeca);

Zeca.showUserName()

// Interfaces em classes

interface IVehicle {
    brand: string
    showBrand(): void
}


class Car implements IVehicle{
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

const fusca = new Car("VW", 2)
fusca.showBrand()



//Herança
class SuperCar extends Car {
    engine
    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)

console.log(a4)
a4.showBrand()


//  constructor decorators
function BaseParamters() {
    return function <T extends {  new (...args: any[] ):{} } >(constructor: T ) {
        return class extends constructor {
            id = Math.random()
            createdAt = new Date()
        }
    }
}


// decorators
function Pokemon(){
           const pokemonList: string[] = ["Chamander", "Bulbasaur", "Squirtle", "Picachu"];
            const random: number = Math.floor((Math.random() * 4) );
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor{
            
            pokemon:string = pokemonList[random]
        }
    }


}






@Pokemon()
class Person {
    name

    constructor(name: string) {
        this.name = name
    }

}

const sam = new Person("Sam")

console.log(sam)