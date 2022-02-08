import { 
    Column, 
    CreateDateColumn,
    Entity,
    ObjectID, 
    ObjectIdColumn, 
    UpdateDateColumn 
} from "typeorm";

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

    @Column({ default: 'perfil.png' })
    avatar: string;
    
    @CreateDateColumn({ default: Date.now() })
    createdAt: Date;

    @UpdateDateColumn({ default: Date.now() })
    updatedAt: Date;

}