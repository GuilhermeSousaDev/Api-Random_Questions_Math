import { Request, Response } from "express";
import { container } from "tsyringe";
import CustomListHitQuestionService from "../../../services/CustomListHitQuestionService";

export default class CustomHitsQuestionController {
    public async index(req: Request, res: Response): Promise<Response> {
        const limit = Number(req.query.limit);
        const offset = Number(req.query.offset);

        const customListHitQuestionService = container.resolve(CustomListHitQuestionService);

        const hitsQuestions = await customListHitQuestionService.execute({ 
            limit, 
            offset 
        });

        return res.json(hitsQuestions);
    }
}