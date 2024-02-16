import { IUser } from "../..";
import { JwtAdapter } from "../../../config";
import { RegisterUserDto } from "../../dtos/auth/register-user-dto";
import { CustomError } from "../../errors/custom.error";
import { AuthRepository } from "../../repositories/auth.repository";

interface RegisterUserUseCase {
    execute(registerUserDto: RegisterUserDto): Promise<any>
}

type SignToken = (payload: Object, duration?: string) => Promise<string | null>

export class RegisterUser implements RegisterUserUseCase {
    constructor(
        private readonly authRepository: AuthRepository,
        private readonly signToken: SignToken = JwtAdapter.generateToken
    ){}

    async execute(registerUserDto: RegisterUserDto): Promise<IUser> {

        const user = await this.authRepository.register(registerUserDto);
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
