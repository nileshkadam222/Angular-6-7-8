"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer11 = void 0;
var Customer11 = /** @class */ (function () {
    function Customer11(firstName, _lastName) {
        this.firstName = firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer11.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer11.prototype, "_firstName", {
        get: function () {
            return this.firstName;
        },
        set: function (name) {
            this.firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    return Customer11;
}());
exports.Customer11 = Customer11;
//let CustomerInfo = new Customer11("Harshhu","Kadam");
//CustomerInfo.firstName = "Nilesh";
//CustomerInfo.lastName = "Kadak";
//console.dir(CustomerInfo);
