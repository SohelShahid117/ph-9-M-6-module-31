class Teacher {
    constructor(name, subject) {
        this.nam = `Sirer nam holo ${name}`
        this.bisoi = `Sir ${subject} kob valobabe porai`
    }
    lecture() {
        console.log(`sir is teaching Math`)
    }
    sleep() {
        console.log(`${this.name} sir aramse ghomai`)
    }
}

const master = new Teacher('ABUL', 'BANGLA');
console.log(master);
master.sleep()