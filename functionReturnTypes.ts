
//type Script by default it will indentify the return type, we can also expicitly write the return types

function add(n1: number, n2: number): number
 {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result : '+num);
}

printResult(add(5,2));


//let someValue: undefined;