import { Request, Response } from "express";
import TopAllHitQuestionsService from "../../../services/TopAllHitQuestionsService";

export default class TopAllHitQuestionController {
    public async index(req: Request, res: Response): Promise<Response> {
        const listTopHitQuestion = new TopAllHitQuestionsService();

        const hitQuestion = await listTopHitQuestion.execute();

        return res.json(hitQuestion);
    }
}