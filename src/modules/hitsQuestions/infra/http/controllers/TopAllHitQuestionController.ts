import { Request, Response } from "express";
import { container } from "tsyringe";
import TopAllHitQuestionsService from "../../../services/TopAllHitQuestionsService";

export default class TopAllHitQuestionController {
    public async index(req: Request, res: Response): Promise<Response> {
        const listTopHitQuestion = container.resolve(TopAllHitQuestionsService);

        const hitQuestion = await listTopHitQuestion.execute();

        return res.json(hitQuestion);
    }
}