import AppError from "../../../shared/errors/AppError";
import auth from "../../../config/auth";
import { compare } from 'bcryptjs';
import { sign } from "jsonwebtoken";
import { ICreateSession } from "../domain/models/ICreateSession";
import { IPayload } from "../domain/models/IPayload";
import { IUserRepository } from "../domain/repositories/IUserRepository";
import { injectable, inject } from 'tsyringe';

@injectable()
export default class CreateSessionService {
    constructor(
        @inject('userRepository')
        private userRepository: IUserRepository
    ) {}

    public async execute({ email, password }: ICreateSession): Promise<IPayload> {
        const user = await this.userRepository.findByEmail(email);

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