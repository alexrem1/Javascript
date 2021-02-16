let ninjas = ["shaun", "ryan", "chun-li"];

console.log(ninjas[1]);
ninjas[1] = "ken";
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ["Jon", "Shaun", 20, 25];
console.log(random);

console.log(ninjas.length);

// array methods

let joinMethod = ninjas.join(", ");
console.log(joinMethod);

let indexOfMethod = ninjas.indexOf("chun-li");
console.log(indexOfMethod);

let concatMethod = ninjas.concat(["ken", "Crystal"]);
console.log(concatMethod);

console.log(ninjas);

let pushDestructiveMethod = ninjas.push("ken"); //alters original value
console.log(pushDestructiveMethod);
console.log(ninjas);

pushDesructiveMethod = ninjas.pop();
console.log(ninjas);
