import { Request, Response } from "express";
import VerificTokenService from "../services/VerificTokenService";

export default class TokenController {
    public async index(req: Request, res: Response): Promise<Response> {
        const token = req.headers.authorization;

        const verificTokenService = new VerificTokenService();

        const verificToken = await verificTokenService.execute(token);

        return res.json(verificToken);
    }
}