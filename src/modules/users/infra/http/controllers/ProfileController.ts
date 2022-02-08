import { Request, Response } from "express";
import { container } from 'tsyringe';
import UpdateProfileService from "../../../services/UpdateProfileService";

export default class ProfileController {
    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.user.id;
            const { 
                name,
                email, 
                password, 
                old_password 
            } = req.body
        
            const updateProfile = container.resolve(UpdateProfileService);

            const profile = await updateProfile.execute({ 
                id,
                name,
                email, 
                password,
                old_password
            });

            return res.json(profile);
        } catch (error) {
            return res.json(error.message);
        }
    }
}