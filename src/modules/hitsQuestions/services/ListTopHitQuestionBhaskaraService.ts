import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../users/typeorm/repositories/UserEntity";
import { HitsQuestions } from "../typeorm/entities/Hits";
import { HitsQuestionRepository } from "../typeorm/repositories/HitsQuestionRepository";


export class ListTopHitQuestionBhaskaraService {
    public async execute(): Promise<HitsQuestions[]> {
        const hitQuestionRepository = getCustomRepository(HitsQuestionRepository);
        
        const topHitQuestion = await hitQuestionRepository.findTopBhaskara();

        return topHitQuestion
    }
}