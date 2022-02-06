import { Request, Response } from "express";
import { container } from "tsyringe";
import ListTopHitQuestionPitagorasService from "../../../services/ListTopHitQuestionPitagorasService";

export default class TopHitQuestionPitagorasController {
    public async index(req: Request, res: Response): Promise<Response> {
        const listTopHitQuestionPitagoras = container.resolve(
            ListTopHitQuestionPitagorasService
        );

        const hitQuestion = await listTopHitQuestionPitagoras.execute();

        return res.json(hitQuestion);
    }
}