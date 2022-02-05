import { ICreateUser } from "../models/ICreateUser";
import { IUser } from "../models/IUser";

export interface IUserRepository {
    findAll(): Promise<IUser[]>;
    findById(id: string): Promise<IUser>;
    findByEmail(email: string): Promise<IUser>;
    remove(user: IUser): Promise<IUser>;
    create(data: ICreateUser): Promise<IUser>;
    save(user: IUser): Promise<IUser>;
}