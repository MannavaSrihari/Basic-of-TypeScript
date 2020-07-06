function add(n1:number, n2:number, showResult:boolean,phase:string){
    const result =n1+n2;

    if(showResult){
        console.log(phase+result)
    }else{
        return result;
    }
return n1+n2;
}

const number1=4;
const number2=5;
const printResult=true;
const resultPhrase ='Result is: ';

const result = add(number1, number2,printResult,resultPhrase);

