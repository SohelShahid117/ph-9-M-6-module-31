// 31-8 (Advanced) This Keyword, Dot Notation Vs Bracket Notation
class Teacher {
    constructor(name, subject) {
        // this.nam = `Sirer nam holo ${name}`
        // this.bisoi = `Sir ${subject} kob valobabe porai`
        this.nam = name;
        this.biosoi = subject;
    }
    lecture() {
        console.log(`${this.nam} sir is teaching Math`)
    }
    sleep() {
        console.log(`${this.nam} sir aramse ghomai`)
    }
    activity(){
        this.sleep();
    }
}

const master = new Teacher('ABUL', 'BANGLA'); //new use kora hoi class k object bananor jonno
console.log(master);
master.sleep();

const badam = new Teacher('babul mia','songit');
console.log(badam);
badam.sleep()
badam.lecture()
badam.activity()

//dot notation vs bracket notation


//31-9 Module Summary And ES6 Topics, Nested Obj.Practice Task
//common interview question about ES6 JS
//ternary operator in JS

//31-10 Advanced ES6 Concept
//revise all