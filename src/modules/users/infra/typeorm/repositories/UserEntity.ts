import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    public async findAll(): Promise<User[]> {
        const users = this.find({ 
            select: ['id','name', 'email'],
            order: {
                createdAt: "DESC"
            },
            take: 10
        })

        return users;
    }

    public async findById(id: string): Promise<User> {
        const userId = await this.findOne(id);

        return userId;
    }

    public async findByEmail(email: string): Promise<User> {
        const userEmail = await this.findOne({ where: { email } })

        return userEmail;
    }
}