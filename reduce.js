// 31-5 (Recap) Map, ForEach, Filter, Find, Reduce
const number = [2, 3, 4, 5, 6, 7, 8, 10];
const numberReduce = number.reduce((a, b) => a + b, 0);
console.log('reduce is summm of array element', numberReduce);
console.log(`-------------------------------`)

const friends = ['abul', 'babul', 'karim', 'sokkkoirje', 'abulllye'];
const frndReduce = friends.reduce((a, b) => a + b, ' ');
console.log(frndReduce);

console.log(`------------------------`)

const frndReduce2 = friends.reduce((x, y) => x + y, 'maha');
console.log(frndReduce2)

console.log(`-------------------------------`)


const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    ((updateInitialValue, currentValue) => updateInitialValue + currentValue),
    initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

console.log(`------------------`)
const total = [15, 16, 17, 18, 19].reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
);
//accumulator is initialValue/equivalent uspdateInitialValue
console.log(total)

console.log(`------------------`)

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
    (accumulator, currentValue) => accumulator + currentValue.x,
    0,
);

console.log(sum); // 6

