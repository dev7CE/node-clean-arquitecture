// If there is more tha one Datasource implementation, 
// like mongo, mysql, oracle... the file name can be 
// prefixed with Database name, 
// such as mongo.auth.datasource.impl
import { UserModel } from "../../data/mongodb";
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

            const exists = await UserModel.findOne({ email });
            
            if (exists) {
                throw CustomError.badRequest('Email already exists');
            }

            const user = await UserModel.create({
                name: name,
                email: email,
                password: password,
            });

            await user.save();

            // TODO: map response
            return new UserEntity(
                user.id,
                name,
                email,
                password,
                user.roles,
            );
        } catch (error) {
            if(error instanceof CustomError) {
                throw error;
            }

            throw CustomError.internalServerError();
        }
    }
}
