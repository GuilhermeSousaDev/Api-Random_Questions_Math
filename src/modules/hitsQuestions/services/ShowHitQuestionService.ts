import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { HitsQuestionRepository } from "../infra/typeorm/repositories/HitsQuestionRepository";
import { HitsQuestions } from "../infra/typeorm/entities/Hits"

export default class ShowHitQuestionService {
    public async execute(user_id: string): Promise<HitsQuestions> {
        const hitsQuestionRepository = getCustomRepository(HitsQuestionRepository);

        const hitQuestion = await hitsQuestionRepository.findUserById(user_id);

        if(!hitQuestion) {
            throw new AppError('This hit profile does not exist')
        }

        return hitQuestion;
    }
}