// const names: Array<string> =[];

// const promise: Promise<string> =new Promise((resolve, reject) =>{

//     setTimeout(()=>{
//         resolve('i am done');
//     },2000)
// });

//constrains 
//function merge<T,U>(objA:T , objB:U){
//constrains 
//function merge<T extends string|number, U extends Object>(objA:T , objB:U){
function merge<T extends Object, U extends Object>(objA:T , objB:U){
    return Object.assign(objA, objB);
}

const mergeObj =merge({name:'Hari', Hobbies:['coading']},{age:26});
console.log(mergeObj);

//----------------

interface Lengthy{
    length: number;
}

function countDescription<T extends Lengthy>(element: T): [T, string] {
    let descriptionText= 'Got no value';
    if(element.length===1){
        descriptionText= 'Got 1 element';
    }else if(element.length > 1){
        descriptionText = 'Got ' + element.length + 'elements.';
    }
    return [element , descriptionText];
}

const desp=countDescription(['cooking', 'coading']);
console.log(desp);

//key of constants

function extactConversion<T extends Object, U extends keyof T>(obj: T, key:U){
    return 'Value :' +obj[key];
}

extactConversion({name:'Hari'}, 'name');

//Generic class 

class DataStorage<T extends string|number|boolean>{
    private data:T[]= [];

    addItem(item:T){
        this.data.push(item);
    }
    removeItem(item:T){
        if(this.data.indexOf(item) == -1){  
            return;
        }
        this.data.splice(this.data.indexOf(item),1)
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Hari');
textStorage.addItem('Gopi');
console.log(textStorage.getItems());
textStorage.removeItem('Hari');
console.log(textStorage.getItems());
// const HariObj = {name:' Hari'};
// textStorage.addItem(HariObj);
// textStorage.removeItem(HariObj);
// console.log(textStorage.getItems());

//Generics Partial

interface CourseGoal { 
    title: string;
    description: string;
    completeUntil : Date;
}

function createCourseGoal(title: string, description: string, date :Date): CourseGoal {
    let courseGoal : Partial<CourseGoal> ={};
    courseGoal.title;
    courseGoal.description =description;
    courseGoal.completeUntil =date;
    return courseGoal as CourseGoal;
}
const names : Readonly<string[]> = ['Hari','Gopi'];
// name.push('Manu');
// name.pop('');