const hello = 'Hello';
const world = 'World';
console.log(`${hello} ${world}`);

const multiply = (a = 1, b = 1) => (a * b);
console.log('multiply');
console.log(multiply());
console.log(multiply(5));
console.log(multiply(5, 4));

let average = (...args) => args.reduce((a, b) => a + b, 0) / args.length;
console.log('average');
console.log(average(1)); // 1
console.log(average(1, 3)); // 2
console.log(average(1, 3, 6, 6)); // 4
console.log('grades');
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
console.log(average(...grades));

console.log("names");
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = data;
console.log(firstname + " " + lastname);