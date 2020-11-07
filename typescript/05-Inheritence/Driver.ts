import {Shape} from './Shape';
import {Cricle} from './Cricle';
import { Rectangle } from './Rectangle';

let myShape : Shape = new Shape(12,5);
console.log(myShape.getInfo());

let myCricle : Shape = new Cricle(10,20,30);
console.log(myCricle.getInfo());


let myRectangle : Rectangle = new Rectangle(12,10,11,23);
console.log(myRectangle.getInfo());
