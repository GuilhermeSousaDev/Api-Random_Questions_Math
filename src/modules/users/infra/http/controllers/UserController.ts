import { Request, Response } from "express";
import CreateUserService from "../../../services/CreateUserService";
import DeleteUserService from "../../../services/DeleteUserService";
import ListUsersService from "../../../services/ListUsersService";
import ShowUserService from "../../../services/ShowUserService";
import { container } from 'tsyringe';

export default class UserController {

    public async index(req: Request, res: Response): Promise<Response> {        
        const listUser = container.resolve(ListUsersService);

        const user = await listUser.execute();

        return res.json(user);
    }

    public async show(req: Request, res: Response): Promise<Response> {   
        const { id } = req.params
        
        const showUser = container.resolve(ShowUserService);

        const user = await showUser.execute(id);

        return res.json(user);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const { name, email, password } = req.body
        
            const createUser = container.resolve(CreateUserService);

            const user = await createUser.execute({ name, email, password });

            return res.json(user);
        } catch(error) {
            return res.json(error.message);
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        
        const deleteUser = container.resolve(DeleteUserService);

        await deleteUser.execute(id);

        return res.json({ message: 'Deletado com Sucesso' })
    }
}