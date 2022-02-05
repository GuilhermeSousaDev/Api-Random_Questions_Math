import { getMongoRepository } from "typeorm";
import { IHits } from "../domain/models/IHits";
import { HitsQuestions } from "../infra/typeorm/entities/Hits";

export default class ListHitQuestionService {
    public async execute(): Promise<IHits[]> {
        const hitsQuestionRepository = getMongoRepository(HitsQuestions);

        const hitsQuestions = await hitsQuestionRepository.find();
        
        return hitsQuestions;
    }
}