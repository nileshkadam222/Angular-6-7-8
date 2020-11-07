export class Customer11{
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

