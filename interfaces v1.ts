interface Catagary {
    catagaryName : string;
}

interface Student {
    studentName : string,
    studentId  : string
}

interface studentList extends Catagary, Student {
    studentDepartment: any;
    list: Array<string>;
}

let StudentDetails: studentList = {
    catagaryName : 'Electronics and TeleCommunication Engineering',
    studentName  : 'Srihari Mannava',
    studentId    :'1021',
    list : ['java','Angular','Ionic']
}

const stdName = StudentDetails.studentName;
const stdId   = StudentDetails.studentId;
const stdCat  = StudentDetails.catagaryName;

console.log('Student Name ->'+ stdName+ 'Student Id ->' +stdId+ 'Student Catagary ->' +stdCat);

console.log('Technologies :' +stdCat);