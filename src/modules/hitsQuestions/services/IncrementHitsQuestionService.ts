import { getCustomRepository } from "typeorm";
import { ICreateHits } from "../domain/models/ICreateHits";
import { IHits } from "../domain/models/IHits";
import { HitsQuestionRepository } from "../infra/typeorm/repositories/HitsQuestionRepository";

export default class IncrementHitsQuestionService {
    public async execute({ 
        user, 
        hitsBhaskara, 
        hitsPitagoras,
        hitsVelmedia
    }: ICreateHits): Promise<IHits> {
        
        const hitsQuestionRepository = getCustomRepository(HitsQuestionRepository);

        const userHitsQuestion = await hitsQuestionRepository.findUserById(user.id);

        if(!userHitsQuestion) {
            const newUserHitQuestion = hitsQuestionRepository.create({ 
                user, 
                hitsBhaskara, 
                hitsPitagoras,
                hitsVelmedia
            })

            await hitsQuestionRepository.save(newUserHitQuestion);

            return newUserHitQuestion;
        }

        userHitsQuestion.hitsBhaskara += hitsBhaskara;
        userHitsQuestion.hitsPitagoras += hitsPitagoras;
        userHitsQuestion.hitsVelmedia += hitsVelmedia;

        await hitsQuestionRepository.save(userHitsQuestion);

        return userHitsQuestion;
    }
}