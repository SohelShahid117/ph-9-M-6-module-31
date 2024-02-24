//31-4 Foreach, Filter, Find, And Differences Between Them
/*map vs forEach
1.map return dibe but forEach kono return dibena
2.map er bitore & baire element goloke console kora jabe but forEach e element goloke only bitore console kora jebe
*/
const number = [2, 3, 4, 5, 6, 7, 8, 10];
const double = number.map((n) => n * 2);
console.log(double)

const double2 = number.forEach((n) => {
    console.log(n);
    return n * 2;
});
console.log(double2)

const filterNumb = number.filter((n) => n > 5);
console.log('filter number = ', filterNumb);

const filterNumb2 = number.filter((n) => n % 2 !== 0);
console.log('filter number odd number = ', filterNumb2);

const filterNumb3 = number.filter((n) => n % 2 === 0);
console.log('filter number even number = ', filterNumb3);

const friends = ['abul', 'babul', 'karim', 'sokkkoirje', 'abulllye'];
const frndFilterLength = friends.filter((f) => f.length > 5);
console.log(frndFilterLength);

const frndFilterLength2 = friends.filter((f) => f.length % 2 == 1);
console.log(typeof frndFilterLength2, frndFilterLength2);

const frndFilterLength3 = friends.find((f) => f.length > 5);
console.log(frndFilterLength3);

const frndFilterLength4 = friends.find((f) => f.length % 2 == 1);
console.log(typeof frndFilterLength4, frndFilterLength4);

/*filter vs find:
1.filter condition fulfil sob element k object like array akare debe
2.find condition fulfil 1st element k string akare debe
*/