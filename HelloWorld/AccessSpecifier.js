var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DataHinding = /** @class */ (function () {
    function DataHinding() {
        // public strPub: string = "Public String Variable"
        this.str = "Protected String Variable";
        this.str1 = "Private String Variable";
    }
    DataHinding.prototype.protectedMethod = function () {
        console.log("Protected method");
    };
    DataHinding.prototype.privateMethod = function () {
        console.log("Private method");
    };
    return DataHinding;
}());
var DataHindingSub = /** @class */ (function (_super) {
    __extends(DataHindingSub, _super);
    function DataHindingSub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataHindingSub.prototype.protectedMethod = function () {
        console.log("Overriding Super Class Protected method");
    };
    DataHindingSub.prototype.printProtectedVariable = function () {
        console.log(this.str);
    };
    return DataHindingSub;
}(DataHinding));
var objDataHinding = new DataHinding();
var objDataHindingSub = new DataHindingSub();
objDataHindingSub.protectedMethod();
