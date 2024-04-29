"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderPizza = void 0;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function orderPizza() {
    var pizzaSizes = new Map([
        ['S', 6.99],
        ['M', 8.99],
        ['L', 12.50],
        ['X', 15.00]
    ]);
    rl.question("Enter the size of the pizza: ", function (size) {
        if (pizzaSizes.has(size.toUpperCase())) {
            console.log("The price is: $".concat(pizzaSizes.get(size.toUpperCase())));
        }
        else {
            console.log("Invalid pizza size!!");
        }
        rl.close();
    });
}
exports.orderPizza = orderPizza;
orderPizza(); // Call the function directly to execute it