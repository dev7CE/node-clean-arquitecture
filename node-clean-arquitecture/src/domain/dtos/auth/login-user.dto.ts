export class LoginUserDto {
    // Initial properties required
    private constructor(
        public email: string,
        public password: string,
    ) 
    {}

    // TODO: implement create() method with validation 
}
