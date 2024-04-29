"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillUniqueArray = void 0;
function fillUniqueArray() {
    var numbers = [];
    while (numbers.length < 10) {
        var num = Math.floor(Math.random() * 100);
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    console.log("First to Last\n".concat(numbers.join(', ')));
    console.log("Last to First\n".concat(numbers.reverse().join(', ')));
}
exports.fillUniqueArray = fillUniqueArray;
function main() {
    fillUniqueArray();
}
main();
