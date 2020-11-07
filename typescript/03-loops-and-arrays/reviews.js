var reviews = [1, 4, 4.5, 5];
var total = 0;
for (var index = 0; index < reviews.length; index++) {
    console.log(reviews[index]);
    total += reviews[index];
}
console.log("Total amount : " + total);
var average = total / reviews.length;
console.log("Average : " + average);
