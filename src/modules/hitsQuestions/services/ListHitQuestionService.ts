import { inject, injectable } from "tsyringe";
import { IHits } from "../domain/models/IHits";
import { IHitsQuestionsRepository } from "../domain/repositories/IHitsQuestionRepository";

@injectable()
export default class ListHitQuestionService {
    constructor(
        @inject('hitsQuestionRepository')
        private hitsQuestionRepository: IHitsQuestionsRepository
    ) {}

    public async execute(): Promise<IHits[]> {
        const hitsQuestions = await this.hitsQuestionRepository.find();
        
        return hitsQuestions;
    }
}