var student = {
    name : "Rohit Sharma",
    sclass : "VI",
    rollno : 101
};

console.log("Before deleting rollno");
console.log(student);
delete student.rollno;
console.log("After deleting rollno");
console.log(student);
