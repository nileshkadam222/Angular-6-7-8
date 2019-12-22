
import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    "name":'genderName'
})
export class genderWiseDegery{
    constructor(){}
    transform(value :String,gender:String):String{
        if(gender == "male"){
            return "Mr. "+ value
        }else if(gender == "female")
        {
            return "miss "+value;
        }
    }
    
}