import { Base } from './base';


// Model / Domain Object

export class Product extends Base
{
    //Type Declarations
    id :number
    Name : string;
    Brand : string;
    Price: number;

    constructor(name="", brand="", price=0,id=0)
    {
        super();
        this.id = id;
        this.Name = name;
        this.Brand = brand;
        this.Price = price;
    }
}

//Usage
// var p1 = new Product();s