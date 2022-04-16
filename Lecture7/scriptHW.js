const calc = createCalculator(10);

function createCalculator(a) {
    return {
        sum: (b) => createCalculator(a + b),
        sub: (b) => createCalculator(a - b),
        mult: (b) => createCalculator(a * b),
        div: (b) => createCalculator(a / b),
        set: (b) => createCalculator(b),
        get: () => a
    }
}

console.log(calc.sum(5)); // 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); //
console.log(calc.sum(1))