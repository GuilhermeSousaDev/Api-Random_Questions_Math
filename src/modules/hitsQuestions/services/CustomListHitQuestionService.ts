import AppError from "../../../shared/errors/AppError";
import { IHits } from "../domain/models/IHits";
import { inject, injectable } from "tsyringe";
import { IHitsQuestionsRepository } from "../domain/repositories/IHitsQuestionRepository";

interface IRequest {
    offset: number,
    limit: number;
}

interface IResponse {
    hitsQuestions: IHits[];
    next?: string;
    prev?: string;
}

@injectable()
export default class CustomListHitQuestionService {
    constructor(
        @inject('hitsQuestionRepository')
        private hitsQuestionRepository: IHitsQuestionsRepository
    ) {}

    public async execute({ limit, offset }: IRequest): Promise<IResponse> {
        const hitsQuestions = await this.hitsQuestionRepository.findWithOffsetAndLimit({
            limit,
            offset
        })

        const [, hitQuestionDataQuantity] = await this.hitsQuestionRepository.findAndCount()

        let response: IResponse = {
            hitsQuestions: hitsQuestions,
        }

        if(offset <= 0 || limit <= 0) {
            throw new AppError('Choose a number more than 0');
        }

        if(offset > hitQuestionDataQuantity) {
            throw new AppError('Extended data limit');
        }

        if(offset > 10 && offset < hitQuestionDataQuantity) {
            response = {
                hitsQuestions: hitsQuestions,
                next: `http://localhost:8081/question?offset=${offset + 10}`,
                prev: `http://localhost:8081/question?offset=${offset - 10}`
            }
        }

        response = {
            hitsQuestions: hitsQuestions,
            next: `http://localhost:8081/question?offset=10`
        };

        return response;
    }
}