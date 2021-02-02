class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa school"
    }
}

const student1 = new Student(12, "shuvo");
const student2 = new Student(22, "mahiya");
const student3 = new Student(26, "Bappi");
console.log(student1, student2, student3);