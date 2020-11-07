class Customer{
    firstName : string;
    lastName : String;

    constructor(fName : string,lName : String){
        this.firstName = fName;
        this.lastName = lName;
    }
}

let CustomerInfo = new Customer("Harshhu","Kadam");
CustomerInfo.firstName = "Nilesh";
CustomerInfo.lastName = "Kadak";
console.dir(CustomerInfo);

let customerInfo1 = new Customer("Nilesh","Kadam");
console.dir(customerInfo1);