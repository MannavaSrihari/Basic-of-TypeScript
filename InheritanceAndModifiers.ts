class Department {
    // private readyonly id: string;
    // private name: string;
    protected employees: string[] = [];
  
    constructor(private  readonly id: string, public name: string) {
      // this.id = id;
      // this.name = n;
    }
  
    describe(this: Department) {
      console.log(`Department (${this.id}): ${this.name}`);
    }
  
    addEmployee(employee: string) {
      // validation etc 
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }

  //Inheritance
  class ITDepartment extends Department {
      admins: string[];
        constructor( id : string, admins: string[]) {
            super(id, 'IT');
            this.admins = admins
        }
  }

  class AccountingDepartment extends Department {
      constructor( id : string,  private reports: string[]) {
          super(id, 'IT');
      }

      addEmployee(name: string) { 
          if (name === 'Max') { 
              return
          }
          this.employees.push(name);
      }
      addReport(text: string) { 
          this.reports.push(text);
      }

      printReports(){ 
          console.log(this.reports);
      }
}
  const it = new ITDepartment('IT',['MAX']);
  
  it.addEmployee('Max');
  it.addEmployee('Manu');
  
  //accounting.employees[2] = 'Anna';
  
  it.describe();
  it.name = 'NEW NAME';
  it.printEmployeeInformation();

  console.log(it);
  
  const accounting = new AccountingDepartment('d2',[]);
        accounting.addEmployee('Max');
        accounting.addEmployee('Smit');
        accounting.describe();
        accounting.printEmployeeInformation();
  accounting.addReport('files');
  console.log(accounting);
  // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  
  // accountingCopy.describe();