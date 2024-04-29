import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

export async function compareSets(): Promise<void> {
    const set1: Set<number> = new Set();
    const set2: Set<number> = new Set();

    console.log("Enter numbers for the first set (end or a negative number to stop)");
    await fillSet(set1);

    console.log("Enter numbers for the second set (end or a negative number to stop)");
    await fillSet(set2);

    const common: Set<number> = new Set([...set1].filter(x => set2.has(x)));
    const onlyInFirst: Set<number> = new Set([...set1].filter(x => !set2.has(x)));

    console.log("The common values are: " + (common.size > 0 ? Array.from(common).join(', ') : 'None'));
    console.log("The numbers only in the first set are: " + (onlyInFirst.size > 0 ? Array.from(onlyInFirst).join(', ') : 'None'));
}

async function fillSet(set: Set<number>): Promise<void> {
    let input: string;
    while (true) {
        input = await ask("Enter a number: ");
        if (input === 'end' || Number(input) < 0) {
            break;
        }
        set.add(Number(input));
    }
}

async function main(): Promise<void> {
    try {
        await compareSets();
    } catch (error) {
        console.error(error);
    } finally {
        rl.close();
    }
}

main();




