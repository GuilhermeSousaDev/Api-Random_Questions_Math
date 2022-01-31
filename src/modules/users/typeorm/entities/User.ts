import { 
    Column, 
    CreateDateColumn,
    Entity,
    JoinColumn,
    ObjectID, 
    ObjectIdColumn, 
    OneToOne,
    UpdateDateColumn 
} from "typeorm";
import { HitsQuestions } from "../../../hitsQuestions/typeorm/entities/Hits";

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToOne(() => HitsQuestions, hitQuestion => hitQuestion.userId)
    hitQuestion: HitsQuestions;
    
    @CreateDateColumn({ default: Date.now() })
    createdAt: Date;

    @UpdateDateColumn({ default: Date.now() })
    updatedAt: Date;

}