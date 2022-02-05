import { EntityRepository, Repository } from "typeorm";
import { IHits } from "../../../domain/models/IHits";
import { IPaginationHits } from "../../../domain/models/IPaginationHits";
import { IHitsQuestionsRepository } from "../../../domain/repositories/IHitsQuestionRepository";
import { HitsQuestions } from "../entities/Hits";

@EntityRepository(HitsQuestions)
export class HitsQuestionRepository 
    extends Repository<HitsQuestions>
    implements IHitsQuestionsRepository {
    public async findUserById(userId: string): Promise<IHits> {
        const userHitsQuestion = await this.findOne({ 
            where: { userId },
        });

        return userHitsQuestion;
    }

    public async findById(id: string): Promise<IHits> {
        const userHitsQuestion = await this.findOne(id);

        return userHitsQuestion;
    }

    public async findWithOffsetAndLimit({ 
        limit, 
        offset 
    }: IPaginationHits): Promise<IHits[]> {
        const hitsQuestions = await this.find({ 
            order: {
                hitsBhaskara: "DESC",
                hitsPitagoras: "DESC",
                hitsVelmedia: "DESC"
            },
            take: limit,
            skip: offset,
        })

        return hitsQuestions;
    }

    public async findTopBhaskara(): Promise<IHits[]> {
        const topHitQuestionBhaskara = await this.find({ 
            select: ['id', 'user', 'createdAt', 'updatedAt', 'hitsBhaskara'],
            order: {
                hitsBhaskara: "DESC"
            },
            take: 50,
        })

        return topHitQuestionBhaskara;
    }

    public async findTopPitagoras(): Promise<IHits[]> {
        const topHitQuestionPitagoras = await this.find({ 
            select: ['id', 'user', 'createdAt', 'updatedAt', 'hitsPitagoras'],
            order: {
                hitsPitagoras: "DESC"
            },
            take: 50,
        })

        return topHitQuestionPitagoras;
    }

    public async findTopVelmedia(): Promise<IHits[]> {
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