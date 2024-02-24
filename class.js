// 31-6 (Optional) Introduction To Class And Objects
const products = [
    { id: 1, nam: 'lenovo laptp', price: 25000 },
    { id: 2, nam: 'HP laptp', price: 35000 },
    { id: 3, nam: 'dell laptp', price: 32000 },
    { id: 4, nam: 'macbook', price: 132000 }
]
class Product {
    country = 'BD';
    constructor(namDao) {
        this.name = namDao;
    }
    speak(talk) {
        console.log(`sohel u r talking logically ${talk}`)
    }
}

// const lenovo = Product();
// const lenovo = new Product();
console.log(`----------------------`)
const lenovo = new Product('apple');
console.log(lenovo);
lenovo.speak(`and this is good practic`);


class Teacher {
    constructor(name, subject) {
        this.nam = `Sirer nam holo ${name}`
        this.bisoi = `Sir ${subject} kob valobabe porai`
    }
    lecture() {
        console.log(`sir is teaching Math`)
    }
}

const master = new Teacher('ABUL', 'BANGLA');
console.log(master);
master.lecture()

console.log(`----------------------`);
const eunusSir = new Teacher('Eunus Sir', 'Math');
console.log(eunusSir)