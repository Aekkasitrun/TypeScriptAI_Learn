"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employeeService_1 = require("./service/employeeService");
// You need to provide an array of Employee objects to the constructor
const employees = [
    { name: "Alice", department: "Engineering", salary: 75000, yearsOfService: 3 },
    { name: "Bob", department: "Marketing", salary: 65000, yearsOfService: 5 },
    { name: "Charlie", department: "Engineering", salary: 80000, yearsOfService: 2 },
    { name: "Diana", department: "Sales", salary: 70000, yearsOfService: 4 },
    { name: "Eve", department: "Engineering", salary: 85000, yearsOfService: 6 }
];
const employeeService = new employeeService_1.EmployeeService(employees);
// Example usage of the EmployeeService
employeeService.printAllResults(); // Print all results
