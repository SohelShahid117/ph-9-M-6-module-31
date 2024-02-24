// 31-3 Array Map To Do One Line Loop Magic

const number = [2,3,4,5,6,7,8,10];
const doubleNum = [];
for(num of number){
    const double = num*2;
    doubleNum.push(double)
}
console.log(doubleNum);

// for(dbl of doubleNum){
//     console.log(dbl);
// }

function doubleNumber(n){
    // console.log(n);
    return n*2;
}
const result = number.map(doubleNumber);
console.log(result)


const double2 = (n)=>n*2;
const dbl2 = number.map(double2);
console.log(dbl2)

const againDbl = number.map((n)=>n*2);
console.log(againDbl);


const fiveBonus = number.map((n)=>n+5);
console.log(fiveBonus);

const friends = ['abul','babul','karim','sokkkoirje','abulllye'];
const frndLength = friends.map((f)=>f.length);
console.log('length of every friends ' + frndLength);

const frndFirstLetter = friends.map((f)=>f[0].toLocaleUpperCase());
console.log(frndFirstLetter)


//31-4 Foreach, Filter, Find, And Differences Between Them