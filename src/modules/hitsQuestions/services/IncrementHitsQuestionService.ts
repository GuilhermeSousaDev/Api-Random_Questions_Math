import { getCustomRepository } from "typeorm";
import { HitsQuestions } from "../infra/typeorm/entities/Hits";
import { HitsQuestionRepository } from "../infra/typeorm/repositories/HitsQuestionRepository";

interface IRequest {
    user: {
        id: string;
        name: string;
    };
    hitsBhaskara: number;
    hitsPitagoras: number;
    hitsVelmedia: number;
}

export default class IncrementHitsQuestionService {
    public async execute({ 
        user, 
        hitsBhaskara, 
        hitsPitagoras,
        hitsVelmedia
    }: IRequest): Promise<HitsQuestions> {
        
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