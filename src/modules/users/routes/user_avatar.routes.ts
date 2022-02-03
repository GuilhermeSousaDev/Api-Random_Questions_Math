import { Router} from 'express';
import multer from 'multer';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';
import UserAvatarController from '../controllers/UserAvatarController';

const userAvatarRouter = Router();

const userAvatarController = new UserAvatarController();
const multerConfig = multer();

userAvatarRouter.put(
    '/', 
    isAuthenticated, 
    multerConfig.single('avatar'),
    userAvatarController.update,
);

export default userAvatarRouter;