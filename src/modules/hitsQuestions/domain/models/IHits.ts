import { ObjectID } from "typeorm";

export interface IHits {
    id: ObjectID;
    hitsBhaskara: number;
    hitsPitagoras: number;
    hitsVelmedia: number;
    user: {
        id: string;
        name: string;
    };
    createdAt: Date;
    updatedAt: Date;
}