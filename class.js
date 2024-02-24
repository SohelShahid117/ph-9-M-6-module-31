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


class Polygon {
    constructor() {
        this.name = "Polygon";
    }
}

class Rectangle {
    constructor() {
        this.name = "Rectangle";
    }
}

class Square extends Polygon {
    constructor() {
        super();
    }
}

// Make Square extend Rectangle (which is a base class) instead of Polygon
Object.setPrototypeOf(Square, Rectangle);

// const newInstance = new Square();
const newInstance = new Rectangle();

// newInstance is still an instance of Polygon, because we didn't
// change the prototype of Square.prototype, so the prototype chain
// of newInstance is still
//   newInstance --> Square.prototype --> Polygon.prototype
console.log(newInstance instanceof Polygon); // true
console.log(newInstance instanceof Rectangle); // false

// However, because super() calls Rectangle as constructor, the name property
// of newInstance is initialized with the logic in Rectangle
console.log(newInstance.name); // Rectangle
