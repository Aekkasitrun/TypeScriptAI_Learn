"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalSalary = getTotalSalary;
exports.logNameAndDepartment = logNameAndDepartment;
exports.getEmployeesByDepartment = getEmployeesByDepartment;
exports.getNameAndSalaryArray = getNameAndSalaryArray;
exports.getHighestPaidEmployee = getHighestPaidEmployee;
exports.getAverageYearsOfService = getAverageYearsOfService;
exports.generateOrderId = generateOrderId;
exports.processOrder = processOrder;
exports.isUserInput = isUserInput;
exports.registerUser = registerUser;
// 1. Util function to calculate total salary
function getTotalSalary(employees) {
    let total = 0;
    for (let i = 0; i < employees.length; i++) {
        total += employees[i].salary;
    }
    return total;
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
// hw2
function generateOrderId() {
    return Math.random().toString(36).substring(2, 15);
}
function processOrder(customer, items, shippingAddress) {
    let totalAmount = 0;
    for (let item of items) {
        totalAmount += item.price * item.quantity;
    }
    const order = {
        id: generateOrderId(),
        customer,
        items,
        shippingAddress,
        totalAmount,
        status: "pending",
        createdAt: new Date()
    };
    return order;
}
//hw3
// Type guard for UserInput
function isUserInput(input) {
    return (input !== null &&
        typeof input === 'object' &&
        typeof input.name === 'string' &&
        typeof input.email === 'string' &&
        typeof input.age === 'number');
}
// Register user function
function registerUser(userData) {
    const errors = [];
    try {
        if (!isUserInput(userData)) {
            throw [{ field: 'input', message: 'Invalid input object.' }];
        }
        const { name, email, age } = userData;
        if (!name || name.trim() === '') {
            errors.push({ field: 'name', message: 'Name is required.' });
        }
        if (!email || !email.includes('@')) {
            errors.push({ field: 'email', message: 'Valid email is required.' });
        }
        if (typeof age !== 'number' || age < 13 || age > 120) {
            errors.push({ field: 'age', message: 'Age must be between 13 and 120.' });
        }
        if (errors.length > 0) {
            return { success: false, errors };
        }
        const registeredUser = Object.assign(Object.assign({}, userData), { id: Math.random().toString(36).slice(2, 10) });
        return { success: true, user: registeredUser };
    }
    catch (err) {
        return {
            success: false,
            errors: Array.isArray(err) ? err : [{ field: 'input', message: 'Unknown error.' }],
        };
    }
}
