import { IHits } from "../models/IHits";
import { IPaginationHits } from "../models/IPaginationHits";

export interface IHitsQuestionsRepository {
    findUserById(userId: string): Promise<IHits>;
    findById(id: string): Promise<IHits>;
    findWithOffsetAndLimit({ limit, offset }: IPaginationHits): Promise<IHits[]>;
    findTopBhaskara(): Promise<IHits[]>;
    findTopPitagoras(): Promise<IHits[]>
    findTopVelmedia(): Promise<IHits[]>;
}