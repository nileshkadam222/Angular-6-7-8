let reviews : number[] = [1,4,4.5,5];
let total : number = 0;
for(let index : number = 0;index < reviews.length; index++){
    console.log(reviews[index]);
    total += reviews[index];
}

console.log("Total amount : "+ total);

let average : number = total/reviews.length;

console.log("Average : "+ average);