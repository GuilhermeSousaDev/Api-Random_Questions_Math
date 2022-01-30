import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { HitsQuestionRepository } from "../typeorm/repositories/HitsQuestionRepository";
import { HitsQuestions } from "../typeorm/entities/Hits"

export default class ShowHitQuestionService {
    public async execute(id: string): Promise<HitsQuestions> {
        const hitsQuestionRepository = getCustomRepository(HitsQuestionRepository);

        const hitQuestion = await hitsQuestionRepository.findById(id);

        if(!hitQuestion) {
            throw new AppError('This hit profile does not exist')
        }

        return hitQuestion;
    }
}