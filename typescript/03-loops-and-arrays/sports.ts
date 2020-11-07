let sprotOne : string [] = ["Golf","Cricket","Tennis","Swimming"];

//treditional for loop

for(let index : number = 0;index< sprotOne.length;index ++){
    console.log(sprotOne[index]);
}


// Lets use the simplied for loop
for(let tempSport  of sprotOne){
    if(tempSport.toLowerCase() === "cricket"){
        console.log("tempSport :" + tempSport + "<< My Fav >>");
    }else{
        console.log("tempSport :" + tempSport);
    }
 
}
