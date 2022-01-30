import { Router} from 'express';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';
import UserController from '../controllers/UserController';
import { celebrate, Joi, Segments } from 'celebrate';

const userRouter = Router();

const userController = new UserController();

userRouter.get('/', isAuthenticated, userController.index);
userRouter.get(
    '/:id', 
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required()
        }
    }),
    userController.show,
);
userRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }
    }),
    userController.create,
);
userRouter.delete(
    '/:id', 
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required()
        }
    }),
    userController.delete,
);

export default userRouter;