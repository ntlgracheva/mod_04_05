'use strict'

for (let i = 1; i < 10; i++) {
    console.log("---------------------")

    for (let num = 1; num < 10; num++) {
        console.log(`${num}**${i} = ${num ** i}`);
    }
}