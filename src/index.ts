import { Employee } from './data_models/employee';
import { EmployeeService } from './service/employeeService';

const employees: Employee[] = [
    { name: "Alice", department: "Engineering", salary: 75000, yearsOfService: 3 },
    { name: "Bob", department: "Marketing", salary: 65000, yearsOfService: 5 },
    { name: "Charlie", department: "Engineering", salary: 80000, yearsOfService: 2 },
    { name: "Diana", department: "Sales", salary: 70000, yearsOfService: 4 },
    { name: "Eve", department: "Engineering", salary: 85000, yearsOfService: 6 }
];
const employeeService = new EmployeeService(employees);
employeeService.printAllResults(); // Print all results