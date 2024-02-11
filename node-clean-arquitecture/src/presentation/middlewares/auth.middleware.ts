import { Request, Response, NextFunction } from "express";

export class AuthMiddleware {
    static validateJWT = async (req: Request, res: Response, next: NextFunction) => {
        const authorization = req.header('Authorization');

        if (!authorization) {
            return res.status(400)
                .json({ error: 'No token provided'});
        }

        if (!authorization.startsWith('Bearer')) {
            return res.status(401)
                .json({ error: 'Invalid Bearer token'});
        }

        const token = authorization.split(' ').at(1) || '';

        try {
            // TODO: Get payload from JwtAdapter

            console.log(token);

            next();
        } catch (error) {
            console.log(error);
            res.status(500)
                .json({ error: 'Internal server error' });
        }
    };
}
