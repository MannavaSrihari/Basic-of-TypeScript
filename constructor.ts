class Department {
    name : String;
    // private employee: string [] = [];

    constructor( n: string) {
        this.name = n;
     }   
    //this
     describe(this:Department) { 
         console.log( 'Department : ' +this.name);
     }
}

const accounting = new Department('Accounting');
accounting.describe();

//this
const accountCopy = { name: 'DUMMY', describe : accounting.describe } 
accountCopy.describe();