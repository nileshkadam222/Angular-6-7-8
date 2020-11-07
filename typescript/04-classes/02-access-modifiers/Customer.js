var Customer11 = /** @class */ (function () {
    function Customer11() {
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
//let CustomerInfo = new Customer11("Harshhu","Kadam");
//CustomerInfo.firstName = "Nilesh";
//CustomerInfo.lastName = "Kadak";
//console.dir(CustomerInfo);
var customerInfo1 = new Customer11();
customerInfo1._firstName = "Nilesh";
customerInfo1.lastName = "Kadam";
console.log("First Name : " + customerInfo1._firstName + "  Last Name :" + customerInfo1.lastName);
