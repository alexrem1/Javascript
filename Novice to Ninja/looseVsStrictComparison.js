let age = 25;

// loose comparison (different types can still be equal)

console.log(age == 25);
console.log(age == "25");
console.log(age != 25);
console.log(age != "25");
// JS is looking at the comparison and its converting this string into a number before it evaluates it.

// strict comparison (different types cannot be equal)
console.log(age === 25);
console.log(age === "25");
console.log(age !== 25);
console.log(age !== "25");
// the string and the number is being compared directly eg the type is being taken into consideration

//strict gives more predicatable results
