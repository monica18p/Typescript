var global_num = 12;
var Greetings = /** @class */ (function () {
    function Greetings() {
        this.num_val = 13;
        this.res = function (a, b) {
            return a * b;
        };
    }
    Greetings.prototype.storeNum = function () {
        var local_num = 14;
    };
    Greetings.prototype.greet = function () {
        console.log("Hello world!!");
    };
    Greetings.prototype.typeAssertion = function () {
        var str = '1';
        var str2 = str;
        console.log(str2);
        console.log("typeof: ", typeof (str2));
    };
    Greetings.prototype.whileStatements = function () {
        var n = 6;
        while (n > 5) {
            n = n - 1;
            console.log("Entered while");
        }
        do {
            console.log("Entered do...while");
        } while (n > 5);
    };
    Greetings.prototype.breakStatements = function () {
        var i = 1;
        while (i <= 10) {
            if (1 % 5 == 0) {
                console.log("The first multiple of 5  between 1 and 10 is : " + i);
                break;
            }
            i++;
        }
    };
    Greetings.prototype.optionalParaml = function (id, mail_id) {
        console.log("Id: ", id);
        if (mail_id != undefined) {
            console.log("EmailID: ", mail_id);
        }
    };
    Greetings.prototype.restParams = function () {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        var i;
        var sum = 0;
        for (i = 0; i < nums.length; i++) {
            sum = sum + nums[i];
        }
        console.log("Sum of numbers: ", sum);
    };
    Greetings.prototype.defaultParams = function (price, rate) {
        if (rate === void 0) { rate = 0.50; }
        var discount = price * rate;
        console.log("Discount Amount: ", discount);
    };
    Greetings.prototype.tuples = function () {
        var mytuple = [10, "Hey", "Hi", 2.4];
        console.log("Items before pushing: " + mytuple);
        mytuple.push("$11111111$");
        console.log("Items after pushing: " + mytuple);
        console.log("Length before poping: " + mytuple.length);
        console.log(mytuple.pop() + " popped from mytuple");
        console.log("Length after poping: " + mytuple.length);
    };
    Greetings.prototype.union = function () {
        var unionVar;
        unionVar = 12;
        console.log("numeric value: ", unionVar);
        unionVar = "Hello";
        console.log("string value: ", unionVar);
    };
    Greetings.sval = 10;
    return Greetings;
}());
function separator() {
    console.log("--------------------------");
}
separator();
var obj = new Greetings();
console.log("obj.greet()");
obj.greet();
separator();
console.log("obj.typeAssertion()>>>");
obj.typeAssertion();
separator();
console.log("obj.whileStatements()>>>");
obj.whileStatements();
separator();
console.log("obj.breakStatements()>>>");
obj.breakStatements();
separator();
console.log("obj.optionalParaml(12345)>>>");
obj.optionalParaml(12345);
separator();
console.log("obj.optionalParaml(6789, \"mvh@rem.xyz>>>\")");
obj.optionalParaml(6789, "mvh@rem.xyz");
separator();
console.log("obj.restParams(1,2,3)>>>");
obj.restParams(1, 2, 3);
separator();
console.log("obj.restParams(10,10,10,10)>>>");
obj.restParams(10, 10, 10, 10);
separator();
console.log("obj.defaultParams(5, 0)>>>");
obj.defaultParams(5, 0);
separator();
console.log("obj.defaultParams(5)>>>");
obj.defaultParams(5);
separator();
console.log("Anonymous function>>> ", obj.res(2, 5));
console.log("Anonymous Funct: ", obj.res);
separator();
console.log("obj.tuples()>>>");
obj.tuples();
separator();
console.log("obj.union()>>>");
obj.union();
separator();
console.log("Global num: " + global_num);
separator();
console.log("Static num: " + Greetings.sval);
separator();
console.log("Class num: " + obj.num_val);
separator();
//Function Constructor
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log("Function Constructor x: ", x);
separator();
//Recursive Functions
function factorial(number) {
    if (number <= 0) {
        return 1;
    }
    else {
        return (number * factorial(number - 1));
    }
}
console.log("Recursive Functions - factorial: ", factorial(6));
separator();
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(",");
}
var employeeName = buildName("Joseph", "Samuel", 1, "MacKinzie");
console.log("Rest Parameters");
console.log("Employee name : ", employeeName);
separator();
console.log("Union");
var val;
val = 12;
console.log("numeric value of val " + val);
val = "This is a string";
console.log("string value of val " + val);
val = [1, 2, 33];
val.forEach(function (element) {
    console.log("element value of val " + element);
});
separator();
console.log("Null & undefined");
var uniq;
var quniq = uniq;
console.log("Printing undefined: ", quniq);
var nullable = null;
console.log("Printing null value: ", nullable);
separator();
separator();
