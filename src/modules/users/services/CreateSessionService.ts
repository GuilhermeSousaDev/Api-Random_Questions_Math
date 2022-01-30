import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { User } from "../typeorm/entities/User";
import { UserRepository } from "../typeorm/repositories/UserEntity";
import { compare, hash } from 'bcryptjs';
import { sign } from "jsonwebtoken";
import auth from "../../../config/auth";

interface IRequest {
    email: string;
    password: string;
}

interface IPayload {
    user: User;
    token: string;
}

export default class CreateSessionService {
    public async execute({ email, password }: IRequest): Promise<IPayload> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findByEmail(email);

        if(!user) {
            throw new AppError('User not found');
        }

        const verifiedPassword = await compare(password, user.password);

        if(!verifiedPassword) {
            throw new AppError('Incorrect Password');
        }

        const { id, name } = user;

        const token = sign({ id, name }, auth.secret, { expiresIn: auth.expire });

        return {
            user,
            token
        }
    }
}