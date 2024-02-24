// 31-5 (Recap) Map, ForEach, Filter, Find, Reduce
const products = [
    { id: 1, nam: 'lenovo laptp', price: 25000 },
    { id: 2, nam: 'HP laptp', price: 35000 },
    { id: 3, nam: 'dell laptp', price: 32000 },
    { id: 4, nam: 'macbook', price: 132000 }
]

const damOrMollo = products.map((p) => p.price);
console.log(damOrMollo);

const reduceDamOrMolloTotal = products.reduce((p1, p2) => p1 + p2.price, 0);
console.log(reduceDamOrMolloTotal);

const damForEach = products.forEach((p) => {
    p.nam
    console.log(p.nam)
})
console.log(damForEach)

const filterProduct = products.filter((p) => p.price);
console.log(filterProduct)

const filterProductPrice = products.filter((p) => p.price > 30000);
console.log(filterProductPrice)

const findProduct = products.find((p) => p.price);
console.log(findProduct)

/*array te j koivabe loop chalano jai:
1.for loop
2.while loop
3.for of loop
4.for in loop(ghorie-pechie)
5.forEach
6.map
7.filter
8.find
9.reduce
*/