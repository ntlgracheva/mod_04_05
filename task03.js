'use strict'

const invertText = (string) => {

    let str = string.split("");
    let convertedString = "";

    for (let i = string.length - 1; i >= 0; i--) {
        convertedString = convertedString + str[i];
    }

    return convertedString;
}

let text = prompt("Введите текст:").trim();
console.log(invertText(text));