const SIZE_SMALL = {
    price: 50,
    callories: 20
}

const SIZE_MEDIUM = {
    price: 75,
    callories: 30
}

const SIZE_LARGE = {
    price: 100,
    callories: 40
}

const CHEESE = {
    price: 10,
    callories: 20
}

const LETTUCE = {
    price: 20,
    callories: 5
}

const POTATO = {
    price: 15,
    callories: 10
}

const SPICES = {
    price: 15,
    callories: 0
}

const MAYO = {
    price: 20,
    callories: 5
}

class Hamburger {
    constructor(size) {
        this.price = size.price;
        this.callories = size.callories;
    }
    addTopping(topping) {
        this.price += topping.price
        this.callories += topping.callories
    }
    removeTopping(topping) {
        this.price -= topping.price
        this.callories -= topping.callories
    }

    getPrice() {
        return this.price
    }
    getCallories() {
        return this.callories
    }

}
const hamburger = new Hamburger(SIZE_LARGE);
hamburger.addTopping(MAYO);
hamburger.addTopping(POTATO);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());