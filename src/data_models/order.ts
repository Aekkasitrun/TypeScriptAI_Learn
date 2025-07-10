interface Customer {
    id: number;
    name: string;
    email?: string;
}

interface OrderItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
}

interface ShippingAddress {
    street: string;
    city: string;
    zipCode: string;
    country: string;
}

type OrderStatus = "pending" | "processing" | "shipped" | "delivered";

interface Order {
    id: string;
    customer: Customer;
    items: OrderItem[];
    shippingAddress: ShippingAddress;
    totalAmount: number;
    status: OrderStatus;
    createdAt: Date;
}
