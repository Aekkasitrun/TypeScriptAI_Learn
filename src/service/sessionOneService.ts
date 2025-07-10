import * as utility from "../util";

export class sessionOneService {
  printResultHomework1(): void {
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
