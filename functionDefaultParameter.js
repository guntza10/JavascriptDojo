const calculatePayNormal = (yearSalary, bonus = 0) => {
    return yearSalary + bonus;
}

const calculatePayWithObject = (yearSalary, bonus = {
    teamBonus: 0,
    employeeBonus: 0
}) => {
    return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}

console.log("with default object");
console.log(calculatePayWithObject(22000, { teamBonus: 10000, employeeBonus: 6000 }));
console.log(calculatePayWithObject(22000));

console.log("with default parameter");
console.log(calculatePayNormal(22000, 20));
console.log(calculatePayNormal(22000));
