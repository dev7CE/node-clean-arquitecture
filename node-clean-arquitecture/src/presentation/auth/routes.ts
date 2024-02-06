import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDatasourceImpl, AuthRepositoryImp } from "../../infrastructure";

export class AuthRoutes {
    static get routes(): Router{
        const router = Router();

        // Inject Depedency into AuthController
        const database = new AuthDatasourceImpl();
        const authRepository = new AuthRepositoryImp(database);

        const controller = new AuthController(authRepository);

        // Controller Routes Definition
        router.post('/login', controller.loginUser);

        router.post('/register', controller.registerUser);

        return router;
    }
}
