"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollDice = void 0;
function rollDice() {
    var total = getRandomInt(1, 6) + getRandomInt(1, 6);
    var guess = 0;
    var tries = 0;
    while (guess !== total) {
        guess = Number(prompt("What do you think the total of two six-sided die will be?"));
        tries++;
        if (guess !== total) {
            console.log("The total was ".concat(total, ". Try again!"));
            total = getRandomInt(1, 6) + getRandomInt(1, 6);
        }
    }
    console.log("The total was ".concat(total, ". Congratulations! It took you ").concat(tries, " tries to guess successfully."));
}
exports.rollDice = rollDice;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main() {
    rollDice();
}
main();
