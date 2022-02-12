import { Request, Response } from "express";
import { container } from "tsyringe";
import DeleteHitQuestion from "../../../services/DeleteHitQuestionService";
import IncrementHitsQuestionService from "../../../services/IncrementHitsQuestionService";
import ListHitQuestionService from "../../../services/ListHitQuestionService";
import ShowHitQuestionService from "../../../services/ShowHitQuestionService";

export default class HitsQuestionController {
    public async index(req: Request, res: Response): Promise<Response> {
        const listHitQuestionService = container.resolve(ListHitQuestionService);

        const hitsQuestions = await listHitQuestionService.execute();

        return res.json(hitsQuestions);
    }

    public async show(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params

            const showHitQuestion = container.resolve(ShowHitQuestionService);

            const hitQuestion = await showHitQuestion.execute(id);

            return res.json(hitQuestion);
        } catch (error) {
            return res.json(error.message);
        }
    }

    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const { hitsBhaskara, hitsPitagoras, hitsVelmedia } = req.body

            const user = req.user;

            const userId = req.user.id;
            
            const incrementOrCreate = container.resolve(IncrementHitsQuestionService);

            const userHitQuestion = await incrementOrCreate.execute({ 
                userId,
                user,
                hitsBhaskara, 
                hitsPitagoras,
                hitsVelmedia
            });

            return res.json(userHitQuestion);
        } catch (error) {
            return res.json(error.message);
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const deleteHitQuestion = container.resolve(DeleteHitQuestion);

        await deleteHitQuestion.execute(id);

        return res.json({ message: "Deletado com Sucesso" });
    }
}