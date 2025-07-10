interface UserInput {
    name: string;
    email: string;
    age: number;
}

interface RegisteredUser extends UserInput {
    id: string;
}

interface ValidationError {
    field: keyof UserInput | 'input';
    message: string;
}

type RegistrationResult =
    | { success: true; user: RegisteredUser }
    | { success: false; errors: ValidationError[] };
