export class Vehicle {
    constructor(wheels) {
        this.wheels = wheels;
    }

    toString() {
        return '(' + this.wheels + ')';
    }
}

export class Car extends Vehicle {
    constructor(color) {
        super(4);
        this.color = color;
    }

    toString() {
        super.toString() + ' colored: ' + this.color;
    }
}