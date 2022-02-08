import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";
import auth from "../../../../config/auth";
import AppError from "../../../errors/AppError";

interface IToken {
    id: string;
    name: string;
    avatar: string;
}

export default function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if(!token) {
        throw new AppError('Token not found.', 404);
    }

    try {
        verify(token, auth.secret);

        const { id, name, avatar } = decode(token) as IToken;

        req.user = { id, name, avatar };

        next();

    } catch (error) {
        throw new AppError('Invalid Token.');
    }
}