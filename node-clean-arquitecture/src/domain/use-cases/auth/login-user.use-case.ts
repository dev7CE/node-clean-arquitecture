import { JwtAdapter } from "../../../config";
import { LoginUserDto } from "../../dtos/auth/login-user.dto";
import { CustomError } from "../../errors/custom.error";
import { AuthRepository } from "../../repositories/auth.repository";

interface LoginUserUserCase {
    execute(loginUserDto: LoginUserDto): Promise<any>
}

interface User {
    user: {
        id: string;
        name: string;
        email: string;
    },
    token: string;
}

type SignToken = (payload: Object, duration?: string) => Promise<string | null>

export class LoginUser implements LoginUserUserCase {
    constructor (
        private readonly authRepository: AuthRepository,
        private readonly signToken: SignToken = JwtAdapter.generateToken
    ){}

    async execute (loginUserDto: LoginUserDto): Promise<User> {
        const user = await this.authRepository.login(loginUserDto);

        const token = await this.signToken({ id: user.id }, '2h');

        if(!token) {
            throw CustomError.internalServerError('Error generating token');
        }

        return {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
            token: token,
        };
    }
}
