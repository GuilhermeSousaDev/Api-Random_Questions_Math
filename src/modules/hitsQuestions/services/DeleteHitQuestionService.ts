import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { HitsQuestionRepository } from "../typeorm/repositories/HitsQuestionRepository";

export default class DeleteHitQuestion {
    public async execute(id: string): Promise<void> {
        const hitsQuestionRepository = getCustomRepository(HitsQuestionRepository);

        const hitsQuestion = await hitsQuestionRepository.findById(id);

        if(!hitsQuestion) {
            throw new AppError('User hits not found.')
        }

        await hitsQuestionRepository.remove(hitsQuestion);
    }
}