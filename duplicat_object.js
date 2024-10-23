var students = [
    { id : 1, name: 'John Doe'},
    { id : 2, name: 'Jane Smith'},
    { id : 1, name: 'John Doe'},
    { id : 3, name: 'Samuel Green'},
    { id : 2, name: 'Jane Smith'},
]
function removeDuplicates (arr){
    return arr.filter((student, index, self) => 
    index === self.findIndex((t) => (
        t.id === student.id && t.name === student.name)
    ));
}
var uniqueStudents = removeDuplicates(students);
console.table(uniqueStudents);
