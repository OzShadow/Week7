"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printWithCommas = void 0;
function printWithCommas() {
    var output = "";
    for (var i = 12; i >= 1; i--) {
        output += i + (i > 1 ? "," : "");
    }
    console.log(output);
}
exports.printWithCommas = printWithCommas;

function main() {
    printWithCommas();
}
main();
