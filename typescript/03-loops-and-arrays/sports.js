var sprotOne = ["Golf", "Cricket", "Tennis", "Swimming"];
//treditional for loop
for (var index = 0; index < sprotOne.length; index++) {
    console.log(sprotOne[index]);
}
// Lets use the simplied for loop
for (var _i = 0, sprotOne_1 = sprotOne; _i < sprotOne_1.length; _i++) {
    var tempSport = sprotOne_1[_i];
    if (tempSport.toLowerCase() === "cricket") {
        console.log("tempSport :" + tempSport + "<< My Fav >>");
    }
    else {
        console.log("tempSport :" + tempSport);
    }
}
