const calc = createCalculator(10);

function createCalculator(a) {
    let result = a;
    return {
        sum: (b) => result += b,
        sub: (b) => result -= b,
        mult: (b) => result *= b,
        div: (b) => result /= b,
        set: (b) => result = b
    }
}

console.log(calc.sum(5)); // 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); //
console.log(calc.sum(1))