"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.halveNumbers = void 0;
function halveNumbers() {
    var num = 1.0;
    while (num >= 0.001) {
        console.log(num);
        num /= 2;
    }
}
exports.halveNumbers = halveNumbers;

function main() {
    halveNumbers();
}
main();
