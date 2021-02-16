let score = "100";
console.log(score, typeof score);

score = Number(score);
console.log(score + 1, typeof score);

let resultNumber = Number("hello");
console.log(resultNumber);

let resultString = String(50);
console.log(resultString, typeof resultString);

//+-numbers are truthy vslues in type conversion but 0 is false
let resultBoolean = Boolean(100);
console.log(resultBoolean, typeof resultBoolean);

// strings of any lenght are all truthys but an empty string would be false.
let resultTrue = Boolean("0");
let resultFalse = Boolean("");
console.log(resultTrue, typeof resultTrue, resultFalse, typeof resultFalse);

// this is all explicit type conversion meaning we've explicity tried to convert the types
// implicit type conversion: JavaScript does this behind the scenes eg Loose comparison: JS changed type of value behind the scenes before comparing them
