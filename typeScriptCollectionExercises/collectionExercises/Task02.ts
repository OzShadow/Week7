export function intersectOfArrays() : void {
    let array1 = [5, 9, 7, 22, 15, 19, 29, 3];
    let array2 = [15, 92, 17, 12, 33, 7, 5, 75];
    let intersection = array1.filter(value => array2.includes(value));
    console.log(`The first list contains\n${array1.join(', ')}`);
    console.log(`The second list contains\n${array2.join(', ')}`);
    console.log(`The values common to both lists are\n${intersection.join(', ')}`);
}

function main() {
    intersectOfArrays();
}

main();