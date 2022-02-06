import { getRepository, Repository } from "typeorm";
import { ICreateUser } from "../../../domain/models/ICreateUser";
import { IUser } from "../../../domain/models/IUser";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { User } from "../entities/User";

export class UserRepository implements IUserRepository {
    private ormRepository: Repository<IUser>;
    constructor() {
        this.ormRepository = getRepository(User);
    }

    public async save(user: IUser): Promise<IUser> {
        return this.ormRepository.save(user);
    }

    public async remove(user: IUser): Promise<IUser> {
        return this.ormRepository.remove(user);
    }

    public async create({ name, email, password }: ICreateUser): Promise<IUser> {
        const user = this.ormRepository.create({ name, email, password });

        return user;
    }

    public async findAll(): Promise<IUser[]> {
        const users = this.ormRepository.find({ 
            select: ['id','name', 'email'],
            order: {
                createdAt: "DESC"
            },
            take: 10
        })

        return users;
    }

    public async findById(id: string): Promise<IUser> {
        const user = await this.ormRepository.findOne(id);

        return user;
    }

    public async findByEmail(email: string): Promise<IUser> {
        const userEmail = await  this.ormRepository.findOne({ where: { email } })

        return userEmail;
    }
}