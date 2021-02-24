//const before = new Date('02/01/2019 7:30:59');
const before = new Date("February 1 2019 7:30:59");
const now = new Date();

console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
// const diff = now - before;

console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
const years = Math.round(days / 365);

console.log(`the before date was ${mins} mins ago`);
console.log(`the before date was ${hours} hours ago`);
console.log(`the before date was ${days} days ago`);
console.log(`the before date was ${years} years ago`);

// converting timestamps to dates
const timestamp = 1675938474990;
console.log(new Date(timestamp));
