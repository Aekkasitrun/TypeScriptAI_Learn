"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const utility = __importStar(require("../util"));
class EmployeeService {
    constructor(employees) {
        this.employees = employees;
    }
    // getTotalSalary(): number {
    //     return utility.getTotalSalary(this.employees)
    // }
    // logNameAndDepartment(): void {
    //     utility.logNameAndDepartment(this.employees)
    // }
    // getEmployeesByDepartment(department: string): Employee[] {
    //     return utility.getEmployeesByDepartment(this.employees, department)
    // }
    // getNameAndSalaryArray(): { name: string; salary: number }[] {
    //     return utility.getNameAndSalaryArray(this.employees)
    // }
    // getHighestPaidEmployee(): Employee | undefined {
    //     return utility.getHighestPaidEmployee(this.employees)
    // }
    // getAverageYearsOfService(): number {
    //     return utility.getAverageYearsOfService(this.employees)
    // }
    printAllResults() {
        const employees = this.employees;
        console.log("=== Employee Summary ===");
        console.log(`Total Salary: ${utility.getTotalSalary(employees).toLocaleString()} THB`);
        console.log("\n--- Name & Department ---");
        utility.logNameAndDepartment(employees);
        console.log("\n--- Engineering Employees ---");
        utility.getEmployeesByDepartment(employees, "Engineering").forEach(emp => console.log(`- ${emp.name} (${emp.department})`));
        console.log("\n--- Name and Salary ---");
        utility.getNameAndSalaryArray(employees).forEach(({ name, salary }) => console.log(`- ${name}: $${salary.toLocaleString()}`));
        const highestPaid = utility.getHighestPaidEmployee(employees);
        console.log("\n--- Highest Paid Employee ---");
        if (highestPaid) {
            console.log(`${highestPaid.name} ($${highestPaid.salary.toLocaleString()})`);
        }
        else {
            console.log("No employees found.");
        }
        console.log("\n--- Average Years of Service ---");
        console.log(utility.getAverageYearsOfService(employees).toFixed(2));
    }
}
exports.EmployeeService = EmployeeService;
