const calc = new Calculator(10);

function Calculator(a) {
    let r = a;
    this.sum = function(b) {
        return r += b
    }
    this.mult = function(b) {
        return r *= b
    }
    this.sub = function(b) {
        return r -= b
    }
    this.div = function(b) {
        return r /= b
    }
    this.result = function() {
        return r = r
    }
}


console.log(calc.sum(5)); // 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.result()); //11
console.log(calc.sum(100)); // 111
console.log(calc.result()); //111