  class Student {
    // id : number;
    // name: string;
    subjects:string[] = [];

    constructor(public id: number, public name: string) {
    //     this.id = id;
    //     this.name = name;
     }
        //method    
        StudentDescription(){
            //string literal 
            console.log(`Students : (${this.id}: ${this.name})`);
           // console.log("Student Id : "+this.id+ "Student Name : "+this.name);
        }
        subjectAdded(subject:string){
            this.subjects.push(subject);
        }
        subjectsTitles(){
            console.log(this.subjectAdded.length);
            console.log(this.subjects);
        }

  }

 const studentDetails = new Student(102,'Hari');
 console.log(studentDetails);
 studentDetails.StudentDescription();

studentDetails.subjectAdded('English');
studentDetails.subjectAdded('Maths');
studentDetails.subjectsTitles();