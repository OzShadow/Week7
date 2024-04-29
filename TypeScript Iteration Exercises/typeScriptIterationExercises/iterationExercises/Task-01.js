"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printWithTabs = void 0;
function printWithTabs() {
    var output = "";
    for (var i = 1; i <= 12; i++) {
        output += i + "\t";
    }
    console.log(output);
}
exports.printWithTabs = printWithTabs;

function main() {
    printWithTabs();
}
main();
