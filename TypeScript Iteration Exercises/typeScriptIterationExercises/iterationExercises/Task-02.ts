export function printWithCommas() : void {
    let output = "";
    for(let i = 12; i >= 1; i--) {
        output += i + (i > 1 ? "," : "");
    }
    console.log(output);
}

function main() {
    printWithCommas();
}
main();