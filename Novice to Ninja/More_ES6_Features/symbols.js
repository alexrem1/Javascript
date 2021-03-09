// Symbols are a primitive type that's completely unique, no two symbols can be equal to each other

const symbolOne = Symbol("a generic name");
const symbolTwo = Symbol("a generic name");
console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo); // no two symbols are the same

//symbols can be used as keys or property names in objects.
const ninja = {};

ninja.age = 30;
ninja["belt"] = "orange";
ninja["belt"] = "black";
// we can't give an object this way two properties which are essentially the same as the belt property is overrided, now with symbols that doesn't matter.

ninja[symbolOne] = "ryu";
ninja[symbolTwo] = "donkeyyy";

console.log(ninja);
