import { inject, injectable } from "tsyringe";
import { IFindAllHits } from "../domain/models/IFindAllHits";
import { IHitsQuestionsRepository } from "../domain/repositories/IHitsQuestionRepository";

@injectable()
export default class TopAllHitQuestionsService {
    constructor(
        @inject('hitsQuestionRepository')
        private hitsQuestionRepository: IHitsQuestionsRepository
    ) {}

    public async execute(): Promise<IFindAllHits[]> {
        const hitQuestions = this.hitsQuestionRepository.findAll();

        return hitQuestions;
    }
}