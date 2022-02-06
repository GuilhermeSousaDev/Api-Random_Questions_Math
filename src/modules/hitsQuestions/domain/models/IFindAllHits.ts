import { ObjectID } from "typeorm";

export interface IFindAllHits {
    id: ObjectID, 
    user: string;
    userId: string;
    hits: number;
    createdAt: Date;
}