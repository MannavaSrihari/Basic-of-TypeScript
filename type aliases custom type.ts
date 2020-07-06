type Combinable = number |string;
type ConversionDescriptor =  'as-numbers' | 'as-text' ;

function combine (
    input1 : Combinable, 
    input2 : Combinable,
    resultConversion:ConversionDescriptor)
    {
    let result;
    
    if( typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-numbers'){
        result = +input1 + +input2;
    }else{
        result = input1.toString()+ input2.toString();
    }
    return result;

}
const combineNumbers = combine(25, 30, 'as-numbers');

console.log(combineNumbers);

const combineStringAges = combine(25, 27, 'as-numbers');

console.log(combineStringAges);

const combineNames = combine('Max', 'Anna', 'as-text');

console.log(combineNames);