import { getCustomRepository } from "typeorm";
import { IHits } from "../domain/models/IHits";
import { HitsQuestionRepository } from "../infra/typeorm/repositories/HitsQuestionRepository";


export class ListTopHitQuestionBhaskaraService {
    public async execute(): Promise<IHits[]> {
        const hitQuestionRepository = getCustomRepository(HitsQuestionRepository);
        
        const topHitQuestion = await hitQuestionRepository.findTopBhaskara();

        return topHitQuestion
    }
}