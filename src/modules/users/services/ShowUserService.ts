import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { User } from "../infra/typeorm/entities/User";
import { UserRepository } from "../infra/typeorm/repositories/UserEntity";

export default class ShowUserService {
    public async execute(id: string): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findById(id);

        if(!user) {
            throw new AppError('User not found.')
        }

        return user;
    }
}