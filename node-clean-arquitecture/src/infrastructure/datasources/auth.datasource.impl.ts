// If there is more tha one Datasource implementation, 
// like mongo, mysql, oracle... the file name can be 
// prefixed with Database name, 
// such as mongo.auth.datasource.impl
import { AuthDatasource, CustomError, RegisterUserDto, UserEntity } from "../../domain";

// In the other hand 
export class AuthDatasourceImpl implements AuthDatasource {
    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { name, email, password } = registerUserDto;

        try {
            // TODO:
            // 1. Valid email is unique
            // 2. Password Hash
            // 3. Map response to User Entity

            // Example of throwing Custom Error
            if (email === 'email1@domai.com') {
                throw CustomError.badRequest('Email already exists');
            }

            // Example of returning User Entity
            return new UserEntity(
                '1',
                name,
                email,
                password,
                ['ADMIN_ROLE'],
            );
        } catch (error) {
            if(error instanceof CustomError) {
                throw error;
            }

            throw CustomError.internalServerError();
        }
    }
}
