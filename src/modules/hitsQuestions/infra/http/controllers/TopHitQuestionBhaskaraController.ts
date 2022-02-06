import { Request, Response } from "express";
import { container } from "tsyringe";
import ListTopHitQuestionBhaskaraService from "../../../services/ListTopHitQuestionBhaskaraService";

export default class TopHitQuestionBhaskaraController {
    public async index(req: Request, res: Response): Promise<Response> {
        const listTopHitQuestionBhasakara = container.resolve(
            ListTopHitQuestionBhaskaraService
        );

        const hitQuestion = await listTopHitQuestionBhasakara.execute();

        return res.json(hitQuestion);
    }
}