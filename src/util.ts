import { Employee } from "./data_models/employee";


// 1. Util function to calculate total salary
export function getTotalSalary(employees: Employee[]): number {
    return employees.reduce((sum, emp) => sum + emp.salary, 0);
}

// 2. Util function to log name and department of each employee
export function logNameAndDepartment(employees: Employee[]): void {
    employees.forEach(emp => {
        console.log(`Name: ${emp.name}, Department: ${emp.department}`);
    });
}

// 3. Util function to filter employees by department
export function getEmployeesByDepartment(employees: Employee[], department: string): Employee[] {
    return employees.filter(emp => emp.department === department);
}

// 4. Util function to get array of name and salary
export function getNameAndSalaryArray(employees: Employee[]): { name: string; salary: number }[] {
    return employees.map(emp => ({ name: emp.name, salary: emp.salary }));
}

// 5. Util function to find the highest paid employee
export function getHighestPaidEmployee(employees: Employee[]): Employee | undefined {
    return employees.reduce((maxEmp, emp) => (emp.salary > (maxEmp?.salary ?? 0) ? emp : maxEmp), undefined as Employee | undefined);
}

// 6. Util function to calculate average years of service
export function getAverageYearsOfService(employees: Employee[]): number {
    if (employees.length === 0) return 0;
    const totalYears = employees.reduce((sum, emp) => sum + emp.yearsOfService, 0);
    return totalYears / employees.length;
}