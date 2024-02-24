// 31-7 (Optional) Inheritance Prototypical Inheritance

class Vehicle {
    constructor(name, price) {
        this.nam = name;
        this.dam = price
    }
    move() {
        console.log('gari cholena cholena cholena re,')
    }
}
let gari = new Vehicle;
console.log(gari);
gari.move()

class Bus extends Vehicle {
    constructor(name, price, seat, ticketPrice) {
        // this.buserNam = name,
        //     this.buserDam = price,
        //     this.ason = seat,
        //     this.seaterDam = ticketPrice
        super(name, price);
        this.ason = seat,
            this.seaterDam = ticketPrice
    }
}

const localBus = new Bus;
console.log(localBus)

class Truck extends Vehicle {
    constructor(name, price, load) {
        super(name, price);
        this.loadKotoNitePare = load;
    }
}
const truckkkk = new Truck;
console.log(truckkkk)

/*
what is an Object--->
class--->is a template for making object
object--->e 2t jinis take:1.property(attribute/state) 2.method(do something,function & procedure)
*/

// super class vs sub class

//object inherits from objects

/*
https://youtu.be/B6vSq4KiZeM?si=2Hbyoc5XaI93rIhq

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

https://www.freecodecamp.org/news/object-oriented-programming-javascript/
*/