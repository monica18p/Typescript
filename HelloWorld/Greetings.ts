var global_num = 12

class Greetings {
    num_val: number = 13
    static sval = 10
    storeNum() {
        var local_num = 14
    }
    greet() {
        console.log("Hello world!!")
    }

    typeAssertion() : void {
        var str = '1'
        var str2 = <number> <any>  str
        console.log(str2);
        console.log("typeof: ", typeof(str2))
    }

    whileStatements() {
        var n:number = 6
        while(n > 5) {
            n = n - 1
            console.log("Entered while")
        } do {
            console.log("Entered do...while")
        }
        while(n>5)
    }

    breakStatements() {
        var i: number = 1
        while(i<=10) {
            if (1 % 5 == 0) {
                console.log("The first multiple of 5  between 1 and 10 is : "+i)
                break
            }
            i++
        }
    }

    optionalParaml(id: number, mail_id?: string) {
        console.log("Id: ", id)
        if (mail_id != undefined) {
            console.log("EmailID: ", mail_id)
        }
    }

    restParams(...nums: number[]) {
        var i
        var sum : number = 0

        for(i = 0; i < nums.length; i++) {
            sum = sum + nums[i]
        }

        console.log("Sum of numbers: ", sum)
    }

    defaultParams(price: number, rate: number = 0.50) {
        var discount = price * rate; 
        console.log("Discount Amount: ",discount); 
    }

    res = function(a: number, b: number) {
        return a*b;
    }

    tuples() {
       var mytuple = [10, "Hey", "Hi", 2.4]
       console.log("Items before pushing: " + mytuple)

       mytuple.push("$11111111$")
       console.log("Items after pushing: " + mytuple)

       console.log("Length before poping: " + mytuple.length)
       console.log(mytuple.pop()+ " popped from mytuple")
       console.log("Length after poping: " + mytuple.length)
       
    }

    union() {
        var unionVar: string|number
        unionVar = 12
        console.log("numeric value: ", unionVar)
        unionVar = "Hello"
        console.log("string value: ", unionVar)
    }

}

function separator() {
    console.log("--------------------------")
}

separator()
var obj = new Greetings()
console.log("obj.greet()")
obj.greet()

separator()
console.log("obj.typeAssertion()>>>")
obj.typeAssertion()

separator()
console.log("obj.whileStatements()>>>")
obj.whileStatements()

separator()
console.log("obj.breakStatements()>>>")
obj.breakStatements()

separator()
console.log("obj.optionalParaml(12345)>>>")
obj.optionalParaml(12345)

separator()
console.log("obj.optionalParaml(6789, \"mvh@rem.xyz>>>\")")
obj.optionalParaml(6789, "mvh@rem.xyz")

separator()
console.log("obj.restParams(1,2,3)>>>")
obj.restParams(1,2,3)

separator()
console.log("obj.restParams(10,10,10,10)>>>")
obj.restParams(10,10,10,10)

separator()
console.log("obj.defaultParams(5, 0)>>>")
obj.defaultParams(5, 0)

separator()
console.log("obj.defaultParams(5)>>>")
obj.defaultParams(5)

separator()
console.log("Anonymous function>>> ", obj.res(2, 5))
console.log("Anonymous Funct: ", obj.res)

separator()
console.log("obj.tuples()>>>")
obj.tuples()

separator()
console.log("obj.union()>>>")
obj.union()

separator()
console.log("Global num: " + global_num)  

separator()
console.log("Static num: " + Greetings.sval)

separator()
console.log("Class num: " + obj.num_val) 

separator()

//Function Constructor
var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log("Function Constructor x: ", x);

separator()
//Recursive Functions
function factorial(number) {
    if (number <= 0) {
        return 1
    } else {
        return (number * factorial(number - 1))
    }
}

console.log("Recursive Functions - factorial: ", factorial(6))


separator()
function buildName(firstName: string, ...restOfName) {
    return firstName + " " + restOfName.join(",");
}

let employeeName = buildName("Joseph", "Samuel", 1, "MacKinzie");
console.log("Rest Parameters")
console.log("Employee name : ", employeeName)


separator()
console.log("Union")
var val:string|number|number[] 
val = 12 
console.log("numeric value of val "+val) 
val = "This is a string" 
console.log("string value of val "+val)
val = [1, 2, 33]
val.forEach(element => {
    console.log("element value of val "+element)
});


separator()
console.log("Null & undefined")
var uniq
var quniq = uniq
console.log("Printing undefined: ", quniq)
var nullable = null
console.log("Printing null value: ", nullable)

separator()
separator()

