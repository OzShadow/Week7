"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersectOfArrays = void 0;
function intersectOfArrays() {
    var array1 = [5, 9, 7, 22, 15, 19, 29, 3];
    var array2 = [15, 92, 17, 12, 33, 7, 5, 75];
    var intersection = array1.filter(function (value) { return array2.includes(value); });
    console.log("The first list contains\n".concat(array1.join(', ')));
    console.log("The second list contains\n".concat(array2.join(', ')));
    console.log("The values common to both lists are\n".concat(intersection.join(', ')));
}
exports.intersectOfArrays = intersectOfArrays;
function main() {
    intersectOfArrays();
}
main();
