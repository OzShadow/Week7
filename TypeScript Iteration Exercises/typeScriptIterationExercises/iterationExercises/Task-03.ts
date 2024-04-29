export function halveNumbers() : void {
    let num = 1.0;
    while(num >= 0.001) {
        console.log(num);
        num /= 2;
    }
}

function main() {
    halveNumbers();
}

main();