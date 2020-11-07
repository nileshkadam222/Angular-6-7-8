import { Coach } from "./Coach";
import { CircketCoach } from "./CricketCoach";
import { GlofCoach } from "./GolfCoach";

let myGolf : GlofCoach = new GlofCoach();
let myCricket : CircketCoach = new CircketCoach();

let myCoachs: Coach[] = [];
myCoachs.push(myCricket);
myCoachs.push(myGolf);

for(let temp of myCoachs){
    console.log(temp.getCoachRouting());
}