import { Request, Response } from "express";
import UpdateAvatarService from "../services/UpdateAvatarService";

export default class UserAvatarController {
    public async update(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const filename = req.file.originalname;
        const buffer = req.file.buffer;

        const updateAvatarService = new UpdateAvatarService();

        const user = await updateAvatarService.execute({ 
            id, 
            avatar: {
                filename,
                buffer,
            } 
        });

        return res.json(user);
    }
}