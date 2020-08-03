type Admin = {
    name: string;
    privileges:string[];
}
type Employee1 = {
name: string;
startDate: Date;
}

type ElevitatedEmployee = Admin & Employee1;

const e1 : ElevitatedEmployee ={
    name : 'Max',
    privileges : ['create-server'],
    startDate : new Date()    
}

type Combinable1 = string | number;
type Numberical = number | Boolean;
type Universal = Combinable1 & Numberical;

function addition ( a: Combinable1 , b: Combinable1){
    //type guard is if block
    if(typeof a === 'string' || typeof b ==='string'){
        return a.toString()+ b.toString();
    }
    return a+b
}

type unKnownEmployee = Employee1 | Admin;

function printEmployeeInformation (emp: unKnownEmployee) {
    console.log('Name :' +emp.name);
    //type guard
    if ('privileges' in emp){
        console.log('Privileges : '+emp.privileges)
    }
    if('startDate' in emp){
        console.log('StartDate : '+emp.startDate);
    }
}

printEmployeeInformation({name: 'Anu', startDate : new Date()});

class Car {
    drive(){
        console.log('Driving...')
    }
}
class Truck{
    drive(){
        console.log('Driving Truck...')
    }
    loadCargo(amt: number){
        console.log('amount :' +amt);
    }
}
 type Vehicle = Car | Truck;

 const v1= new Car();
 const v2= new Truck();

 function useVehicle (vehicle: Vehicle){
     vehicle.drive();
     // typeguard 
     if( vehicle instanceof Truck){
        vehicle.loadCargo(1000)    
    }
 }
 useVehicle(v1);
 useVehicle(v2);
//descriment unions types

interface Bird{
    type: 'Bird';
    flyingSpeed: number;
}
interface Hourse{ 
    type: 'Hourse';
    runningspeed: number;
}

type Animals = Bird | Hourse;

function animalSpeed( animal: Animals){
    let speed;
    switch(animal.type) {
        case "Bird" :
            speed = animal.flyingSpeed;
            break;
            case "Hourse":
                speed = animal.runningspeed;
    }
    console.log('Animal Speed : '+speed);
}

animalSpeed({type: 'Bird', flyingSpeed:25});

//index properies :

interface ErrorContainer {
    //{ email: 'Not a valid Email, username: 'Must start with Capital letter} 
    // developer didn't know which filed it has to take then go with properties  
    [prop: string]: string;
}

const errorBag : ErrorContainer = {
    email: 'Not a valid Email',
    userName: 'Must start with Capital character !'
};



