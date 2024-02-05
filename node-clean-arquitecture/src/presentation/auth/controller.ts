import { Request, Response } from 'express';
export class AuthController {
    //DI
    constructor () {}

    registerUser = (req: Request, res: Response) => {
        res.json('POST Register');
    }

    loginUser = (req: Request, res: Response) => {
        res.json('POST Login');
    }
};
