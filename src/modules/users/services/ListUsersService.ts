import { getCustomRepository } from "typeorm";
import { User } from "../infra/typeorm/entities/User";
import { UserRepository } from "../infra/typeorm/repositories/UserEntity";

export default class ListUsersService {
    public async execute(): Promise<User[]> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findAll();

        return user;
    }
}