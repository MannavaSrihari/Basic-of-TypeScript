//annomesous function with interfaces
interface AddFn {
    (a:number,b:number):number;
}

let addElem : AddFn;

addElem = (n1:number, n2:number)=>{
    return n1+n2;
};

interface Named{
    readonly name?:string;
    //optional paramater with ?
    outputParam?: string;
}
interface Greatable extends Named {
    greet(phrase: string): void;
}

class Person implements Greatable {
    name?: string;
    age:number = 26;
    constructor(name?: string){
        if(name){
        this.name = name;
        }
    }
    greet(phrase: string){
        if(this.name){
            console.log(phrase+ ' ' + this.name)
        }
        else{
            console.log('Hi..!');
        }
    }
}

let user1 : Greatable;
user1 =new Person();
//user1 = new Person('Max');
user1.greet('Hi there - welcome');
console.log(user1);