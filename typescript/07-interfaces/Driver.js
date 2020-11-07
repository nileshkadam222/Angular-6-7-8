"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var myGolf = new GolfCoach_1.GlofCoach();
var myCricket = new CricketCoach_1.CircketCoach();
var myCoachs = [];
myCoachs.push(myCricket);
myCoachs.push(myGolf);
for (var _i = 0, myCoachs_1 = myCoachs; _i < myCoachs_1.length; _i++) {
    var temp = myCoachs_1[_i];
    console.log(temp.getCoachRouting());
}
