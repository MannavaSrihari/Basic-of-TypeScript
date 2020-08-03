class Employee{
data: string ='Hello world';
static id: number = 2020;
student:string[]= [];

static createEmployee(name: string){
  return {name : name};
}

get dataName(){
    return this.data;
}
set dataName(value: string){
    this.student.push(value);
}

}
const employee = new Employee();
console.log(employee.dataName);
console.log(employee.dataName = 'Srihari');

//static 
const employee1 =Employee.createEmployee('Gopi');
console.log(employee1, Employee.id);
// console.log(employee);
//const employeeProfile = new EmployeeDetails(102,'Hyderabad');
//console.log(employeeProfile);