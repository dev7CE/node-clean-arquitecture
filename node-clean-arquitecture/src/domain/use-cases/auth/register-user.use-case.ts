import { RegisterUserDto } from "../../dtos/auth/register-user-dto";
import { AuthRepository } from "../../repositories/auth.repository";

interface RegisterUserUseCase {
    execute(registerUserDto: RegisterUserDto): Promise<any>
}

interface UserToken {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
    };
}

export class RegisterUser implements RegisterUserUseCase {
    constructor(
        private readonly authRepository: AuthRepository,
    ){}

    async execute(registerUserDto: RegisterUserDto): Promise<UserToken> {

        const user = await this.authRepository.register(registerUserDto);
        const token = '';

        return {
            token: token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            }
        };
    }
}
