import { LoginUserDto } from "../../dtos/auth/login-user.dto";
import { RegisterUserDto } from "../../dtos/auth/register-user-dto";
import { UserEntity } from "../../entities/user.entitity";

export abstract class AuthDatasource {
    // TODO: 
    abstract login (loginUserDto: LoginUserDto): Promise<UserEntity>

    abstract register(registerUserDto: RegisterUserDto):Promise<UserEntity>
}
