import { ICreateHits } from "../models/ICreateHits";
import { IFindAllHits } from "../models/IFindAllHits";
import { IHits } from "../models/IHits";
import { IPaginationHits } from "../models/IPaginationHits";

export interface IHitsQuestionsRepository {
    find(): Promise<IHits[]>;
    findAndCount(): Promise<[IHits[], number]>
    findUserById(userId: string): Promise<IHits>;
    findById(id: string): Promise<IHits>;
    findWithOffsetAndLimit({ limit, offset }: IPaginationHits): Promise<IHits[]>;
    findTopBhaskara(): Promise<IHits[]>;
    findTopPitagoras(): Promise<IHits[]>
    findTopVelmedia(): Promise<IHits[]>;
    findAll(): Promise<IFindAllHits[]>;
    remove(hitsQuestions: IHits): Promise<IHits>;
    create(data: ICreateHits): Promise<IHits>;
    save(hitsQuestions: IHits): Promise<IHits>;
}