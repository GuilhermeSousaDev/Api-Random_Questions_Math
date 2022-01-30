import { 
    Column, 
    CreateDateColumn, 
    Entity,
    ObjectID, 
    ObjectIdColumn, 
    OneToOne, 
    UpdateDateColumn 
} from "typeorm";
import { User } from "../../../users/typeorm/entities/User";

interface IUser {
    id: string;
    name: string;
}

@Entity()
export class HitsQuestions {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    hitsBhaskara: number;

    @Column()
    hitsPitagoras: number;

    @Column()
    hitsVelmedia: number;

    @OneToOne(() => User, user => user.hitQuestion)
    userId: User;

    @Column()
    user: IUser;

    @CreateDateColumn({ default: Date.now() })
    createdAt: Date;

    @UpdateDateColumn({ default: Date.now() })
    updatedAt: Date;

}