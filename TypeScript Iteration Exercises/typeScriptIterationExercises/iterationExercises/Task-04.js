"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumbers = void 0;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateRandomNumbers() {
    var numbers = [];
    for (var i = 0; i < 10; i++) {
        numbers.push(getRandomInt(0, 50));
    }
    console.log(numbers);
}
exports.generateRandomNumbers = generateRandomNumbers;

function main() {
    generateRandomNumbers();
}
main();
