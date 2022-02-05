import { IUser } from "../domain/models/IUser";
import { injectable, inject } from 'tsyringe';
import { IUserRepository } from "../domain/repositories/IUserRepository";

@injectable()
export default class ListUsersService {
    constructor(
        @inject('userRepository')
        private userRepository: IUserRepository
    ) {}
    public async execute(): Promise<IUser[]> {
        const user = await this.userRepository.findAll();

        return user;
    }
}