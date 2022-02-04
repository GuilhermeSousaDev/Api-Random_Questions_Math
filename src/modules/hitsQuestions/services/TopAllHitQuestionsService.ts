import { getMongoRepository } from "typeorm";
import { HitsQuestions } from "../infra/typeorm/entities/Hits";

export default class TopAllHitQuestionsService {
    public async execute() {
        const hitQuestionRepository = getMongoRepository(HitsQuestions);

        const listHitQuestions = await hitQuestionRepository.find();

        const hitQuestions = listHitQuestions.map(({ 
            id, 
            user,
            hitsBhaskara, 
            hitsPitagoras, 
            hitsVelmedia,
            createdAt, 
        }) => ({
            id, 
            user: user.name,
            userId: user.id,
            hits: hitsBhaskara + hitsPitagoras + hitsVelmedia,
            createdAt,
        }))
            .sort((a, b) => b.hits - a.hits);

        return hitQuestions;
    }
}