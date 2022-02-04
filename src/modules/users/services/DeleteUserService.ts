import AppError from "../../../shared/errors/AppError"; 
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../infra/typeorm/repositories/UserEntity";

export default class DeleteUserService {
    public async execute(id: string): Promise<void> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findById(id);

        if(!user) {
            throw new AppError('User not found.')
        }

        await userRepository.remove(user);
    }
}