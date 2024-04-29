export function printWithTabs() : void {
    let output = "";
    for(let i = 1; i <= 12; i++) {
        output += i + "\t";
    }
    console.log(output);
}

function main() {
    printWithTabs();
}

main();