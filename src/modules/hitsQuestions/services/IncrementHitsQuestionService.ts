import { ICreateHits } from "../domain/models/ICreateHits";
import { IHits } from "../domain/models/IHits";
import { inject, injectable } from "tsyringe";
import { IHitsQuestionsRepository } from "../domain/repositories/IHitsQuestionRepository";

@injectable()
export default class IncrementHitsQuestionService {
    constructor(
        @inject('hitsQuestionRepository')
        private hitsQuestionRepository: IHitsQuestionsRepository
    ) {}
    public async execute({ 
        userId, 
        user,
        hitsBhaskara, 
        hitsPitagoras,
        hitsVelmedia
    }: ICreateHits): Promise<IHits> {
        const userHitsQuestion = await this.hitsQuestionRepository.findUserById(userId);

        if(!userHitsQuestion) {
            const newUserHitQuestion = await this.hitsQuestionRepository.create({ 
                userId,
                user, 
                hitsBhaskara, 
                hitsPitagoras,
                hitsVelmedia,
            });

            await this.hitsQuestionRepository.save(newUserHitQuestion);

            return newUserHitQuestion;
        }

        userHitsQuestion.hitsBhaskara += hitsBhaskara;
        userHitsQuestion.hitsPitagoras += hitsPitagoras;
        userHitsQuestion.hitsVelmedia += hitsVelmedia;

        await this.hitsQuestionRepository.save(userHitsQuestion);

        return userHitsQuestion;
    }
}