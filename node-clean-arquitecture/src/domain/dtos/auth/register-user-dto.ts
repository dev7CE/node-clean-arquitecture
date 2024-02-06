import { Validators } from "../../../config";

export class RegisterUserDto {
    // Avoid use of constructor directly
    private constructor(
        public name: string,
        public email: string,
        public password: string,
    )
    {}

    // Expected: json, body, map
    // Returns Custom object|array. Depends of dev requirements. 
    static create(object: {[key: string]: any }): [string?, RegisterUserDto?] {
        const { name, email, password } = object;

        if (!name) return ['Missing name'];
        if (!email) return ['Missing email'];
        if (!Validators.email.test(email)) return ['Email is not valid'];
        if (!password) return ['Missing password'];
        if (password.length < 6) return ['Password too short'];

        return [
            undefined,
            new RegisterUserDto(name, email.toLowerCase(), password)
        ];
    }
}
