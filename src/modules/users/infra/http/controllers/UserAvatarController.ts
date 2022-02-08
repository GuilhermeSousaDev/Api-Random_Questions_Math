import { Request, Response } from "express";
import UpdateAvatarService from "../../../services/UpdateAvatarService";
import { container } from 'tsyringe';

export default class UserAvatarController {
    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.user.id;
            const filename = req.file.originalname;
            const buffer = req.file.buffer;

            const updateAvatarService = container.resolve(UpdateAvatarService);

            const user = await updateAvatarService.execute({ 
                id, 
                avatar: {
                    filename,
                    buffer,
                } 
            });

            return res.json(user);
        } catch(error) {
            return res.json(error.message)
        }
    }
}