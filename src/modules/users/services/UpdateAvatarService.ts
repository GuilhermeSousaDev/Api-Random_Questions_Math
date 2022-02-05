import fs from 'fs';
import crypto from 'crypto';
import { IUser } from '../domain/models/IUser';
import { injectable, inject } from 'tsyringe';
import { IUserRepository } from '../domain/repositories/IUserRepository';

interface IRequest {
    id: string
    avatar: {
        filename: string;
        buffer: Buffer;
    }
}

@injectable()
export default class UpdateUserAvatarService {
    constructor(
        @inject('userRepository')
        private userRepository: IUserRepository
    ) {}
    public async execute({ id, avatar }: IRequest): Promise<IUser> {
        const user = await this.userRepository.findById(id);

        if(user.avatar) {
            const fileExists = fs.statSync(`uploads/${user.avatar}`);

            if(fileExists) {
                fs.unlinkSync(`uploads/${user.avatar}`);
            }
        }

        const hash = crypto.randomBytes(10).toString('hex');

        const filenameHash = `${hash}-${avatar.filename}`;

        fs.writeFileSync(`uploads/${filenameHash}`, avatar.buffer);

        user.avatar = filenameHash;

        await this.userRepository.save(user);

        return user;
    }
}