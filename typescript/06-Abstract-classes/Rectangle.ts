import { Shape } from "./Shape";

export class Rectangle extends Shape{
    calculateArea(): number {
       return this._height * this._width;
    }
    
    constructor(_theX : number,_theY : number,private _height: number,private _width: number){
        super(_theX,_theY);
    }
    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }
    
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }

    getInfo() : string{
        return `${super.getInfo()}  Height= ${this._height}  Width= ${this._width}`;
    }
    
}