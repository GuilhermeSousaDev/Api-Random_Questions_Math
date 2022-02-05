import AppError from "../../../shared/errors/AppError"; 
import { injectable, inject } from 'tsyringe';
import { IUserRepository } from "../domain/repositories/IUserRepository";

@injectable()
export default class DeleteUserService {
    constructor(
        @inject('userRepository')
        private userRepository: IUserRepository
    ) {}

    public async execute(id: string): Promise<void> {
        const user = await this.userRepository.findById(id);

        if(!user) {
            throw new AppError('User not found.')
        }

        await this.userRepository.remove(user);
    }
}