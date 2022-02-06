import AppError from "../../../shared/errors/AppError";
import { IHits } from "../domain/models/IHits";
import { inject, injectable } from "tsyringe";
import { IHitsQuestionsRepository } from "../domain/repositories/IHitsQuestionRepository";

@injectable()
export default class ShowHitQuestionService {
    constructor(
        @inject('hitsQuestionRepository')
        private hitsQuestionRepository: IHitsQuestionsRepository
    ) {}

    public async execute(user_id: string): Promise<IHits> {
        const hitQuestion = await this.hitsQuestionRepository.findUserById(user_id);

        if(!hitQuestion) {
            throw new AppError('This hit profile does not exist')
        }

        return hitQuestion;
    }
}