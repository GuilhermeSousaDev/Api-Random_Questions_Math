import { getCustomRepository } from "typeorm";
import { HitsQuestions } from "../infra/typeorm/entities/Hits";
import { HitsQuestionRepository } from "../infra/typeorm/repositories/HitsQuestionRepository";

export class ListTopHitQuestionPitagorasService {
    public async execute(): Promise<HitsQuestions[]> {
        const hitQuestionRepository = getCustomRepository(HitsQuestionRepository);

        const topHitQuestion = await hitQuestionRepository.findTopPitagoras();
        
        return topHitQuestion;
    }
}