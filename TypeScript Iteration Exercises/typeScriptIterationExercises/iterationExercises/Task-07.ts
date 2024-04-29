export function rollDice() : void {
    let total = getRandomInt(1, 6) + getRandomInt(1, 6);
    let guess = 0;
    let tries = 0;
    while(guess !== total) {
        guess = Number(prompt("What do you think the total of two six-sided die will be?"));
        tries++;
        if(guess !== total) {
            console.log(`The total was ${total}. Try again!`);
            total = getRandomInt(1, 6) + getRandomInt(1, 6);
        }
    }
    console.log(`The total was ${total}. Congratulations! It took you ${tries} tries to guess successfully.`);
}

function getRandomInt(min: number, max: number) : number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function main() {
        rollDice();
}

main();