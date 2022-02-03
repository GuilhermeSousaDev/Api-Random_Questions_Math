import { JwtPayload, verify } from "jsonwebtoken";
import auth from "../../../config/auth";

interface IPayload {
    tokenVerified: string | JwtPayload;
    token: string;
}

export default class VerificTokenService {
    public async execute(token: string): Promise<IPayload> {
        const tokenVerified = verify(token, auth.secret);

        return {
            tokenVerified,
            token,
        };
    }
}