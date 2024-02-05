import { Router } from "express";

export class AuthRoutes {
    static get routes(): Router{
        const router = Router();

        // Controller Routes Definition
        router.post('/login', (req, res) => {
            res.json('POST Login');
        });

        router.post('/register', (req, res) => {
            res.json('POST Register');
        });

        return router;
    }
}
