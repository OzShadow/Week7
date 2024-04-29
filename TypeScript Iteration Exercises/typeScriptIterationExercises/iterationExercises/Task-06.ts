export function generateRandomNumbersAndPrintStats() : void {
    let numbers: number[] = [];
    for(let i = 0; i < 10; i++) {
        numbers.push(getRandomInt(0, 50));
    }
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let avg = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    console.log(`Min: ${min}, Max: ${max}, Avg: ${avg}`);
}

function getRandomInt(min: number, max: number) : number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function main() {
    generateRandomNumbersAndPrintStats() ;
}

main();