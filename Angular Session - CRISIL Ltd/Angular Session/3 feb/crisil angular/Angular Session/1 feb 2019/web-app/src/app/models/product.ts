//nmodel /domain object
export class Product{
    //type decleration
    name : string
    brand :string
    price : number

    constructor(name ="",brand="",price=0){
        this.name = name;
        this.brand = brand;
        this.price = price;
    }
}

//usage
//var p1 = new product();