"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumbersAndPrintLowest = void 0;
function generateRandomNumbersAndPrintLowest() {
    var numbers = [];
    for (var i = 0; i < 10; i++) {
        numbers.push(getRandomInt(0, 50));
    }
    console.log(Math.min.apply(Math, numbers));
}
exports.generateRandomNumbersAndPrintLowest = generateRandomNumbersAndPrintLowest;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function main() {
    generateRandomNumbersAndPrintLowest();
}
main();
