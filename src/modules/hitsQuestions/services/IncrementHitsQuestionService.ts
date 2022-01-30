import { getCustomRepository } from "typeorm";
import { User } from "../../users/typeorm/entities/User";
import { HitsQuestions } from "../typeorm/entities/Hits";
import { HitsQuestionRepository } from "../typeorm/repositories/HitsQuestionRepository";

interface IRequest {
    user: {
        id: string;
        name: string;
    };
    userId: string;
    hitsBhaskara: number;
    hitsPitagoras: number;
    hitsVelmedia: number;
}

export default class IncrementHitsQuestionService {
    public async execute({ 
        user, 
        userId,
        hitsBhaskara, 
        hitsPitagoras,
        hitsVelmedia
    }: IRequest): Promise<HitsQuestions> {
        
        const hitsQuestionRepository = getCustomRepository(HitsQuestionRepository);

        const userHitsQuestion = await hitsQuestionRepository.findUserById(user.id);

        if(!userHitsQuestion) {
            const newUserHitQuestion = hitsQuestionRepository.create({ 
                user, 
                userId,
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