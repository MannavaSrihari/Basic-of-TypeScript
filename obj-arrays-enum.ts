
enum  Role {ADMIN, READ_ONLY, AUTHER };

const person ={
    name :'Srihari Mannava',
    age : 26,
    hobbies : ['Sports','Cooking'],
    role:Role.ADMIN
}

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby);
}

if(person.role === Role.ADMIN){
    console.log('role is admin..!!!');
}