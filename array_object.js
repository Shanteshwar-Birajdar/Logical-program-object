var employees = [
    {
        id : 1,
        name : "JOhn Doe",
        position : "Developer",
        salary : 50000
    }
];
function updateEmployeeSalary (id , newSalary){
    for (var index = 0; index < employees.length; index++) {
        if (employees[index].id == id) {
            employees[index].salary = newSalary;
            return;
        }
    }
}
updateEmployeeSalary(1, 60000);
console.table(employees);
