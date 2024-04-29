import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function orderPizza(): void {
    const pizzaSizes = new Map<string, number>([
        ['S', 6.99],
        ['M', 8.99],
        ['L', 12.50],
        ['X', 15.00]
    ]);

    rl.question("Enter the size of the pizza: ", (size: string) => {
        if (pizzaSizes.has(size.toUpperCase())) {
            console.log(`The price is: $${pizzaSizes.get(size.toUpperCase())}`);
        } else {
            console.log("Invalid pizza size!!");
        }
        rl.close();
    });
}

orderPizza(); // Call the function directly to execute it