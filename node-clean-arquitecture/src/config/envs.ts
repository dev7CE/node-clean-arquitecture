// Adapter implementation.
// Objetive: avoid direct implementations of external libraries.
// Reason of change: internal refactors such as migrate to another package.
import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
}