import fs from 'fs';
import crypto from 'crypto';
import { getCustomRepository } from "typeorm";
import { User } from "../infra/typeorm/entities/User";
import { UserRepository } from "../infra/typeorm/repositories/UserEntity";

interface IRequest {
    id: string
    avatar: {
        filename: string;
        buffer: Buffer;
    }
}

export default class UpdateAvatarService {
    public async execute({ id, avatar }: IRequest): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne(id);

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

        await userRepository.save(user);

        return user;
    }
}