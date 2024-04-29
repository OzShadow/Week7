import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function findPortFrequency(): void {
    const portMap = new Map<number, number>();

    console.log("Enter port numbers between 1 and 65535");
    console.log("Enter a port number:");

    rl.on('line', (input: string) => {
        if (input.toLowerCase() === 'end') {
            rl.close();
            return;
        }

        const port = parseInt(input);

        if (port < 1 || port > 65535) {
            console.log("The port number must be between 1 and 65535!");
            console.log("Enter a port number:");
            return;
        }

        if (portMap.has(port)) {
            portMap.set(port, portMap.get(port)! + 1);
        } else {
            portMap.set(port, 1);
        }

        console.log("Enter a port number:");
    });

    rl.on('close', () => {
        console.log("");
        portMap.forEach((value, key) => {
            console.log(`Number of times ${key} occurred: ${value}`);
        });
    });
}

findPortFrequency();
