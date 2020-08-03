type Admins = {
    name: string;
    privileges:string[];
}
type Employees1 = {
name: string;
startDate: Date;
}

type ElevitatedEmployees1 = Admins & Employees1;

const e2 : ElevitatedEmployees1 = {
    name : 'Max',
    privileges : ['create-server'],
    startDate : new Date()    
}

type Combinable2 = string | number;
type Numberica2 = number | Boolean;
type Universal1 = Combinable2 & Numberica2;

//overloaded functions
function addition(a:string, b:string):string;
function addition(a:string, b:number):string;
function addition(a:number, b:string):string;
function addition(a:number, b:number):number;
function addition ( a: Combinable2 , b: Combinable2){
    //type guard is if block
    if(typeof a === 'string' || typeof b ==='string'){
        return a.toString()+ b.toString();
    }
    return a+b
}

const result1 = addition(10,5);
console.log(result1);
const result2= addition('Max','Anna');
console.log(result2);

//optional chaining 

const fetchData = {
    name: 'Anna',
    id : 'A1',
    job : { title:'CEO',description: 'My own orgination'}
};

console.log(fetchData?.job?.title);

//nullish Coalishing
// we have a good feature of nullfying 

const  userInput1 = '';
//const  userInput1 = 'Hari';
//const  storedData = userInput1 || 'DEFAULT';
const  storedData = userInput1 ?? 'DEFAULT';

console.log(storedData);
