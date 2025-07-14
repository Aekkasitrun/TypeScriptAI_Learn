
// 1. Util function to calculate total salary
export function getTotalSalary(employees: Employee[]): number {
    let total = 0;
    for (let i = 0; i < employees.length; i++) {
        total += employees[i].salary;
    }
    return total;
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

// hw2
export function generateOrderId(): string {
    return Math.random().toString(36).substring(2, 15);
}

export function processOrder(
    customer: Customer,
    items: OrderItem[],
    shippingAddress: ShippingAddress
): Order {
    let totalAmount = 0;

    for (let item of items) {
        totalAmount += item.price * item.quantity;
    }

    const order: Order = {
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
export function isUserInput(input: any): input is UserInput {
    return (
        input !== null &&
        typeof input === 'object' &&
        typeof input.name === 'string' &&
        typeof input.email === 'string' &&
        typeof input.age === 'number'
    );
}

// Register user function
export function registerUser(userData: any): RegistrationResult {
    const errors: ValidationError[] = [];

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

        const registeredUser: RegisteredUser = {
            ...userData,
            id: Math.random().toString(36).slice(2, 10),
        };

        return { success: true, user: registeredUser };
    } catch (err) {
        return {
            success: false,
            errors: Array.isArray(err) ? err : [{ field: 'input', message: 'Unknown error.' }],
        };
    }
}
