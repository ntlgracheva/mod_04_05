'use strict'

const isPrime = (number) => {
    let num = number;
    let remainder = 0;

    for (let i = 2; i < num; i++) {
        remainder = num % i;
        if (remainder === 0) { return false }
    }
    return true;
}

let x = +prompt("Введите целое положительное число:");

console.log(`Число ${x} является ${isPrime(x) ? "простым" : "составным"}`);