import * as utility from "../util";

export class sessionOneService {
  printResultHomework1(): void {

// Exercise 1: Array Loops and Processing
// Scenario: You have an array of employee data and need to process it using different loop methods.
// javascript
// const employees = [
//     { name: "Alice", department: "Engineering", salary: 75000, yearsOfService: 3 },
//     { name: "Bob", department: "Marketing", salary: 65000, yearsOfService: 5 },
//     { name: "Charlie", department: "Engineering", salary: 80000, yearsOfService: 2 },
//     { name: "Diana", department: "Sales", salary: 70000, yearsOfService: 4 },
//     { name: "Eve", department: "Engineering", salary: 85000, yearsOfService: 6 }
// ];
// Tasks:
// Use a for loop to find the total salary of all employees
// Use forEach to print each employee's name and department
// Use filter to get all Engineering department employees
// Use map to create a new array with just names and salaries
// Use find to locate the employee with the highest salary
// Use reduce to calculate the average years of service


    const employees: Employee[] = [
      {
        name: "Alice",
        department: "Engineering",
        salary: 75000,
        yearsOfService: 3,
      },
      {
        name: "Bob",
        department: "Marketing",
        salary: 65000,
        yearsOfService: 5,
      },
      {
        name: "Charlie",
        department: "Engineering",
        salary: 80000,
        yearsOfService: 2,
      },
      { name: "Diana", department: "Sales", salary: 70000, yearsOfService: 4 },
      {
        name: "Eve",
        department: "Engineering",
        salary: 85000,
        yearsOfService: 6,
      },
    ];

    console.log("=== Employee Summary ===");
    console.log(
      `Total Salary: ${utility.getTotalSalary(employees).toLocaleString()} THB`
    );

    console.log("\n--- Name & Department ---");
    utility.logNameAndDepartment(employees);

    console.log("\n--- Engineering Employees ---");
    utility
      .getEmployeesByDepartment(employees, "Engineering")
      .forEach((emp) => console.log(`- ${emp.name} (${emp.department})`));

    console.log("\n--- Name and Salary ---");
    utility
      .getNameAndSalaryArray(employees)
      .forEach(({ name, salary }) =>
        console.log(`- ${name}: $${salary.toLocaleString()}`)
      );

    const highestPaid = utility.getHighestPaidEmployee(employees);
    console.log("\n--- Highest Paid Employee ---");
    if (highestPaid) {
      console.log(
        `${highestPaid.name} ($${highestPaid.salary.toLocaleString()})`
      );
    } else {
      console.log("No employees found.");
    }

    console.log("\n--- Average Years of Service ---");
    console.log(utility.getAverageYearsOfService(employees).toFixed(2));
  }

  printResultHomework2(): void {

// Exercise 2: Convert JavaScript to TypeScript
// Convert this JavaScript code to TypeScript with proper interfaces:
// javascript
// function processOrder(customer, items, shippingAddress) {
//     let totalAmount = 0;
    
//     for (let item of items) {
//         totalAmount += item.price * item.quantity;
//     }
    
//     const order = {
//         id: generateOrderId(),
//         customer: customer,
//         items: items,
//         shippingAddress: shippingAddress,
//         totalAmount: totalAmount,
//         status: "pending",
//         createdAt: new Date()
//     };
    
//     return order;
// }

// function generateOrderId() {
//     return Math.random().toString(36).substring(2, 15);
// }

// // Example usage:
// const customer = {
//     id: 123,
//     name: "John Doe",
//     email: "john@example.com"
// };

// const items = [
//     { productId: "abc", name: "Laptop", price: 999.99, quantity: 1 },
//     { productId: "def", name: "Mouse", price: 29.99, quantity: 2 }
// ];

// const address = {
//     street: "123 Main St",
//     city: "Any town",
//     zipCode: "12345",
//     country: "USA"
// };

// const newOrder = processOrder(customer, items, address);
// Requirements:
// Create interfaces for Customer, OrderItem, ShippingAddress, and Order
// Add proper type annotations to all function parameters and return types
// Use union types for the order status (it can be "pending", "processing", "shipped", "delivered")
// Make email optional in the Customer interface
// Ensure the code compiles without errors



    const customer: Customer = {
      id: 123,
      name: "John Doe",
      email: "john@example.com",
    };

    const items: OrderItem[] = [
      { productId: "abc", name: "Laptop", price: 999.99, quantity: 1 },
      { productId: "def", name: "Mouse", price: 29.99, quantity: 2 },
    ];

    const address: ShippingAddress = {
      street: "123 Main St",
      city: "AnyTown",
      zipCode: "12345",
      country: "USA",
    };

    const newOrder = utility.processOrder(customer, items, address);
    console.log("=== Order Summary ===");
    console.log(
      `Customer: ${newOrder.customer.name} (${newOrder.customer.email})`
    );
    console.log(
      `Shipping Address: ${newOrder.shippingAddress.street}, ${newOrder.shippingAddress.city}, ${newOrder.shippingAddress.zipCode}, ${newOrder.shippingAddress.country}`
    );
    console.log("\n--- Items ---");
    newOrder.items.forEach((item: OrderItem) => {
      console.log(
        `- ${item.name} (x${item.quantity}): $${item.price.toLocaleString()}`
      );
    });
    console.log(`\nTotal: $${newOrder.totalAmount.toLocaleString()}`);
    console.log("=====================");
  }

  testCasesHomework3(): void {

// Exercise 3: Error Handling and Type Guards
// Scenario: You're building a user registration system that needs robust validation and error handling.
// javascript
// function registerUser(userData) {
//     // Validate required fields
//     // Handle different types of errors
//     // Return success or failure response
// }

// // Test with different inputs:
// registerUser({ name: "Alice", email: "alice@example.com", age: 25 });
// registerUser({ name: "Bob" }); // Missing email
// registerUser({ name: "", email: "invalid-email", age: -5 }); // Invalid data
// registerUser(null); // Invalid input
// Your Tasks:
// Create interfaces for UserInput, ValidationError, and RegistrationResult
// Implement the registerUser function with proper TypeScript types
// Add validation logic that checks:
// All required fields are present (name, email, age)
// Name is not empty
// Email contains "@" symbol
// Age is between 13 and 120
// Use try-catch blocks to handle different error scenarios
// Return a result object that indicates success/failure with appropriate data
// Use type guards to check if the input is valid before processing
// Bonus Challenge: Create a union type for the function return value that can be either a success result (with user data) or an error result (with error details).
// Expected Return Types:
// Success: { success: true, user: RegisteredUser }
// Error: { success: false, errors: ValidationError[] }


    console.log("=== User Registration Test Cases ===");

    const testCases = [
      {
        description: "Valid user",
        input: { name: "Alice", email: "alice@example.com", age: 25 },
      },
      {
        description: "Missing email and age",
        input: { name: "Bob" },
      },
      {
        description: "Invalid data",
        input: { name: "", email: "invalid-email", age: -5 },
      },
      {
        description: "Null input",
        input: null,
      },
    ];

    testCases.forEach((test, idx) => {
      console.log(`\n--- Test Case #${idx + 1}: ${test.description} ---`);
      console.log("Input:", test.input);
      const result = utility.registerUser(test.input as any);
      console.log("Result:", result);
    });

    console.log("\n===============================");
  }
}
