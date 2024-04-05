class Human {
    constructor(type = 'human') {
        this.type = type;
    }

    static  isHuman(human) {
        return human instanceof Human;
    }

    breathe() {
        alert('h-a-a-a-m');
    }
}

class DongHwi extends Human {
    constructor(type, firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`);
    }
}

const newDongHwi = new DongHwi('human', 'DongHwi', 'Kim')