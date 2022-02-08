import AppError from "../../../shared/errors/AppError";
import { compare, hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { IUser } from "../domain/models/IUser";
import { IUserRepository } from "../domain/repositories/IUserRepository";

interface IRequest {
    id: string;
    name: string;
    email: string;
    password?: string;
    old_password?: string;
}

@injectable()
export default class UpdateProfileService {
    constructor(
        @inject('userRepository')
        private userRepository: IUserRepository
    ) {}

    public async execute({ 
        id, 
        name, 
        email, 
        password, 
        old_password 
    }: IRequest): Promise<IUser> {
        const user = await this.userRepository.findById(id);

        if(!user) {
            throw new AppError('User not Found');
        }

        const userNewEmail = await this.userRepository.findByEmail(email);
        
        if(userNewEmail && userNewEmail.id.toString() !== id) {
            throw new AppError('There is already one user with this email');
        }

        if(password && !old_password) {
            throw new AppError('Old Password is Required');
        }

        if(password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);

            if(!checkOldPassword) {
                throw new AppError('Old Password does not match');
            }
        } 

        const newPassword = await hash(password, 8);

        user.name = name;
        user.email = email;
        user.password = newPassword;

        this.userRepository.save(user);

        return user;
    }
}