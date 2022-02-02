import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';

import AppError from '../errors/AppError';
import router from './routes/index.routes';
import '../typeorm/connection';

class App {
    app: express.Application;
    port = 8081

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.listen();
    }

    private routes() {
        this.app.use(express.json());
        this.app.use(express.urlencoded());
        this.app.use(router);
        this.app.use('/files', express.static('uploads/'));
        this.app.use(errors());
        this.app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
            if(error instanceof AppError) {
                return res.status(error.statusCode).json({
                    status: 'error',
                    message: error.message
                })
            }

            return res.status(500).json({
                status: 'error',
                error: 'Internal server error',
                message: error.message
            })
        })
    }

    private middlewares() {
        this.app.use(cors());
    }

    private listen() {
        this.app.listen(this.port, () => console.log("Iniciado com Sucesso"))
    }
}

new App();