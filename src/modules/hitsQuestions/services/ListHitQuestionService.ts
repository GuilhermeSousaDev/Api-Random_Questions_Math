import { getMongoRepository } from "typeorm";
import { HitsQuestions } from "../typeorm/entities/Hits";

export default class ListHitQuestionService {
    public async execute(): Promise<HitsQuestions[]> {
        const hitsQuestionRepository = getMongoRepository(HitsQuestions);

        const hitsQuestions = await hitsQuestionRepository.find();
        
        return hitsQuestions;
    }
}