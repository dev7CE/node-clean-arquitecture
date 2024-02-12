import jwt from 'jsonwebtoken';
import { resolve } from 'path';

export class JwtAdapter {
    static async generateToken(payload: Object, duration: string = '2h'): Promise<string|null> {
        return new Promise( (resolve) => {
            // TODO: generate SEED
            jwt.sign(payload, 'SEED', { expiresIn: duration}, (err, token) => {
                if (err) {
                    return resolve(null);
                }

                resolve(token!);
            });
        });
    }

    static async validateToken<T>(token: string): Promise<T | null> {
        return new Promise( (resolve) => {
            jwt.verify(token, 'SEED', (err, decoded) => {
                if (err) {
                    return resolve(null);
                }

                resolve(decoded as T);
            });
        });
    }
}
