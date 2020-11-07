class Customer11{
    constructor(private firstName : string,private _lastName: String ){}
    public get lastName(): String {
        return this._lastName;
    }
    public set lastName(value: String) {
        this._lastName = value;
    }

    public get _firstName() : string{
        return this.firstName;
    }

    public set _firstName(name:string){
        this.firstName = name;
    }
}

//let CustomerInfo = new Customer11("Harshhu","Kadam");
//CustomerInfo.firstName = "Nilesh";
//CustomerInfo.lastName = "Kadak";
//console.dir(CustomerInfo);

let customerInfo1 = new Customer11("Nilesh","Kadam");
customerInfo1._firstName = "Nilesh";
customerInfo1.lastName = "Kadam";
console.log("First Name : "+customerInfo1._firstName + "  Last Name :" + customerInfo1.lastName );