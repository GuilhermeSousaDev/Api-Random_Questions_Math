import { getRepository, Repository } from "typeorm";
import { ICreateHits } from "../../../domain/models/ICreateHits";
import { IFindAllHits } from "../../../domain/models/IFindAllHits";
import { IHits } from "../../../domain/models/IHits";
import { IPaginationHits } from "../../../domain/models/IPaginationHits";
import { IHitsQuestionsRepository } from "../../../domain/repositories/IHitsQuestionRepository";
import { HitsQuestions } from "../entities/Hits";

export class HitsQuestionRepository implements IHitsQuestionsRepository {
    private ormRepository: Repository<HitsQuestions>
    constructor() {
        this.ormRepository = getRepository(HitsQuestions);
    }

    public async create({ 
        hitsBhaskara, 
        hitsPitagoras, 
        hitsVelmedia, 
        user 
    }: ICreateHits): Promise<IHits> {
        const hitsQuestions = this.ormRepository.create({ 
            hitsBhaskara, 
            hitsPitagoras,
            hitsVelmedia,
            user,
        })

        return hitsQuestions;
    }

    public async remove(hitsQuestions: IHits): Promise<IHits> {
        return this.ormRepository.remove(hitsQuestions);
    }

    public async save(hitsQuestions: IHits): Promise<IHits> {
        return this.ormRepository.save(hitsQuestions);
    }

    public async find(): Promise<IHits[]> {
        return this.ormRepository.find();
    }

    public async findAndCount(): Promise<[IHits[], number]> {
        return this.ormRepository.findAndCount();
    }

    public async findUserById(userId: string): Promise<IHits> {
        const userHitsQuestion = await this.ormRepository.findOne({ 
            where: { userId },
        });

        return userHitsQuestion;
    }

    public async findById(id: string): Promise<IHits> {
        const userHitsQuestion = await this.ormRepository.findOne(id);

        return userHitsQuestion;
    }

    public async findWithOffsetAndLimit({ 
        limit, 
        offset 
    }: IPaginationHits): Promise<IHits[]> {
        const hitsQuestions = await this.ormRepository.find({ 
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
        const topHitQuestionBhaskara = await this.ormRepository.find({ 
            select: ['id', 'user', 'createdAt', 'updatedAt', 'hitsBhaskara'],
            order: {
                hitsBhaskara: "DESC"
            },
            take: 50,
        })

        return topHitQuestionBhaskara;
    }

    public async findTopPitagoras(): Promise<IHits[]> {
        const topHitQuestionPitagoras = await this.ormRepository.find({ 
            select: ['id', 'user', 'createdAt', 'updatedAt', 'hitsPitagoras'],
            order: {
                hitsPitagoras: "DESC"
            },
            take: 50,
        })

        return topHitQuestionPitagoras;
    }

    public async findTopVelmedia(): Promise<IHits[]> {
        const topHitQuestionVelmedia = await this.ormRepository.find({ 
            select: ['id', 'user', 'createdAt', 'updatedAt', 'hitsVelmedia'],
            order: {
                hitsVelmedia: "DESC"
            },
            take: 50,
        })

        return topHitQuestionVelmedia;
    }

    public async findAll(): Promise<IFindAllHits[]> {
        const listHitQuestions = await this.ormRepository.find();

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