import { Request, Response } from "express";
import CreateSessionService from "../services/CreateSessionService";

export default class SessionController {
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body
        
            const createSession = new CreateSessionService();

            const session = await createSession.execute({ email, password });

            return res.json(session);
        } catch (error) {
            return res.json(error.message);
        }
    }
}