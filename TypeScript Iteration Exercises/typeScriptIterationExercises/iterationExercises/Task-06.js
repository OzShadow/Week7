"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumbersAndPrintStats = void 0;
function generateRandomNumbersAndPrintStats() {
    var numbers = [];
    for (var i = 0; i < 10; i++) {
        numbers.push(getRandomInt(0, 50));
    }
    var min = Math.min.apply(Math, numbers);
    var max = Math.max.apply(Math, numbers);
    var avg = numbers.reduce(function (a, b) { return a + b; }, 0) / numbers.length;
    console.log("Min: ".concat(min, ", Max: ").concat(max, ", Avg: ").concat(avg));
}
exports.generateRandomNumbersAndPrintStats = generateRandomNumbersAndPrintStats;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function main() {
    generateRandomNumbersAndPrintStats();
}
main();
