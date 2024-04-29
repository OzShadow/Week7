export function fillUniqueArray() : void {
    let numbers: number[] = [];
    while(numbers.length < 10) {
        let num = Math.floor(Math.random() * 100);
        if(!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    console.log(`First to Last\n${numbers.join(', ')}`);
    console.log(`Last to First\n${numbers.reverse().join(', ')}`);
}

function main() {
    fillUniqueArray();
}

main();