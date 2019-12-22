
// Model / Domain Object

export class Product
{
    //Type Declarations
    Name : string;
    Brand : string;
    Price: number;

    constructor(name="", brand="", price=0)
    {
        this.Name = name;
        this.Brand = brand;
        this.Price = price;
    }
}

//Usage
// var p1 = new Product();s