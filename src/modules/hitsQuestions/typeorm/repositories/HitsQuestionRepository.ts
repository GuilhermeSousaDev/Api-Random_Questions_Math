import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import { HitsQuestions } from "../entities/Hits";

interface IQuery {
    offset: number,
    limit: number;
}

@EntityRepository(HitsQuestions)
export class HitsQuestionRepository extends Repository<HitsQuestions> {
    public async findUserById(userId: string): Promise<HitsQuestions> {
        const userHitsQuestion = await this.findOne({ 
            where: { userId },
        });

        return userHitsQuestion;
    }

    public async findById(id: string): Promise<HitsQuestions> {
        const userHitsQuestion = await this.findOne(id);

        return userHitsQuestion;
    }

    public async findWithOffsetAndLimit({ 
        limit, 
        offset 
    }: IQuery): Promise<HitsQuestions[]> {
        const hitsQuestions = await this.find({ 
            order: {
                hitsBhaskara: "DESC",
                hitsPitagoras: "DESC",
                hitsVelmedia: "DESC"
            },
            take: limit,
            skip: offset
        })

        return hitsQuestions;
    }

    public async findTopBhaskara(): Promise<HitsQuestions[]> {
        const topHitQuestionBhaskara = await this.find({ 
            select: ['id', 'user', 'createdAt', 'updatedAt', 'hitsBhaskara'],
            order: {
                hitsBhaskara: "DESC"
            },
            take: 50,
        })

        return topHitQuestionBhaskara;
    }

    public async findTopPitagoras(): Promise<HitsQuestions[]> {
        const topHitQuestionPitagoras = await this.find({ 
            select: ['id', 'user', 'createdAt', 'updatedAt', 'hitsPitagoras'],
            order: {
                hitsPitagoras: "DESC"
            },
            take: 50,
        })

        return topHitQuestionPitagoras;
    }

    public async findTopVelmedia(): Promise<HitsQuestions[]> {
        const topHitQuestionVelmedia = await this.find({ 
            select: ['id', 'user', 'createdAt', 'updatedAt', 'hitsVelmedia'],
            order: {
                hitsVelmedia: "DESC"
            },
            take: 50,
        })

        return topHitQuestionVelmedia;
    }
}