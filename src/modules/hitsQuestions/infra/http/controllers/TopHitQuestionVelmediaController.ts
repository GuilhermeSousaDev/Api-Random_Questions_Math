import { Request, Response } from "express";
import { ListTopHitQuestionVelmediaService } from "../../../services/ListTopHitQuestionVelmediaService";

export default class TopHitQuestionVelmediaController {
    public async index(req: Request, res: Response): Promise<Response> {
        const listTopHitQuestionVelmedia = new ListTopHitQuestionVelmediaService();

        const hitQuestion = await listTopHitQuestionVelmedia.execute();

        return res.json(hitQuestion);
    }
}