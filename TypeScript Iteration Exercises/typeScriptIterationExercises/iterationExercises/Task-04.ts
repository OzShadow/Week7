function getRandomInt(min: number, max: number) : number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

export function generateRandomNumbers() : void {
    let numbers: number[] = [];
    for(let i = 0; i < 10; i++) {
        numbers.push(getRandomInt(0, 50));
    }
    console.log(numbers);
}

function main() {
    generateRandomNumbers();
}
main();