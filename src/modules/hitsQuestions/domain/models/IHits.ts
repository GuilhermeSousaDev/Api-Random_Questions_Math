import { ObjectID } from "typeorm";

export interface IHits {
    id: ObjectID;
    hitsBhaskara: number;
    hitsPitagoras: number;
    hitsVelmedia: number;
    userId: string;
    user: {
        id: string;
        name: string;
    };
    createdAt: Date;
    updatedAt: Date;
}