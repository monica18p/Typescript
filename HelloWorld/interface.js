var customer1 = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer Object");
console.log(customer1.firstName);
console.log(customer1.lastName);
console.log(customer1.sayHi());
var drummer = {};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("Age:  " + drummer.age);
console.log("Instrument:  " + drummer.instrument);
var Iobj = {
    v1: 12,
    v2: 23
};
console.log("value 1: " + Iobj.v1 + " value 2: " + Iobj.v2);
var Person22 = /** @class */ (function () {
    function Person22() {
        this.ibj = "HH";
    }
    Person22.prototype.abc = function () {
        console.log(this.ibj);
    };
    return Person22;
}());
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var objL = new AgriLoan(10, 1);
console.log("Interest is : " + objL.interest + " Rebate is : " + objL.rebate);
