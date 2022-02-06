import { Request, Response } from "express";
import { container } from "tsyringe";
import ListTopHitQuestionVelmediaService from "../../../services/ListTopHitQuestionVelmediaService";

export default class TopHitQuestionVelmediaController {
    public async index(req: Request, res: Response): Promise<Response> {
        const listTopHitQuestionVelmedia = container.resolve(
            ListTopHitQuestionVelmediaService
        );

        const hitQuestion = await listTopHitQuestionVelmedia.execute();

        return res.json(hitQuestion);
    }
}