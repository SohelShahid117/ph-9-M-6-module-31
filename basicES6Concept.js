// 31-0 Basic ES6 Concept
/*
1.parameter vs argument
2.default parameter 
3.destructuring===>akta array/object teke multiple data extract kore anake destructuring bole
4.spread operator : akta array/object k copy kore onno array/object e raka
5.highest value from array
6.array/object er definite man bad die onno mangolo destructure kore ana;
7.template literals
8.regular function vs arrow function
*/
const num = [10,20,30];
const [a,b,c] = num;
console.log(a);

const std = {
    name : 'shahid',
    age:32,
    dept :'EEE',
    isExpertWebDeveloper : true 
}
// const {name,age,dept,isExpertWebDeveloper} = std;
// console.log(dept)

const fruit = ['apple','orange','mango'];
const fol = ['banana','angor',...fruit];
console.log(fruit);
console.log(fol);

const joraFolFruit = [...fruit,...fol];
console.log('jora folfruit is -'+ joraFolFruit);

const clonedStd = {math:'expert',business:'good',...std};
console.log(std)
console.log(clonedStd);
delete clonedStd.age;
console.log(clonedStd);

const joraObj = {
    ...clonedStd,
    ...std
}
console.log(`jora object =  ${joraObj}`);
console.log(joraObj);

const number = [1,3,4,6,-7,8,99,32,54.61,23,5];
console.log(Math.max(number));
console.log(Math.max([...number]));
console.log(Math.max(...number));

console.log(std);
const {age,...rest} = std;
console.log(age);
console.log(rest);

// 31-1 Module Introduction And Basic ES6 Recap
