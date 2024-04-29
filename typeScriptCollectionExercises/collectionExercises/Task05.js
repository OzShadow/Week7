"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPortFrequency = void 0;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function findPortFrequency() {
    var portMap = new Map();
    console.log("Enter port numbers between 1 and 65535");
    console.log("Enter a port number:");
    rl.on('line', function (input) {
        if (input.toLowerCase() === 'end') {
            rl.close();
            return;
        }
        var port = parseInt(input);
        if (port < 1 || port > 65535) {
            console.log("The port number must be between 1 and 65535!");
            console.log("Enter a port number:");
            return;
        }
        if (portMap.has(port)) {
            portMap.set(port, portMap.get(port) + 1);
        }
        else {
            portMap.set(port, 1);
        }
        console.log("Enter a port number:");
    });
    rl.on('close', function () {
        console.log("");
        portMap.forEach(function (value, key) {
            console.log("Number of times ".concat(key, " occurred: ").concat(value));
        });
    });
}
exports.findPortFrequency = findPortFrequency;
findPortFrequency();