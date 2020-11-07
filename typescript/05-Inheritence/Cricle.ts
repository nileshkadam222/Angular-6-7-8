import { Shape } from "./Shape";

export class Cricle extends Shape{
    constructor(_theX:number, _theY:number,private _radius:number){
        super(_theX,_theY);
        
    }

    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    getInfo() : string{
        return `${super.getInfo()} Radius= ${this._radius}`;
    }

}