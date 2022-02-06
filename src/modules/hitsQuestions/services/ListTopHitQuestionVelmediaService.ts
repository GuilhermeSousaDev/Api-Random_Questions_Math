import { IHits } from "../domain/models/IHits";
import { inject, injectable } from "tsyringe";
import { IHitsQuestionsRepository } from "../domain/repositories/IHitsQuestionRepository";

@injectable()
export default class ListTopHitQuestionVelmediaService {
    constructor(
        @inject('hitsQuestionRepository')
        private hitsQuestionRepository: IHitsQuestionsRepository
    ) {}

    public async execute(): Promise<IHits[]> {
        const topHitQuestion = await this.hitsQuestionRepository.findTopVelmedia();
        
        return topHitQuestion;
    }
}