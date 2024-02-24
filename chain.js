// 31-2 Access Value, Nested Object, Optional Chaining
const dataAbul = [{ id: 1, name: 'Abule', adress: 'kochu khet' }];
console.log(dataAbul)
console.log(dataAbul[0].adress)

const products = {
    quantity: 55,
    data: [
        { id: 1, nam: 'lenovo laptp', price: 25000 },
        { id: 2, nam: 'HP laptp', price: 35000 },
        { id: 3, nam: 'dell laptp', price: 32000 },
        { id: 4, nam: 'macbook', price: 132000 }
    ]
}
console.log(products);
console.log(products.data[1].price);

const user = {
    id: 69,
    name: 'shahid',
    address: {
        street: {
            first: 'salam mansion',
            second: 'gayebi mosjid goli',
            third: 'khotiber hat',
            fourth: 'bahaddarhat'
        },
        city: 'chattogram',
        country: 'Bangladesh'
    }
}

console.log(user)
console.log(user.address.street.second)


const user2 = {
    id: 77,
    name: 'proi bibir majar',
    address: {
        city: 'chittagong',
        country: 'bangladesh'
    }
}
console.log(user2)
// console.log(user2.address.street.second)
console.log(user2.address.street?.second) //? is optional chain

