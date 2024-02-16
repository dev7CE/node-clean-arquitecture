// If there is more tha one Datasource implementation, 
// like mongo, mysql, oracle... the file name can be 
// prefixed with Database name, 
// such as mongo.auth.datasource.impl
import { BcryptAdapter } from "../../config";
import { UserModel } from "../../data/mongodb";
import { AuthDatasource, CustomError, LoginUserDto, RegisterUserDto, UserEntity } from "../../domain";
import { UserMapper } from "../mappers/user.mapper";

type HashFunction =  (password: string) => string;
type CompareFunction =  (password: string, hash: string) => boolean;

// In the other hand 
export class AuthDatasourceImpl implements AuthDatasource {
    constructor(
        private readonly hashPassword: HashFunction = BcryptAdapter.hash,
        private readonly comparePassword: CompareFunction = BcryptAdapter.compare,
    ){}

    async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
        const { email, password } = loginUserDto;

        try {
            // 1. Find by email
            // 2. Compare Password
            // 3. Map response to User Entity

            const userFound = await UserModel.findOne({ email });

            if (!userFound) {
                throw CustomError.badRequest('Did not match any user with providen credentials');
            }

            const passwordIsMatching = this.comparePassword(password, userFound.password);

            if(!passwordIsMatching) {
                throw CustomError.badRequest('Did not match any user with providen credentials');
            }

            return UserMapper.userEntityFromObject(userFound);
        } catch (error) {
            if(error instanceof CustomError) {
                throw error;
            }

            throw CustomError.internalServerError();
        }
    }

    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { name, email, password } = registerUserDto;

        try {
            // 1. Valid email is unique
            // 2. Password Hash
            // 3. Map response to User Entity

            const exists = await UserModel.findOne({ email });
            
            if (exists) {
                throw CustomError.badRequest('Unable to process the request');
                // Do not tell client if user exist or not. 
                // Attacker may trying to enumerate registered users.
            }

            const user = await UserModel.create({
                name: name,
                email: email,
                password: this.hashPassword(password),
            });

            await user.save();

            return UserMapper.userEntityFromObject(user);
        } catch (error) {
            if(error instanceof CustomError) {
                throw error;
            }

            throw CustomError.internalServerError();
        }
    }
}
