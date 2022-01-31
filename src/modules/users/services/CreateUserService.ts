import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { User } from "../typeorm/entities/User";
import { UserRepository } from "../typeorm/repositories/UserEntity";
import { hash } from 'bcryptjs';

interface IRequest {
    name: string;
    email: string;
    password: string;
}

export default class CreateUserService {
    public async execute({ name, email, password }: IRequest): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);

        const emailExists = await userRepository.findByEmail(email);

        if(emailExists) {
            throw new AppError('This email already exists.');
        }

        const user = userRepository.create({ name, email, password });

        user.password = await hash(password, 8);

        await userRepository.save(user);

        return user;
    }
}