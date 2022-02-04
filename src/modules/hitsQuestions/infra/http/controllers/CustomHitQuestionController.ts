import { Request, Response } from "express";
import CustomListHitQuestionService from "../../../services/CustomListHitQuestionService";

export default class CustomHitsQuestionController {
    public async index(req: Request, res: Response): Promise<Response> {
        const limit = Number(req.query.limit);
        const offset = Number(req.query.offset);

        const customListHitQuestionService = new CustomListHitQuestionService();

        const hitsQuestions = await customListHitQuestionService.execute({ 
            limit, 
            offset 
        });

        return res.json(hitsQuestions);
    }
}