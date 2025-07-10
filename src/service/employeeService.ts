import { Employee } from "../data_models/employee";
import * as utility from "../util";

export class EmployeeService {

    private employees: Employee[]

    constructor(employees: Employee[]) {
        this.employees = employees
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

    printAllResults(): void {
        const employees = this.employees;
        console.log("=== Employee Summary ===")
        console.log(`Total Salary: ${utility.getTotalSalary(employees).toLocaleString()} THB`);

        console.log("\n--- Name & Department ---")
        utility.logNameAndDepartment(employees);

        console.log("\n--- Engineering Employees ---")
        utility.getEmployeesByDepartment(employees, "Engineering").forEach(emp =>
            console.log(`- ${emp.name} (${emp.department})`)
        );

        console.log("\n--- Name and Salary ---");
        utility.getNameAndSalaryArray(employees).forEach(({ name, salary }) =>
            console.log(`- ${name}: $${salary.toLocaleString()}`)
        );

        const highestPaid = utility.getHighestPaidEmployee(employees)
        console.log("\n--- Highest Paid Employee ---")
        if (highestPaid) {
            console.log(`${highestPaid.name} ($${highestPaid.salary.toLocaleString()})`);
        } else {
            console.log("No employees found.")
        }

        console.log("\n--- Average Years of Service ---")
        console.log(utility.getAverageYearsOfService(employees).toFixed(2))
    }
}

