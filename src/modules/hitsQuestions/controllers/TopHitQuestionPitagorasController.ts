import { Request, Response } from "express";
import { ListTopHitQuestionPitagorasService } from "../services/ListTopHitQuestionPitagorasService";

export default class TopHitQuestionPitagorasController {
    public async index(req: Request, res: Response): Promise<Response> {
        const listTopHitQuestionPitagoras = new ListTopHitQuestionPitagorasService();

        const hitQuestion = await listTopHitQuestionPitagoras.execute();

        return res.json(hitQuestion);
    }
}