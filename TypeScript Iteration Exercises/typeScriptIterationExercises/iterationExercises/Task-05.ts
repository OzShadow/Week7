export function generateRandomNumbersAndPrintLowest() : void {
    let numbers: number[] = [];
    for(let i = 0; i < 10; i++) {
        numbers.push(getRandomInt(0, 50));
    }
    console.log(Math.min(...numbers));
}

function getRandomInt(min: number, max: number) : number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function main() {
        generateRandomNumbersAndPrintLowest();
}

main();