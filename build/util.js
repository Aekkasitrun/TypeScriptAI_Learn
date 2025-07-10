"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalSalary = getTotalSalary;
exports.logNameAndDepartment = logNameAndDepartment;
exports.getEmployeesByDepartment = getEmployeesByDepartment;
exports.getNameAndSalaryArray = getNameAndSalaryArray;
exports.getHighestPaidEmployee = getHighestPaidEmployee;
exports.getAverageYearsOfService = getAverageYearsOfService;
// 1. Util function to calculate total salary
function getTotalSalary(employees) {
    return employees.reduce((sum, emp) => sum + emp.salary, 0);
}
// 2. Util function to log name and department of each employee
function logNameAndDepartment(employees) {
    employees.forEach(emp => {
        console.log(`Name: ${emp.name}, Department: ${emp.department}`);
    });
}
// 3. Util function to filter employees by department
function getEmployeesByDepartment(employees, department) {
    return employees.filter(emp => emp.department === department);
}
// 4. Util function to get array of name and salary
function getNameAndSalaryArray(employees) {
    return employees.map(emp => ({ name: emp.name, salary: emp.salary }));
}
// 5. Util function to find the highest paid employee
function getHighestPaidEmployee(employees) {
    return employees.reduce((maxEmp, emp) => { var _a; return (emp.salary > ((_a = maxEmp === null || maxEmp === void 0 ? void 0 : maxEmp.salary) !== null && _a !== void 0 ? _a : 0) ? emp : maxEmp); }, undefined);
}
// 6. Util function to calculate average years of service
function getAverageYearsOfService(employees) {
    if (employees.length === 0)
        return 0;
    const totalYears = employees.reduce((sum, emp) => sum + emp.yearsOfService, 0);
    return totalYears / employees.length;
}
