import { Request, Response, NextFunction } from "express";
import { JwtAdapter } from "../../config";

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
            const payload = await JwtAdapter.validateToken(token);

            if (!payload) {
                return res.status(401)
                    .json({ error: 'Invalid Bearer token'});
            }

            console.log(payload);

            next();
        } catch (error) {
            console.log(error);
            res.status(500)
                .json({ error: 'Internal server error' });
        }
    };
}
