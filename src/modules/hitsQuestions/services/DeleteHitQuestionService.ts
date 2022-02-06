import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IHitsQuestionsRepository } from "../domain/repositories/IHitsQuestionRepository";

@injectable()
export default class DeleteHitQuestionService {
    constructor(
        @inject('hitsQuestionRepository')
        private hitsQuestionRepository: IHitsQuestionsRepository
    ) {}

    public async execute(id: string): Promise<void> {
        const hitsQuestion = await this.hitsQuestionRepository.findById(id);

        if(!hitsQuestion) {
            throw new AppError('User hits not found.');
        }

        await this.hitsQuestionRepository.remove(hitsQuestion);
    }
}