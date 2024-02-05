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
        
        return [];
    }
}
