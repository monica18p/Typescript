interface IPerson {
    firstName:string
    lastName:string
    sayHi:()=>string
}

var customer1:IPerson = {
    firstName:"Tom",
    lastName: "Hanks",
    sayHi: ():string => {return "Hi there"}
}

console.log("Customer Object")
console.log(customer1.firstName)
console.log(customer1.lastName)
console.log(customer1.sayHi())


interface Person { 
    age:number 
 } 
 
 interface Musician extends Person { 
    instrument:string 
 } 
 
 var drummer = <Musician>{}; 
 drummer.age = 27 
 drummer.instrument = "Drums" 
 console.log("Age:  "+drummer.age) 
 console.log("Instrument:  "+drummer.instrument)


//Multiple Interface Inheritance
interface IParent1 { 
   v1:number 
} 

interface IParent2 { 
   v2:number 
} 

interface Child extends IParent1, IParent2 { } 
var Iobj:Child = {
     v1:12,
     v2:23
    } 
console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)

class Person22 {
    ibj: string = "HH"
    
    abc() {
        console.log(this.ibj)
    }
}


interface ILoan { 
    interest:number 
 } 
 
 class AgriLoan implements ILoan { 
    interest:number 
    rebate:number 
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 
 } 
 
 var objL = new AgriLoan(10,1) 
 console.log("Interest is : "+objL.interest+" Rebate is : "+objL.rebate )
 

