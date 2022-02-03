import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { HitsQuestionRepository } from "../typeorm/repositories/HitsQuestionRepository";
import { HitsQuestions } from "../typeorm/entities/Hits";

interface IRequest {
    offset: number,
    limit: number;
}

interface IResponse {
    hitsQuestions: HitsQuestions[];
    next?: string;
    prev?: string;
}

export default class CustomListHitQuestionService {
    public async execute({ limit, offset }: IRequest): Promise<IResponse> {
        const hitsQuestionRepository = getCustomRepository(HitsQuestionRepository);

        const hitsQuestions = await hitsQuestionRepository.findWithOffsetAndLimit({
            limit,
            offset
        })

        const [, hitQuestionDataQuantity] = await hitsQuestionRepository.findAndCount()

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