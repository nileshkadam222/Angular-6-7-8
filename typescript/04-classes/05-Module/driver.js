"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var customerInfo1 = new Customer_1.Customer11("Nilesh", "Kadam");
customerInfo1._firstName = "Nilesh";
customerInfo1.lastName = "Kadam";
console.log("First Name : " + customerInfo1._firstName + "  Last Name :" + customerInfo1.lastName);
